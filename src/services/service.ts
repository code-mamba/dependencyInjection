export interface Logger {
    log(message:string):void
}
export interface Mailer{
    sendMessage(address:string, message:string):void
}

class ConsoleLogger implements Logger {
    log(message: string): void {
        console.log(message)
    }
}

class ConsoleMailer implements Mailer{
    constructor(
        readonly logger: Logger
    ){}
    sendMessage(address: string, message: string): void {
        this.logger.log(`sending ${message} to ${address}`)
    }
}

const logger = new ConsoleLogger()
const mailer = new ConsoleMailer(logger)

mailer.sendMessage("dhanushbaskaran2000@gmail.com", "Hi Dhanush")