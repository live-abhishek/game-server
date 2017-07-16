import { Component, OnInit } from '@angular/core';
import { Message } from '../messages/message.model';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  private messages: Message[] = [];

  constructor() { }

  ngOnInit() {
    let message1 = new Message();
    message1.sender = "Masterchief"; message1.text = "We are just getting started!";
    let message2 = new Message();
    message2.sender = "Cortana"; message2.text = "Don't make a girl a promise if you know you can't keep it";
    this.messages.push(message1, message2);
  }

}
