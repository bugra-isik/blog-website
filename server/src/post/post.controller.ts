import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';

type Root = {
  id: string;
  title: string;
  author: string;
  tags: Array<string>;
  readingTime: number;
  mainImage: File;
  content: string;
};

@Controller('post')
export class PostController {
  @Post()
  addNewPost(@Body() body: Root) {
    const errors = validateRoot(body);
    if (errors.length > 0) {
      const timestamp = new Date();
      const errorObject = {
        statusCode: HttpStatus.BAD_REQUEST,
        message: `${errors.join(',')}`,
        timestamp: timestamp,
      };
      throw new HttpException(errorObject, HttpStatus.BAD_REQUEST, {
        cause: new Error('Cause Error'),
      });
    }
    return body;
  }
}

function validateRoot(data: Root): string[] {
  const errors: string[] = [];
  typeof data.id !== 'string' && errors.push('id must be a string');
  typeof data.title !== 'string' && errors.push('title must be a string');
  typeof data.author !== 'string' && errors.push('author must be a string');
  !Array.isArray(data.tags) && errors.push('tags must be a Array<string>');
  typeof data.readingTime !== 'number' &&
    errors.push('readingTime must be a number');
  typeof data.mainImage === 'object' &&
    data.mainImage instanceof File &&
    errors.push('mainImage must be a File');
  typeof data.content !== 'string' && errors.push('content must be a string');

  return errors;
}
