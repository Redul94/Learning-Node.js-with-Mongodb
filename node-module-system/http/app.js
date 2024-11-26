const http = require("http");
const { json } = require("stream/consumers");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hwllo backend");
    res.end();
  }
  if (req.url === "/api/course") {
    //now we print just a array later we learn how to fetch from database using express framework
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});

// //create new connection(old method)
// server.on('connection',(socket)=>{
//     console.log('New connetion');
// })

server.listen(3000);
console.log("Listening on port 3000...");
