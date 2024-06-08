import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MessagingModule } from './messaging/messaging.module';
import { HashService } from './hash/hash.service';
import { MailerService } from './mailer/mailer.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    MessagingModule,
    AuthModule,
  ],
  controllers: [],
  providers: [HashService, MailerService],
  exports: [HashService],
})
export class AppModule {}

