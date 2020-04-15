//DOM Queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

//add a new chat 
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
    ;
})

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('python', 'John');

//get the chats and render them on the DOM
chatroom.getChats(data => chatUI.render(data));