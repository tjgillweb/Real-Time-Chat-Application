class Chatroom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats'); //store a reference to chats collection
        this.unsub;
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

    //setup a real time listener to get new chats
    getChats(callback){
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    //update the UI
                    callback(change.doc.data());
                }
            });
        });
    }
    //update username
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }

    //update the chatroom
    updateRoom(room){
        this.room = room;
        if(this.unsub){
            this.unsub();
        }
        
    }
}


