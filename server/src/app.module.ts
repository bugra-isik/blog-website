import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsController } from './blogs/blogs.controller';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [BlogsModule,ConfigModule.forRoot()],
  controllers: [AppController, BlogsController],
  providers: [AppService],
})
export class AppModule {}
