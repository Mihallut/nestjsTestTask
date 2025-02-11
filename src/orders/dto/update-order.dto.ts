import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';

export class UpdateOrderDto {
    @ApiProperty({
        example: '2023-10-02T00:00:00.000Z',
        description: 'The updated start date of the booking (optional)',
        required: false,
    })
    @IsDate()
    @IsOptional()
    startDate?: Date;

    @ApiProperty({
        example: '2023-10-06T00:00:00.000Z',
        description: 'The updated end date of the booking (optional)',
        required: false,
    })
    @IsDate()
    @IsOptional()
    endDate?: Date;
}