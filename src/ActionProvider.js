class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, There!")
        this.updateChatBotState(greetingMessage)
    }

    updateChatBotState(message) {
        //state here manipulates the constructor's(top level) state so it is important that we try to preserve the previous state.
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;