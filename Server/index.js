import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;


import userRoutes from "./routes/users.routes.js"
app.use( "/users", userRoutes);


app.get( "/", (req, res)=>{
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});