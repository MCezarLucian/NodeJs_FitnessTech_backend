export class Message {
  content: string;
  sender: string;
  date: Date;
}

export class GroupDTO {
  participants: string[];
  messages: Message[];
}
