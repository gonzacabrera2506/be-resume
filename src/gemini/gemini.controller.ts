import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { GeminiService } from './gemini.service';
import { FileInterceptor } from '@nestjs/platform-express/multer';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) { }

  @Post('/basic-adjunt-prompt')
  @UseInterceptors(FileInterceptor('file'))
  async basicPrompt(@UploadedFile() file: Express.Multer.File) {
    return this.geminiService.basicPrompt(file);
  }
}
