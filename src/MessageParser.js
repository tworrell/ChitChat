class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const messageLowerCase = message.toLowerCase();
        
        if(messageLowerCase.includes("hello")) {
            this.actionProvider.greet()
        }

        if(messageLowerCase.includes("cyberpunk")) {
            this.actionProvider.handleCyberpunkList()
        }
        
        if(messageLowerCase.includes("halo")) {
            this.actionProvider.handleHaloList()
        }

        if(messageLowerCase.includes("deathloop")) {
            this.actionProvider.handleDeathloopList()
        }

        if(messageLowerCase.includes("spider")) {
            this.actionProvider.handleSpidermanList()
        }

        if(messageLowerCase.includes("ghostwire")) {
            this.actionProvider.handleGhostwireList()
        }
    }
}

export default MessageParser;