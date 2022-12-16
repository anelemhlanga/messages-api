import { MessageRepository } from '@repositories/message.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  constructor(public messageRepository: MessageRepository) {}

  findOne(id: string) {
    return this.messageRepository.findOne(id);
  }

  findAll() {
    return this.messageRepository.findAll();
  }

  createMessage(content: string) {
    return this.messageRepository.create(content);
  }
}
