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
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderResponseDto } from './dto/order.response.dto';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiNotFoundResponse,
    ApiBadRequestResponse,
    ApiInternalServerErrorResponse,
    ApiConflictResponse,
} from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all orders' })
    @ApiResponse({
        status: 200,
        description: 'List of orders successfully retrieved.',
        type: [OrderResponseDto],
    })
    @ApiNotFoundResponse({ description: 'No orders found.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async findAll(): Promise<OrderResponseDto[]> {
        return this.ordersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get an order by ID' })
    @ApiResponse({
        status: 200,
        description: 'Order successfully found.',
        type: OrderResponseDto,
    })
    @ApiNotFoundResponse({ description: 'Order not found.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async findOne(@Param('id') id: string): Promise<OrderResponseDto> {
        const order = await this.ordersService.findOne(+id);
        if (!order) {
            throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        }
        return order;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create a new order' })
    @ApiResponse({
        status: 201,
        description: 'Order successfully created.',
        type: OrderResponseDto,
    })
    @ApiBadRequestResponse({ description: 'Invalid input data provided.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    @ApiConflictResponse({ description: 'Hotel room already booked' })
    async create(@Body() createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
        return this.ordersService.create(createOrderDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an order by ID' })
    @ApiResponse({
        status: 200,
        description: 'Order successfully updated.',
        type: OrderResponseDto,
    })
    @ApiNotFoundResponse({ description: 'Order not found.' })
    @ApiBadRequestResponse({ description: 'Invalid input data provided.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async update(
        @Param('id') id: string,
        @Body() updateOrderDto: UpdateOrderDto,
    ): Promise<OrderResponseDto> {
        return this.ordersService.update(+id, updateOrderDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Delete an order by ID' })
    @ApiResponse({
        status: 204,
        description: 'Order successfully deleted.',
    })
    @ApiNotFoundResponse({ description: 'Order not found.' })
    @ApiInternalServerErrorResponse({ description: 'Internal server error occurred.' })
    async remove(@Param('id') id: string): Promise<void> {
        await this.ordersService.remove(+id);
    }
}