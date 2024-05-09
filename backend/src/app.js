const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const path =require('path')
const contactRoutes = require('./routes/contact');
// const experienceRoutes = require('./routes/experience');
const hostRoutes= require('./routes/hostProfileRoutes');
const SearchRoutes = require('./routes/searchHostRoutes');
const touristRoutes = require('./routes/touristRoutes');
// const reviewTourist=require('./routes/reviewTourist');
const authRouter=require('./routes/authRoutes');
const scheduleRoutes=require('./routes/scheduleRoute');
const PORT = process.env.APP_PORT || 8080;


// For urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// CORS configuration for specific routes
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only requests from this origin
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
};
app.use('/auth', cors(corsOptions), authRouter);
app.use('/host', cors(corsOptions), hostRoutes);
app.use('/api', cors(corsOptions), SearchRoutes);
app.use('/tourist',cors(corsOptions),touristRoutes);
// Allow all origins for other routes

app.use(contactRoutes);
app.use('/tourist',touristRoutes);
app.use('/host', hostRoutes);
// app.use('/review',reviewTourist)
app.use('/book',scheduleRoutes);
app.get('/api/status', (req=Request, res=Response) => {
  res.json({ message: 'API is working!' });
});

const server=app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.keepAliveTimeout=61*1000