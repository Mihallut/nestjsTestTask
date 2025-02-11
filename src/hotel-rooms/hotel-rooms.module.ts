import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HotelRoom } from '../models/hotel-room.entity';
import { HotelRoomsController } from './hotel-rooms.controller';
import { HotelRoomsService } from './hotel-rooms.service';

@Module({
    imports: [SequelizeModule.forFeature([HotelRoom])],
    controllers: [HotelRoomsController],
    providers: [HotelRoomsService],
    exports: [HotelRoomsService],
})
export class HotelRoomsModule { }