class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats'); //store a reference to chats collection
    }
    //add new chat documents
    async addChat(message){
        //format a chat document
        const now = new Date();
        const chat = {
            message, 
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //save the chat document to the database
    const response = await this.chats.add(chat);
    return response; //although it won't be used anywhere
    }
}

const chatroom = new Chatroom('general', 'John');
chatroom.addChat('hey everyone!')
    .then(() => console.log("chat added"))
    .catch(err => console.log(err));