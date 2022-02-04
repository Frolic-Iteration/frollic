const express = require('express');
const controller = require('./controllers/controller.js');
const userController = require('./controllers/usercontroller.js');
const app = express();
const router = express.Router();


// user signup 
app.post('/signup', userController.addNewUser, (req, res) => {
  return res.status(200).json(res.locals);
});

// user login 
app.post('/login', userController.verifyLogin, (req, res) => {
  return res.status(200).json(res.locals);
});


//code here  
router.post('/search', controller.getResults, (req, res) => {
  console.log('in the router');
  res.status(200).json(res.locals);
});

module.exports = router;

