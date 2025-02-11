import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    HttpCode,
    HttpStatus,
    HttpException
} from '@nestjs/common';
import { HotelRoomsService } from './hotel-rooms.service';
import { CreateHotelRoomDto } from './dto/create-hotel-room.dto';
import { UpdateHotelRoomDto } from './dto/update-hotel-room.dto';
import { HotelRoomResponseDto } from './dto/hotel-room.response.dto';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiNotFoundResponse,
    ApiBadRequestResponse,
    ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

@ApiTags('Hotel Rooms')
@Controller('hotel-rooms')
export class HotelRoomsController {
    constructor(private readonly hotelRoomsService: HotelRoomsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all hotel rooms' })
    @ApiResponse({
        status: 200,
        description: 'List of hotel rooms successfully retrieved.',
        type: [HotelRoomResponseDto],
    })
    @ApiNotFoundResponse({ description: 'No hotel rooms found.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async findAll(): Promise<HotelRoomResponseDto[]> {
        return this.hotelRoomsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a hotel room by ID' })
    @ApiResponse({
        status: 200,
        description: 'Hotel room successfully found.',
        type: HotelRoomResponseDto,
    })
    @ApiNotFoundResponse({ description: 'Hotel room not found.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async findOne(@Param('id') id: string): Promise<HotelRoomResponseDto> {
        const room = await this.hotelRoomsService.findOne(+id);
        if (!room) {
            throw new HttpException('Hotel room not found', HttpStatus.NOT_FOUND);
        }
        return room;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new hotel room' })
    @ApiResponse({
        status: 201,
        description: 'Hotel room successfully created.',
        type: HotelRoomResponseDto,
    })
    @ApiBadRequestResponse({ description: 'Invalid input data provided.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async create(@Body() createHotelRoomDto: CreateHotelRoomDto): Promise<HotelRoomResponseDto> {
        return this.hotelRoomsService.create(createHotelRoomDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a hotel room by ID' })
    @ApiResponse({
        status: 200,
        description: 'Hotel room successfully updated.',
        type: HotelRoomResponseDto,
    })
    @ApiNotFoundResponse({ description: 'Hotel room not found.' })
    @ApiBadRequestResponse({ description: 'Invalid input data provided.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async update(
        @Param('id') id: string,
        @Body() updateHotelRoomDto: UpdateHotelRoomDto,
    ): Promise<HotelRoomResponseDto> {
        return this.hotelRoomsService.update(+id, updateHotelRoomDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete a hotel room by ID' })
    @ApiResponse({
        status: 204,
        description: 'Hotel room successfully deleted.',
    })
    @ApiNotFoundResponse({ description: 'Hotel room not found.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.hotelRoomsService.remove(+id);
    }
}
