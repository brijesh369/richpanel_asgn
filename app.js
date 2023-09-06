document.getElementById("connectBtn").addEventListener("click", function() {
    // Redirect to Facebook Messenger
    window.location.href = "https://www.messenger.com/";
});

document.getElementById("sendBtn").addEventListener("click", function() {
    // Implement sending messages to Messenger here.
    // This is a placeholder for sending messages.
    const messageInput = document.getElementById("messageInput").value;
    if (messageInput) {
        const messageList = document.getElementById("messageList");
        const listItem = document.createElement("li");
        listItem.innerText = messageInput;
        messageList.appendChild(listItem);
        document.getElementById("messageInput").value = "";
    }
});
