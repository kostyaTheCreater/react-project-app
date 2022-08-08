const express = require('express');
const app = express();
const authRouter = require('./authRouter')

const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Server starting on port ${PORT}`) );
