//DOM Queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//add a new chat 
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

//update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();

    //show then hide the update name message
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
});

//update the chat room
rooms.addEventListener('click', e => {
    if(e.target.parentElement.tagName === 'DIV'){
        chatUI.clear();
        chatroom.updateRoom(e.target.parentElement.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

//check localStorage for a name
const username = localStorage.username ? localStorage.username : 'anonymous';

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('python', username);

//get the chats and render them on the DOM
chatroom.getChats(data => chatUI.render(data));