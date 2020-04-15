//DOM Queries
const chatList = document.querySelector('.chat-list');

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'John');

//get the chats and render them on the DOM
chatroom.getChats(data => chatUI.render(data));