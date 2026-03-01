const express = require('express');
const reviewRouter = require('./routes/reviews.routes');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/reviews",reviewRouter)


app.listen(3000,()=>{
    console.log(`server is listening !`);
});
