Vue.config.devtools = true;

new Vue (
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Michele',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            selectedContactIndex: 0,
            displayContent: "d-none",
            hideContent: "",
            heightClass: "without-text",
            newText: "",
            searchUser: "",
            alert: "d-none",
        },
        mounted() {
            this.scrollToEnd();
            this.searchFilter();
        },
        updated() {
            this.scrollToEnd();
        },
        methods: {
            getDatetime: function() {
                return dayjs().format('DD/MM/YYYY HH:mm:ss')
            },
            selectAvatar: function(index) {
                return `img/avatar${this.contacts[index].avatar}.jpg`;
            },
            selectAlt: function(index) {
                return `Avatar ${this.contacts[index].name}`;
            },
            messagePosition: function(message) {
                if (message.status === "sent") {
                    return "mine-position";
                } else {
                    return "yours-position";
                }
            },
            messageColor: function(message) {
                if (message.status === "sent") {
                    return "mine-color";
                } else {
                    return "yours-color";
                }
            },
            // messageSpacing: function(chat, message, index) {
                // if (this.contacts[chat].messages[index - 1] >= 0) {
                //     if (this.contacts[chat].messages[index].status === this.contacts[chat].messages[index - 1].status) {
                //         return "smaller-spacing";
                //     } else {
                //         return "bigger-spacing";
                //     }
                // }
                // if (message.status !== this.contacts[chat].messages[index - 1].status) {
                //     return "bigger-spacing";
                // }
                //     if (message.status === "sent") {
                //         return "smaller-spacing";
                //     } else {
                //         return "bigger-spacing";
                //     }
                // }
            // },
            contactSelection: function(index) {
                this.selectedContactIndex = index;
                this.displayContent = "";
                this.hideContent = "d-none";
                this.heightClass = "with-text";
            },
            sendMessage: function() {
                this.contacts[this.selectedContactIndex].messages.push(
                    {
                        date: this.getDatetime(),
                        text: this.newText,
                        status: 'sent'
                    }
                );
                setTimeout( () => 
                    this.contacts[this.selectedContactIndex].messages.push(
                        {
                            date: this.getDatetime(),
                            text: 'ok',
                            status: 'received'
                        }
                    ),
                5000);

                this.newText = "";
                
                let textInputElement = document.querySelector('#text-input');
                textInputElement.focus();
            },
            lastReceivedMessageIndex: function() {
                for (let i = this.contacts[this.selectedContactIndex].messages.length - 1; i >= 0; i--) {
                    if (this.contacts[this.selectedContactIndex].messages[i].status === "received") {
                        return i;
                    } 
                }
            },
            searchFilter: function () {
                if (this.searchUser.length > 0) {
                    let filteredContacts = this.contacts.filter(contact => contact.name.includes(this.searchUser));
                    if (filteredContacts.length == 0) {
                        this.alert = "";
                    }
                    return filteredContacts;
                } else {
                    return this.contacts;
                }
            },
            scrollToEnd() {
                let content = this.$refs.container;
                content.scrollTop = content.scrollHeight;
            },
        },
    }
);