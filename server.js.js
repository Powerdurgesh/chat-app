const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files (index.html) from "public" folder
app.use(express.static('public'));

io.on('connection', socket => {
    console.log('A user connected');

    socket.on('chat message', msg => {
        io.emit('chat message', msg); // Send to all clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
