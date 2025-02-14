import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelRoomsModule } from './hotel-rooms/hotel-rooms.module';
import { OrdersModule } from './orders/orders.module';
import { HotelRoom } from './models/hotel-room.entity';
import { Order } from './models/order.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule], // Импортируем ConfigModule здесь
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        models: [HotelRoom, Order],
        dialectOptions: {
          "ssl": {
            "require": true,
            "rejectUnauthorized": false
          }
        },
        logging: false,
      }),
      inject: [ConfigService], // Инжектируем ConfigService
    }),
    HotelRoomsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }