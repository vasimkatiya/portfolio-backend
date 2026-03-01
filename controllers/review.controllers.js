const pool = require("../db/connection");

exports.createReviewController = async (req,res)=>{
    const {name,rating,caption} = req.body;
    
    if(!name || name.trim() === ""){
        return res.status(400).json({
            message:'name is required'
        })
    }
    if(!caption || caption.trim() === ""){
        return res.status(400).json({
            message:'caption is required'
        })
    }

    const {rows} = await pool.query("INSERT INTO reviews (name,rating,caption) VALUES($1,$2,$3) RETURNING *;",[name,rating,caption]);

    res.status(201).json({
        message:'review added successfully !',
        review:rows
    })

}

exports.showReviewController = async (req,res)=>{
    const allReviews = await pool.query('select * from reviews;');
    if(!allReviews.rows.length === 0){
        return res.status(404).json({
            message:'reviews not fetched !'
        });
    };

    res.status(200).json({
        message:"reviews fetched successfully !",
        reviews:allReviews.rows,
    })
}