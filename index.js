const server = require("./api/server");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server listening on port ${port} ***\n`);
});

// web socket code
// const webSocketPort = 8000;
// const webSocketServer = require("websocket").server;
// const http = require("http");

// const server2 = http.createServer();
// server.listen(webSocketPort, () => {
//   console.log(`\n*** Server listening on port ${webSocketPort} ***\n`);
// });

// const wsServer = new webSocketServer({
//   httpServer: server2,
// });

// const clients = {};

// // This code generates unique userid for everyuser.
// const getUniqueID = () => {
//   const s4 = () =>
//     Math.floor((1 + Math.random()) * 0x10000)
//       .toString(16)
//       .substring(1);
//   return s4() + s4() + "-" + s4();
// };

// wsServer.on("request", function (request) {
//   let userId = getUniqueID();
//   console.log(
//     new Date() +
//       " Received a new connection from origin " +
//       request.origin +
//       "."
//   );

//   const connection = request.accept(null, request.origin);
//   clients[userId] = connection;
//   console.log(
//     "connected: " + userId + " in " + Object.getOwnPropertyNames(clients)
//   );

//   connection.on("message", function (message) {
//     if (message.type === "utf8") {
//       console.log("Received message: ", message.utf8Data);

//       // broadcasting message to all connected clients
//       for (key in clients) {
//         clients[key].sendUTF(message.utf8Data);
//         console.log("sent message to: ", clients[key]);
//       }
//     }
//   });
// });
