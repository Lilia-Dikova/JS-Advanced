const notificationElement = document.querySelector('.notification');
const messageElement = document.querySelector('.msg');
const timeout = 3000;

export function notify(message) {
    if (notificationElement) {
        messageElement.textContent = message;
        notificationElement.style.display = 'block';
        notificationElement.className = 'notification';
        setTimeout(hideNotification, timeout);
    } else {
        alert(message);
    }
}

export function hideNotification() {
    notificationElement.style.display = '';
}