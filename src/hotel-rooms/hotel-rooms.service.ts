import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HotelRoom } from '../models/hotel-room.entity';
import { HotelRoomResponseDto } from './dto/hotel-room.response.dto';

@Injectable()
export class HotelRoomsService {
    constructor(
        @InjectModel(HotelRoom)
        private readonly hotelRoomModel: typeof HotelRoom,
    ) { }

    private mapToDto(entity: HotelRoom): HotelRoomResponseDto {
        return {
            id: entity.id,
            roomNumber: entity.roomNumber,
            name: entity.name,
            description: entity.description,
            pricePerNight: entity.pricePerNight,
            maxGuests: entity.maxGuests,
            isAvailable: entity.isAvailable,
            amenities: entity.amenities,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }

    private mapToDtos(entities: HotelRoom[]): HotelRoomResponseDto[] {
        return entities.map((entity) => this.mapToDto(entity));
    }

    async findAll(): Promise<HotelRoomResponseDto[]> {
        const rooms = await this.hotelRoomModel.findAll();
        return this.mapToDtos(rooms);
    }

    async findOne(id: number): Promise<HotelRoomResponseDto | null> {
        const room = await this.hotelRoomModel.findByPk(id);
        if (!room) {
            return null;
        }
        return this.mapToDto(room);
    }

    async create(data: Partial<HotelRoom>): Promise<HotelRoomResponseDto> {
        const room = await this.hotelRoomModel.create(data);
        return this.mapToDto(room);
    }

    async update(id: number, data: Partial<HotelRoom>): Promise<HotelRoomResponseDto> {
        const [updatedRowsCount] = await this.hotelRoomModel.update(data, { where: { id } });
        if (updatedRowsCount === 0) {
            throw new HttpException('Hotel room not found', HttpStatus.NOT_FOUND);
        }
        const updatedRoom = await this.hotelRoomModel.findByPk(id);
        if (!updatedRoom) {
            throw new HttpException('Hotel room not found after update', HttpStatus.NOT_FOUND);
        }
        return this.mapToDto(updatedRoom);
    }

    async remove(id: number): Promise<void> {
        const room = await this.hotelRoomModel.findByPk(id);
        if (!room) {
            throw new HttpException('Hotel room not found', HttpStatus.NOT_FOUND);
        }
        await room.destroy();
    }

    async changeIsAvailable(id: number): Promise<void> {
        const room = await this.hotelRoomModel.findByPk(id);
        if (!room) {
            throw new HttpException('Hotel room not found', HttpStatus.NOT_FOUND);
        }

        room.isAvailable = !room.isAvailable;

        await room.save();
    }
}