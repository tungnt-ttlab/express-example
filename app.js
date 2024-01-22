const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserModel = require('./user/userModel'); 
const UserService = require('./user/userService');
const UserController = require('./user/userController');

const app = express();
const port = 3000;
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGO_DATABASE_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})

// Middleware
app.use(bodyParser.json());

// Middleware để xử lý yêu cầu POST
// app.use((req, res, next) => {
//   let data = '';
//   req.on('data', (chunk) => {
//     console.log('chunk: ',chunk);
//     console.log('chunk String : ',chunk.toString());
//     data += chunk.toString();
//   });

//   req.on('end', () => {
//     try {
//       req.body = JSON.parse(data);
//       next();
//     } catch (error) {
//       res.status(400).json({ error: 'Invalid JSON' });
//     }
//   });
// });

// Service
const userService = new UserService(UserModel);

// Controller
const userController =new UserController(userService);

// Router
const userRouter = require('./user/userRouter')(userController);

app.use('/api', userRouter);

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

