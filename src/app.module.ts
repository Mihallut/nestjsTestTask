import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelRoomsModule } from './hotel-rooms/hotel-rooms.module';
import { OrdersModule } from './orders/orders.module';
import { HotelRoom } from './models/hotel-room.entity';
import { Order } from './models/order.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'dpg-cukukqd2ng1s7381f0v0-a.frankfurt-postgres.render.com',
      port: 5432,
      username: 'mihqas',
      password: '1DV9Z1r7qkOcj1OhPMJdGbxwJgLMJvwM',
      database: 'hoteldb_r8it',
      models: [HotelRoom, Order],
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      logging: false,
    }),
    HotelRoomsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }