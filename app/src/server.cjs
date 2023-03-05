const http = require("http");
const socketio = require("socket.io");

const httpServer = http.createServer();
const io = new socketio.Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }});


io.on("connection", (socket) => {
  console.log(socket.id);
  socket.emit("hello", "world");
  socket.emit("createDOM",  "id1", `
  <p id="main">
    <span class="prettify">
      keep me and make me pretty!
    </span>
  </p>
`);
});

httpServer.listen(3900);