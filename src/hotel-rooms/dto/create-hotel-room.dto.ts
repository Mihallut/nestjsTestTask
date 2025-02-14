import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsNotEmpty,
    IsInt,
    Min,
    IsBoolean,
    IsOptional,
    IsArray,
} from 'class-validator';

export class CreateHotelRoomDto {
    @ApiProperty({
        example: 'Luxury Suite',
        description: 'The name of the room',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: 'A spacious room with a king-sized bed and ocean view.',
        description: 'The description of the room',
    })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({
        example: 101,
        description: 'The room number',
    })
    @IsInt()
    @Min(1)
    roomNumber: number;

    @ApiProperty({
        example: 200,
        description: 'The price per night (in dollars)',
    })
    @IsInt()
    @Min(1)
    pricePerNight: number;

    @ApiProperty({
        example: 4,
        description: 'The maximum number of guests allowed',
    })
    @IsInt()
    @Min(1)
    maxGuests: number;

    @ApiProperty({
        example: ['Wi-Fi', 'TV', 'Mini-bar', 'Air conditioning'],
        description: 'The amenities available in the room',
        required: false,
    })
    @IsArray()
    @IsOptional()
    amenities?: string[];
}