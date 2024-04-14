# Socket.io
Socket.io

io.on('connenction',callback) - io.on is a method used to register event listener for different event occur in the server-side.The io object represent the main socket.io server instance

When we call io.on('connection',callback) we're telling socket.io to listen for a connection event. which occurss whenever a new client establishes a connection with the server. the callback functioon will be inovked whenever this event occurs, and it will receive a socket object representing the connection to the client.
similarly, we can use socket.io on the socket.io object to listen for event specific to that individual client connection.
