const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'esercizi HTML/soluzioni liv.avanzato')))
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'esercizi HTML/soluzioni liv.avanzato','soluz_es4_la.html'));
});
const PORT = 3000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));