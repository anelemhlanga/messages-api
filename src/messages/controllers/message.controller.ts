import { MessageDto } from '@dto/message.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from '@services/message.service';

@Controller('messages')
export class MessageController {
  messageService: MessageService;

  constructor() {
    this.messageService = new MessageService();
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
  getMessageById(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
}
