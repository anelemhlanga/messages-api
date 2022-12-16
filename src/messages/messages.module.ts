import { MessageController } from '@controllers/message.controller';
import { Module } from '@nestjs/common';
import { MessageRepository } from '@repositories/message.repository';
import { MessageService } from '@services/message.service';

@Module({
  controllers: [MessageController],
  providers: [MessageService, MessageRepository],
})
export class MessagesModule {}
