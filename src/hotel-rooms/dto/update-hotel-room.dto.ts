import { ApiProperty } from '@nestjs/swagger';
import {
    IsString,
    IsInt,
    Min,
    IsBoolean,
    IsOptional,
    IsArray,
} from 'class-validator';

export class UpdateHotelRoomDto {
    @ApiProperty({
        example: 'Luxury Suite',
        description: 'The updated name of the hotel room',
        required: false,
    })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({
        example: 'A spacious room with a king-sized bed and ocean view.',
        description: 'The updated description of the hotel room',
        required: false,
    })
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty({
        example: 101,
        description: 'The updated room number',
        required: false,
    })
    @IsInt()
    @Min(1)
    @IsOptional()
    roomNumber?: number;

    @ApiProperty({
        example: 200,
        description: 'The updated price per night (in dollars)',
        required: false,
    })
    @IsInt()
    @Min(1)
    @IsOptional()
    pricePerNight?: number;

    @ApiProperty({
        example: 4,
        description: 'The updated maximum number of guests',
        required: false,
    })
    @IsInt()
    @Min(1)
    @IsOptional()
    maxGuests?: number;

    @ApiProperty({
        example: ['Wi-Fi', 'TV', 'Mini-bar', 'Air conditioning'],
        description: 'The updated list of amenities in the room',
        required: false,
    })
    @IsArray()
    @IsOptional()
    amenities?: string[];
}