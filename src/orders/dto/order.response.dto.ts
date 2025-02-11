import { ApiProperty } from '@nestjs/swagger';

export class OrderResponseDto {
    @ApiProperty({
        example: 1,
        description: 'The unique identifier of the order',
    })
    id: number;

    @ApiProperty({
        example: 1,
        description: 'The ID of the hotel room associated with the order',
    })
    hotelRoomId: number;

    @ApiProperty({
        example: '2023-10-01T00:00:00.000Z',
        description: 'The start date of the booking',
    })
    startDate: Date;

    @ApiProperty({
        example: '2023-10-05T00:00:00.000Z',
        description: 'The end date of the booking',
    })
    endDate: Date;

    @ApiProperty({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The date when the order was created',
    })
    createdAt: Date;

    @ApiProperty({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The date when the order was last updated',
    })
    updatedAt: Date;
}