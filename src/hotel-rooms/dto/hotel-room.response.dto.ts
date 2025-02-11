import { ApiProperty } from '@nestjs/swagger';

export class HotelRoomResponseDto {
    @ApiProperty({
        example: 1,
        description: 'The unique identifier of the hotel room',
    })
    id: number;

    @ApiProperty({
        example: 101,
        description: 'The room number',
    })
    roomNumber: number;

    @ApiProperty({
        example: 'Luxury Suite',
        description: 'The name of the hotel room',
    })
    name: string;

    @ApiProperty({
        example: 'A spacious room with a king-sized bed and ocean view.',
        description: 'The description of the hotel room',
    })
    description: string;

    @ApiProperty({
        example: 200,
        description: 'The price per night (in dollars)',
    })
    pricePerNight: number;

    @ApiProperty({
        example: 4,
        description: 'The maximum number of guests allowed in the room',
    })
    maxGuests: number;

    @ApiProperty({
        example: true,
        description: 'Whether the room is available for booking',
    })
    isAvailable: boolean;

    @ApiProperty({
        example: ['Wi-Fi', 'TV', 'Mini-bar', 'Air conditioning'],
        description: 'The list of amenities in the room',
    })
    amenities: string[];

    @ApiProperty({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The date when the room was created',
    })
    createdAt: Date;

    @ApiProperty({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The date when the room was last updated',
    })
    updatedAt: Date;
}