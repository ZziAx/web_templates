import express from "express";


const router = express.Router();

router.post("/send", (req:any,res:any)=>{
    console.log(console.log(req.body.message));
});

export default router;