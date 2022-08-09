const pg = require('pg');
//const pool = new pg.Pool();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const {secret} = require('./config')

const client = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    database: 'usersdb',
    password: 'zxcvbnm1'
});

const generateAccessToken = (userid) => {
    const payload = {
        id: userid
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'});
}

class authController{
    async registration(req, res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message: `errors in registration`, errors});
            }
            const {email, password} = req.body;

            client.connect(err => {
                if (err) throw err;
                else {
                    
                    client.query(`SELECT * FROM clients`)
                        .then((result) => {
                        const rows = result.rows;
                        
                        let isAuthorized = false;

                        rows.map(row => {
                            if(row.email == email){
                                isAuthorized = true;
                            }
                        })

                        if(!isAuthorized) insertUser();
                        else return res.status(400).json({message: 'User was registered'});                        
                    })

                    function insertUser(){

                        const hashPassword = bcrypt.hashSync(password, 4);

                        client.query(`INSERT INTO clients (email, password) 
                        VALUES ('${email}', '${hashPassword}' );`)
                        .then(() => {
                            return res.json({message: `User ${email} was success registered`, status: true});
                        })
                    }
                }
            });     

        }catch(e){
            console.log(e);
            res.status(400).json({message: "Erorr"});
        }
    }
    
    async login(req, res){
        try{
            const {email, password} = req.body;
            client.connect(err => {
                if (err) throw err;
                else {
                    
                    client.query(`SELECT * FROM clients`)
                        .then((result) => {
                        const rows = result.rows;
                        
                        let isExistUsername = false;
                        let userId;
                        
                        let userPassword;
                        rows.map(row => {
                            if(row.email == email){
                                isExistUsername = true;
                                userPassword = row.password;
                                userId = row.id;
                            }
                        })

                        if(!isExistUsername) return res.status(400).json({message: 'User not found'}); 
                        else sendToken(userPassword, userId);
                    })
                }
            });

            function sendToken(userPassword, userId){
                const validPassword = bcrypt.compareSync(password, userPassword);
                if(!validPassword){
                    return res.status(400).json({message: `Input uncorrect password`});
                }

                const token = generateAccessToken(userId);
                return res.json({token, status: true});
            }

        }catch(e){
            console.log(e);
            res.status(400).json({message: "Erorr"});
        }
    }

    async getUsers(req, res){
        try{
            client.connect(err => {
                if (err) throw err;
                else {
                    client.query(`SELECT * FROM clients`)
                        .then((result) => {
                        const rows = result.rows;
                            
                        res.json(rows);
                        })
                    }
                })
            
        }catch(e){
            console.log(e);
            res.status(400).json({message: "Erorr"});
        }
    }
}

module.exports = new authController();