const mongoose=require('mongoose');
const Chat=require("./models/chat.js");

main().then((res)=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log("Some error occured");
})

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/whatsApp');
}

Chat.insertMany([{
   from:"Neha",
   to:"Priya",
   msg:"Send Me the Exam Sheet",
   createdAt:new Date()
},
{
   from:"shelly",
   to:"rushi",
   msg:"Send Me the laptop",
   createdAt:new Date()
},
{
   from:"anish",
   to:"awadh",
   msg:"pitwaoge app",
   createdAt:new Date()
},
{
   from:"shakuntala",
   to:"awadh",
   msg:"pitwaoge app bacche ko",
   createdAt:new Date()
}
]);

