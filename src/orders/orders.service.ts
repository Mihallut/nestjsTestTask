import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from '../models/order.entity';
import { HotelRoomsService } from '@scr/hotel-rooms/hotel-rooms.service';
import { OrderResponseDto } from './dto/order.response.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order)
        private readonly orderModel: typeof Order,
        private readonly hotelRoomService: HotelRoomsService,
    ) { }

    private mapToDto(entity: Order): OrderResponseDto {
        return {
            id: entity.id,
            hotelRoomId: entity.hotelRoomId,
            startDate: entity.startDate,
            endDate: entity.endDate,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }

    private mapToDtos(entities: Order[]): OrderResponseDto[] {
        return entities.map((entity) => this.mapToDto(entity));
    }

    async findAll(): Promise<OrderResponseDto[]> {
        const orders = await this.orderModel.findAll();
        return this.mapToDtos(orders);
    }

    async findOne(id: number): Promise<OrderResponseDto | null> {
        const order = await this.orderModel.findByPk(id);
        if (!order) {
            return null;
        }
        return this.mapToDto(order);
    }

    async create(data: Partial<Order>): Promise<OrderResponseDto> {
        if (data.hotelRoomId === undefined) {
            throw new HttpException('hotelRoomId is required', HttpStatus.BAD_REQUEST);
        }
        const hotelRoom = await this.hotelRoomService.findOne(data.hotelRoomId);
        if (!hotelRoom || !hotelRoom.isAvailable) {
            throw new HttpException('Hotel room was already booked', HttpStatus.CONFLICT);
        }
        const order = await this.orderModel.create(data);
        await this.hotelRoomService.changeIsAvailable(+data.hotelRoomId);
        return this.mapToDto(order);
    }

    async update(id: number, data: Partial<Order>): Promise<OrderResponseDto> {
        const [updatedRowsCount] = await this.orderModel.update(data, { where: { id } });
        if (updatedRowsCount === 0) {
            throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        }
        const updatedOrder = await this.orderModel.findByPk(id);
        if (!updatedOrder) {
            throw new HttpException('Order not found after update', HttpStatus.NOT_FOUND);
        }
        return this.mapToDto(updatedOrder);
    }

    async remove(id: number): Promise<void> {
        const order = await this.orderModel.findByPk(id);
        if (!order) {
            throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        }
        await order.destroy();
    }
}