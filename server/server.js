let app = require("./app");

const port = 3000;
app.listen(port,()=>{
    console.log("Listening to request on port :" + port)
});