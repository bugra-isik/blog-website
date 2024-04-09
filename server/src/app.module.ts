import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsController } from './blogs/blogs.controller';
import { BlogsModule } from './blogs/blogs.module';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';

@Module({
  imports: [BlogsModule,ConfigModule.forRoot(), PostModule],
  controllers: [AppController, BlogsController, PostController],
  providers: [AppService],
})
export class AppModule {}
