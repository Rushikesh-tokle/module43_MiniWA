const express=require('express');
const app=express();
const port=8080;
const mongoose=require('mongoose');
const path=require("path");
const Chat=require("./models/chat.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
// app.use(express.json());

main().then((res)=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log("Some error occured");
})

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/whatsApp');
}


//Index Route
app.get("/chats",async(req,res)=>{
  let chats=await Chat.find();
  console.log(chats);
  res.render("index.ejs",{chats});
})



//New and Create Chat
app.get("/chats/new",(req,res)=>{
    res.render("newchat.ejs");
})

app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let chat2=new Chat({
       from:from,
       msg:msg,
       to:to,
       createdAt:new Date()
    })
    console.log(chat2);
    res.send("working");

  chat2.save().then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log("some err occured");
  })
})


app.get("/",(req,res)=>{
   res.send("App Working");
});

app.listen(port,()=>{
    console.log(`The app is listening to port no ${port}`);
}); 