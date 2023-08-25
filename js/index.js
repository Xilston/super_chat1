var vashNick = document.getElementById("userNick");
var vasheMessage = document.getElementById("messageInput");
var send = document.getElementById("sendMessage");
var allMessages = document.getElementById("allMessages");

function zapisat () {
    const newMsg = document.createElement("div");
    newMsg.className ="message";
        const userInfo = document.createElement("div");
        userInfo.className ="userInfo";

            const userNickname = document.createElement("div");
            userNickname.className ="userNickname";
            const nickValue = document.createTextNode(vashNick.value);
            userNickname.appendChild(nickValue);
            userInfo.appendChild(userNickname);

            const messageTime = document.createElement("div");
            messageTime.className ="messageTime";
                var currentTime = new Date();
                var textTime = currentTime.getHours()+':'+currentTime.getMinutes()+':'+currentTime.getSeconds();
            const timeValue = document.createTextNode(textTime);
            messageTime.appendChild(timeValue);
            userInfo.appendChild(messageTime);
    newMsg.appendChild(userInfo);

        const messageText = document.createElement("div");
        messageText.className ="messageText";
            const textarea = document.createElement("textarea");
            const msgValue = vasheMessage.value;
            textarea.value = msgValue;

            messageText.appendChild(textarea);
         newMsg.appendChild(messageText);
    allMessages.appendChild(newMsg);
    console.log(allMessages);
}
send.addEventListener("click", zapisat);