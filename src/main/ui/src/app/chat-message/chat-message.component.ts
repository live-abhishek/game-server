import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../messages/message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input()
  message: Message;

  constructor(
  ) { }

  ngOnInit() {
  }

}
