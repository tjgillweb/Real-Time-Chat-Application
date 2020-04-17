class ChatUI{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = '';
    }
    //render chat templates to the DOM
    render(data){
        const html=`
            <li class="list-group-item">
                <img src="images/man.svg">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${String(data.created_at.toDate()).substr(16,5)} </div>
            </li>
        `;
        this.list.innerHTML += html;
    }
}