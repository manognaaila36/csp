const express = require('express');
const app = express();
const port = 1000;

app.use(express.json());

app.post('/api/home',(req,res) => {

    console.log(req.body);
    res.redirect('http://localhost:4200/home/')
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});