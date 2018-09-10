let ws = new WebSocket('ws://'+window.location.hostname+':3000/');

const socketStatus = document.querySelector('#socketstatus');

ws.addEventListener('open', () => {
    alert('websocket connection opened');
    socketStatus.innerHTML = 'socket opened';
})

ws.addEventListener('close', () => {
    alert('websocket connection closed');
    socketStatus.innerHTML = 'socket closed';
})

ws.addEventListener('error', () => {
    alert('websocket connection error');
    socketStatus.innerHTML = 'socket error';
})