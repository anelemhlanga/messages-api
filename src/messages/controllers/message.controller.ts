import { MessageDto } from '@dto/message.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';

interface Service {
  findOne(id: string);
  createMessage(content: string);
  findAll();
}

@Controller('messages')
export class MessageController {
  messageService: Service;

  constructor(service: Service) {
    this.messageService = service;
  }

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
