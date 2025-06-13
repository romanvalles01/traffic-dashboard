const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

// Cuando alguien se conecta al frontend
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  // Ejecuta tcpdump
  const tcpdump = spawn("sudo", ["tcpdump", "-i", "en0", "-l", "-nn"]);

  tcpdump.stdout.on("data", (data) => {
    const lines = data.toString().split("\n").filter(Boolean);
    lines.forEach((line) => {
      socket.emit("packet", line);
    });
  });

  tcpdump.stderr.on("data", (err) => {
    console.error(`tcpdump error: ${err}`);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
    tcpdump.kill();
  });
});

server.listen(3000, () => {
  console.log("🌐 Dashboard en http://localhost:3000");
});
