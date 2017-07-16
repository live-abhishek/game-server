import { uuid } from '../util/uuid';

export class Message {
    id: String;
    sentAt: Date;
    sender: String;
    text: String;
    isRead: boolean;
    thread: Object;

    constructor(obj?: any) {
        this.id = obj && obj.id || uuid();
        this.sentAt = obj && obj.sentAt || null;
        this.sender = obj && obj.sender || null;
        this.text = obj && obj.text || null;
        this.isRead = obj && obj.isRead || false;
        this.thread = obj && obj.thread || null;
    }
}