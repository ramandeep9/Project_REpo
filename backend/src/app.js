const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors'); 
require('dotenv').config();
const app = express();
const contactRoutes = require('./routes/contact');
const experienceRoutes = require('./routes/experience');
const authRouter=require('./routes/authRoutes');
const PORT = process.env.APP_PORT || 8080;


// For urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middlewares
app.use('/auth', authRouter);
// app.use('',authRouter);
// app.use('/',authRouter);
app.use(experienceRoutes);
app.use(contactRoutes);
// Apis
app.get('/api/status', (req=Request, res=Response) => {
  res.json({ message: 'API is working!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});