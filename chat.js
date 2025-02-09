document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userNameInput = document.getElementById('userNameInput');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendMessage');

    // Load messages from localStorage
    let messages = JSON.parse(localStorage.getItem('poznerChatMessages')) || [];
    renderMessages();

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const userName = userNameInput.value.trim();
        const message = messageInput.value.trim();

        if (!userName) {
            alert('Пожалуйста, введите ваше имя');
            return;
        }

        if (!message) {
            alert('Пожалуйста, введите сообщение');
            return;
        }

        const newMessage = {
            userName: userName,
            message: message,
            timestamp: new Date().toISOString(),
            id: Date.now()
        };

        messages.push(newMessage);
        localStorage.setItem('poznerChatMessages', JSON.stringify(messages));
        
        messageInput.value = '';
        renderMessages();
        scrollToBottom();
    }

    function renderMessages() {
        chatMessages.innerHTML = messages.map(msg => {
            const date = new Date(msg.timestamp);
            const formattedDate = date.toLocaleString('ru-RU');
            
            return `
                <div class="chat-message">
                    <div class="chat-message-header">
                        <strong>${escapeHtml(msg.userName)}</strong>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="chat-message-content">
                        ${escapeHtml(msg.message)}
                    </div>
                </div>
            `;
        }).join('');
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});