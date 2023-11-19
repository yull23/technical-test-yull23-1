import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      // ssl: process.env.POSTGRES_SSL === 'true',
      // extra: {
      //   ssl:
      //     process.env.POSTGRES_SSL === 'true'
      //       ? {
      //           rejectUnauthorized: false,
      //         }
      //       : null,
      // },
    }),
    // Otros módulos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
