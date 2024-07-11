const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'esercizi HTML/soluzioni liv.medio','soluz_es4_lm.html'));
});
const PORT = 3000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));