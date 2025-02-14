import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'HotelRooms',
    timestamps: true,
})
export class HotelRoom extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    roomNumber: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    pricePerNight: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    maxGuests: number;

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        allowNull: true,
    })
    amenities: string[];
}