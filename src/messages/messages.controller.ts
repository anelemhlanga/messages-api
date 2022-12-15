import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessages() {}

  @Post()
  postMessages(@Body() body: any) {
    console.debug('body', body);
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    console.debug('id,', id);
  }
}
