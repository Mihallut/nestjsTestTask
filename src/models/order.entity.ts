import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { HotelRoom } from '@scr/models/hotel-room.entity';
@Table
export class Order extends Model {
    @ForeignKey(() => HotelRoom)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    hotelRoomId: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    startDate: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    endDate: Date;
}