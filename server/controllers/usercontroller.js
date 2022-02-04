const db = require('server/model.js');
const userController = {}

// create a user - POST REQUEST 
/*
check the db to see if username exist;
    if exist send back {valid: false}
    if doesn't exist add to db abd send back {valid: true}
    */


//Verify user does not already exist and add new user/ 

userController.addNewUser  = (req, res, next) => {
    const newUser = [req.body.name, req.body.username, req.body.password];
    const checkUserQuery = `SELECT * FROM users WHERE username = $2`;

    db.query(checkUserQuery)
        .then(data => {
            if (data.rows[0]){
                res.locals.info = {
                    validSignUp: false
                }
                return next();
            } else {
                const signupQuery =
                'INSERT INTO users (name, username, password,)VALUES ($1, $2, $3)';
             db.query(signupQuery)  
             .then (data => {
                 res.locals.info = {
                     //test with frontend
                     name: $1,
                     validSignUp: true
                     //end of test
                 }
             }) 
             return next();
            }
        })
    
}

//verify login 
/*
what we get from FE:
{ username, password }
---
check the db to verify if username exist
check if input password match
    if does exist and password match return { valid: true }
    else return { valid: false }
*/
userController.verifyLogin  = (req, res, next) => {
    const userInfo = [req.body.username, req.body.password]
    const loginQuery = `SELECT * FROM users WHERE username = $1`;

    db.query(loginQuery)
    .then(data => {
        console.log(data.rows[0])
    if (data.rows[0].password === userInfo[1]) {
        res.locals.info = {
            name: data.rows[0].name,
            validLogin: true
        }
        return next()
    }
    res.locals.info = {
        validLogin: false
    }
    return next()
    })
}


module.exports = userController; 