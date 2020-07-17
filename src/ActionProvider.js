class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage
        this.setState = setStateFunc
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, There!")
        this.updateChatBotState(greetingMessage)
    }

    handleCyberpunkList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got these amazing resources you can checkout. I am so ready for this game!",
            {
                widget: "cyberpunkLinks",
            }
        )
        this.updateChatBotState(message)
    }

    handleHaloList = () => {
        const message = this.createChatBotMessage(
            "A classic! Great choice. This game is going to be huge! Check out these resources.",
            {
                widget: "haloLinks",
            }
        )
        this.updateChatBotState(message)
    }

    handleDeathloopList = () => {
        const message = this.createChatBotMessage(
            "I see you like to think outside the box. These resources will show you the way. This game will definitely throw you for a loop!",
            {
                widget: "deathloopLinks",
            }
        )
        this.updateChatBotState(message) 
    }

    handleSpidermanList = () => {
        const message = this.createChatBotMessage(
            "Ohhhh Excellent choice! Don't tell anyone but I was one of the NPCs in the first insomniac game. Loved it! Ohh right..resources. Here you go.",
            {
                widget: "spiderManLinks",
            }
        )
        this.updateChatBotState(message)
    }

    handleGhostwireList = () => {
        const message = this.createChatBotMessage(
            "Very mysterious! You can check out the resources...but be careful or she might get you 😨",
            {
                widget: "ghostwireLinks",
            }
        )
        this.updateChatBotState(message)
    }

    updateChatBotState(message) {
        //state here manipulates the constructor's(top level) state so it is important that we try to preserve the previous state.
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;