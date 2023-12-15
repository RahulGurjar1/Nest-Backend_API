// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost', 
      port: 5432,        
      username: 'postgres', 
      password: 'PostGres@1493', 
      database: 'postgres', 
      entities: [User],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([User]),
    UsersModule,
    AuthModule,
    JwtModule.register({
      secret: 'key', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
