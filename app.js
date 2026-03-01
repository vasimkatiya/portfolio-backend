const express = require('express');
const reviewRouter = require('./routes/reviews.routes');
const cors = require('cors');
const main = require('./db/populate');
require('dotenv').config();

const port = process.env.PORT || 3000

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/reviews",reviewRouter)

main();
app.listen(port,()=>{
    console.log(`server is listening !`);
});
