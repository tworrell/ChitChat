class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const messageLowerCase = message.toLowerCase();
        
        if(messageLowerCase.includes("hello")) {
            this.actionProvider.greet()
        }
    }
}

export default MessageParser;