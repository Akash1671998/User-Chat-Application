const {Server} = require("socket.io")



const io = new Server(9000,{
    cors:{
        origin:'http://localhost:3001'
    }
});

let users = [];
const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

io.on('connection',(socket)=>{
    console.log("user Connected Successfully");
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })
})