export class Message {
  constructor ({ id, text, role, sentat }) {
    this.text = text
    this.sentAt = sentat
    this.role = role
  }
}
