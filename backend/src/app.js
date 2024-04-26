const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const contactRoutes = require('./routes/contact');
// const experienceRoutes = require('./routes/experience');
const hostRoutes= require('./routes/hostProfileRoutes');
const SearchRoutes = require('./routes/searchHostRoutes');
const touristRoutes = require('./routes/touristRoutes')
const authRouter=require('./routes/authRoutes');
const PORT = process.env.APP_PORT || 8080;


// For urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());

// Middlewares
app.use(cors()); // Use the cors middlewares
app.use('/auth', authRouter);
// app.use('',authRouter);
// app.use('/',authRouter);
// app.use('/host',hostRoutes);
// app.use(experienceRoutes);
app.use(contactRoutes);
app.use('/tourist',touristRoutes);
app.use('/host', hostRoutes);
app.use('/api',SearchRoutes) // Add upload routes
// app.use('/location', hostRoutes);
// Apis
app.get('/api/status', (req=Request, res=Response) => {
  res.json({ message: 'API is working!' });
});

const server=app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.keepAliveTimeout=61*1000