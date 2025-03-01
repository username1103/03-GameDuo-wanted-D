import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BossRaidModule } from './boss-raid/boss-raid.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), BossRaidModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
