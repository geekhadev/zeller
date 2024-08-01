import { Message } from '../messages/Message'
import { Debt } from '../debts/Debt'

export class Client {
  constructor ({ id, name, rut, messages, debts }) {
    this.id = id
    this.name = name
    this.rut = rut

    if (typeof messages !== 'undefined') {
      if (!messages || messages.length === 0) {
        messages = []
      } else {
        this.messages = messages.map(message => new Message(message))
      }
    }

    if (typeof debts !== 'undefined') {
      if (!debts || debts.length === 0) {
        debts = []
      } else {
        this.debts = debts.map(debt => new Debt(debt))
      }
    }
  }
}
