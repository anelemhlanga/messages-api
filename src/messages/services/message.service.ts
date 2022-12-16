import { MessageRepository } from '@repositories/message.repository';

interface Repository {
  findOne(id: string);
  findAll();
  createMessge(content: string);
}

export class MessageService {
  messagesRepo: Repository;

  constructor(repo: Repository) {
    this.messagesRepo = repo;
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  createMessage(content: string) {
    return this.messagesRepo.createMessge(content);
  }
}
