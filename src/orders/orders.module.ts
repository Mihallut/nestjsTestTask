import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from '../models/order.entity';
import { HotelRoom } from '@scr/models/hotel-room.entity';
import { HotelRoomsModule } from '@scr/hotel-rooms/hotel-rooms.module';
@Module({
  imports: [
    SequelizeModule.forFeature([Order, HotelRoom]),
    HotelRoomsModule
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule { }