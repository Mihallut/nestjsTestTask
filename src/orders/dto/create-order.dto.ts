import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsDate, IsNotEmpty, Min } from 'class-validator';

export class CreateOrderDto {
    @ApiProperty({
        example: 1,
        description: 'The ID of the hotel room associated with the order',
    })
    @IsInt()
    @Min(1)
    @IsNotEmpty()
    hotelRoomId: number;

    @ApiProperty({
        example: '2023-10-01T00:00:00.000Z',
        description: 'The start date of the booking',
    })
    @IsDate()
    @IsNotEmpty()
    startDate: Date;

    @ApiProperty({
        example: '2023-10-05T00:00:00.000Z',
        description: 'The end date of the booking',
    })
    @IsDate()
    @IsNotEmpty()
    endDate: Date;
}