import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatMessage } from '../messages/message.model';

import { StompService } from 'ng2-stomp-service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit, OnDestroy {

  private messages: ChatMessage[] = [];
  private currentChatText: String = '';

  private subscribed: boolean;
  private subscription: any;

  constructor(private stompService: StompService) { }

  ngOnInit() {
    this.configureStomp();
    this.subscribe();
  }

  configureStomp(): void {
    this.stompService.configure({
      host: 'http://192.168.0.9:8080/chat',
      debug: true,
      queue: { 'init': false },
    });
  }

  send(): void {
    this.stompService.send('/app/send', this.currentChatText);
    this.currentChatText = '';
  }

  subscribe() {
    if (this.subscribed) {
      return;
    }

    this.stompService.startConnect().then(() => {
      this.stompService.done('init');
      console.log('connected with WS');
      this.subscription = this.stompService.subscribe('/topic/messages', this.on_next);
      this.subscribed = true;
    });
  }

  on_next = (res: any) => {
    this.messages.push(res);
    console.log(JSON.stringify(res));
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  unsubscribe() {
    if (!this.subscribed) {
      return;
    }

    // This will internally unsubscribe from Stomp Broker
    // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
    this.subscription.unsubscribe();
    this.subscription = null;
    this.subscribed = false;
    console.log('Unsubscribing to subscription');
  }
}
