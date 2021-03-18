const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("hello")
});

router.post('/signup', (req,res) => {
    const {username, email, password} = req.body;
    if(!email || !password || !username){
        res.json({error: "please fill all fields"});
    }
    res.json({message:"Sign up Successful!"});
});

module.exports = router;