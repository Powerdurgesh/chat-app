io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('register', (name) => {
    socket.username = name;
    console.log(`User registered as: ${name}`);
  });

  socket.on('chat message', (msg) => {
    const displayName = socket.username || 'Anonymous';
    io.emit('chat message', `${displayName}: ${msg}`);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
