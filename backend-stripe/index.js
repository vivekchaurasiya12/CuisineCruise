import express from "express"
import cors from "cors"
import  {connectDB} from './config/db.js'
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import paymentRouter from "./routes/payment.js"

const app = express();

//app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

// db connection
connectDB();

// api endpoints
app.use("/api/user",userRouter);
app.use('/api/payment', paymentRouter);


//http method
app.get("/",(req,res)=>{
    res.send("API Working")
})

//run express server
app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})









