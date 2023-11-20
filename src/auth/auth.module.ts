import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { StudentsModule } from 'src/students/students.module';
import { TeachersModule } from 'src/teachers/teachers.module';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports: [
    UsersModule,
    TeachersModule,
    StudentsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
