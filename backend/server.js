const dotenv=require("dotenv");
const connectDatabase=require("./config/database");
const cloudinary = require("cloudinary");

// Handling Uncaught error Exception
process.on("uncaughtException",err=>{
    console.log(`Error: `,err.message);
    console.log("Shutting down server due to uncaught exception")
    process.exit(1);
    
})

//Config
dotenv.config({path:"./backend/config/config.env"});

//Database Connection call
connectDatabase();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
const app=require("./app");

const server= app.listen(process.env.PORT,()=>{
    console.log('Server working on http://localhost:'+process.env.PORT);
}
);

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: `,err.message);
    console.log("Shutting down server due to Unhandled Promise rejection")
    server.close(()=>{
        process.exit(1);
    })
})