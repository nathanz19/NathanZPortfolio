const express = require('express');
const cors = require('cors');

// init the app
const app = express()

// middleware
app.use(cors()); // React make req to backend
app.use(express.json())

app.get('/api', (req, res) =>{
    res.json({message: "Hello World"});
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})