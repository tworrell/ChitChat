import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import LearnOptions from './components/LearnOptions/LearnOptions';
import LinkList from './components/LinkList/LinkList';

const config = {
    botName: "ChitChatGameBot",
    initialMessages: [createChatBotMessage("Hi, there! Which highly anticipated Video Games would you like to check out?", {
        widget: "learnOptions",
    })],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#ff7961",
            fontFamily: "Montserrat, sans-serif",
        },
        chatButton: {
            backgroundColor: "#ba000d",
        },
    },
    widgets: [
        {
            widgetName: "learnOptions",
            widgetFunc: (props) => <LearnOptions {...props} />,
        },
        {
            widgetName: "cyberpunkLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "CD Projekt Red",
                        url: "https://www.cyberpunk.net/us/en/",
                        id: 1,
                    },
                    {
                        text: "Night City Wire EP 1",
                        url: "https://www.youtube.com/watch?v=ToWfeUEAeeQ",
                        id: 2,
                    },
                    {
                        text: "Cyberpunk Fandom",
                        url: "https://cyberpunk.fandom.com/wiki/Cyberpunk_2077",
                        id: 3,
                    },
                ]
            }
        },
        {
            widgetName: "haloLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Xbox",
                        url: "https://www.xbox.com/en-US/games/halo-infinite",
                        id: 1,
                    },
                    {
                        text: "Discover Hope",
                        url: "https://www.youtube.com/watch?v=ZtgzKBrU1GY",
                        id: 2,
                    },
                    {
                        text: "Halopedia",
                        url: "https://www.halopedia.org/Halo_Infinite",
                        id: 3,
                    },
                ]
            }
        },
        {
            widgetName: "deathloopLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Bethesda",
                        url: "https://bethesda.net/game/deathloop",
                        id: 1,
                    },
                    {
                        text: "Can you make it?",
                        url: "https://www.youtube.com/watch?v=MXv5IDp8y74",
                        id: 2,
                    },
                    {
                        text: "Deathloop Fandom",
                        url: "https://deathloop.fandom.com/wiki/Deathloop_Wiki",
                        id: 3,
                    },
                ]
            }
        },
        {
            widgetName: "spiderManLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "PlayStation",
                        url: "https://www.youtube.com/watch?v=gHzuHo80U2M",
                        id: 1,
                    },
                    {
                        text: "Who is Miles?",
                        url: "https://www.youtube.com/watch?v=gHzuHo80U2M",
                        id: 2,
                    },
                    {
                        text: "Spider-Man: Miles Morales Fandom",
                        url: "https://marvels-spider-man.fandom.com/wiki/Miles_Morales",
                        id: 3,
                    },
                ]
            }
        },
        {
            widgetName: "ghostwireLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Bethesda",
                        url: "https://bethesda.net/en/game/ghostwire-tokyo",
                        id: 1,
                    },
                    {
                        text: "What's going on?",
                        url: "https://www.youtube.com/watch?v=9qrXLQqHkJk",
                        id: 2,
                    },
                    {
                        text: "GhostWire: Tokyo Fandom",
                        url: "https://ghostwiretokyo.fandom.com/wiki/GhostWire:_Tokyo",
                        id: 3,
                    },
                ]
            }
        },
    ],
}

export default config;