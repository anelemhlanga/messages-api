import { MessageController } from '@controllers/message.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MessageController],
})
export class MessagesModule {}
