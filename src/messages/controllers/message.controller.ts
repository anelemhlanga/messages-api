import { MessageDto } from '@dto/message.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { MessageService } from '@services/message.service';

@Controller('messages')
export class MessageController {
  constructor(public messageService: MessageService) {}

  @Get()
  getMessages() {
    return this.messageService.findAll();
  }

  @Post()
  postMessages(@Body() body: MessageDto) {
    return this.messageService.createMessage(body.title);
  }

  @Get('/:id')
  async getMessageById(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('id not found');
    }

    return message;
  }
}
