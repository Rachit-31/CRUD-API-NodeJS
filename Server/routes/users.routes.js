import express from "express";

const router = express.Router();

// creating a mock database
const users= [
    {
        firstName: "Rachit",
        lastName: "Jain",
        age: "21"
    }
]

router.get('/', (req, res) =>{
    console.log(users);
    res.send(users);
})

router.post('/', (req, res)=>{
    
})

export default router;