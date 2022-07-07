const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const generateUniqueId = require('generate-unique-id');

const User = require('../models/Users');
const Article = require('../models/ArticlePost');
const { off } = require('../models/ArticlePost');

router.post('/auth', async (req, res) => {
    const token = req.body.token;
    try {
        const decoded = jwt.verify(token, "mba_and_beyond");
        const user = User.findOne({ _id: decoded.id });
        return res.json({
            "message" : "Authenticated user"
        });
    } catch(err) {
        console.log(err);
        return res.json({
            "message" : "Not authenticated user"
        });
    }
})

router.post('/signup', async (req, res) => {
    let {user_email, user_password, user_name} = req.body;

    const result = await User.findOne({user_email});

    if(result) {
        return res.json({"message": "User already exists!"});
    }
    else{
        var hash = bcrypt.hashSync(user_password, 8);
        user_password = hash;
        const user = new User({
            user_name, user_email, user_password
        })
        user.save(function(err, document) {
            if(err) {
                console.log(err);
                return res.json({"message": "try again"})
            }
            else {
                return res.json({"message": "user registered successfully"})
            }
        });
    }
})


router.post('/login', async (req, res)=> {
    const obj = req.body;
    const result = await User.findOne({user_email: obj.user_email});
    if(result){
        bcrypt.compare(req.body.user_password, result.user_password, function(err, hashed){
            if(hashed == true){
                const token = jwt.sign({ id: result._id}, "mba_and_beyond");
                return res.json({ "message": "login success", "token" : token });
            }
            else{
                return res.json({"message": "Login failed"});
            }
        })
    } 
    else{
        return res.json({ "message": "login failed!"})
    }
})

router.post('/userdetails', async(req, res) =>{
    const id = req.body.id;
    let user = {};

    user = await User.findOne({_id: id});
    if(user){
        return res.json({ "message": user})
    }
    else{
        return res.json({"message": user})
    }
})

router.post('/getarticlesposted', async (req, res) => {
    const objID = req.body.id;

    let articlesposted = await Article.find({ article_id: objID});
    if(articlesposted.length > 0) {
        let obj = articlesposted;

        return res.json({"message": obj});
    }
})

router.post('/allarticlesposts', async(req, res) => {
    let articlepost = await Article.find();

    if(articlepost.length > 0){
        let obj = articlepost;
        return res.json({ "message": obj})
    }
    else{
    return res.json({ "message": "No articles posted"})
    }
})

router.post('/articlepost', async (req, res) => {
    let {
        article_title, article_description, article_image, article_thumbnail
    } = req.body;
    let article_id = generateUniqueId();


    const articlepost = new Article({
        article_title, article_description, article_image, article_thumbnail, article_id
    })
    articlepost.save(function (err, document){
        if(err){
            console.log(err);
            return res.json({"message": "try again"});
        }
        else{
            return res.json({"message": "job posted successfully", "id" : article_id});
        }
    })
})

router.put('/articlepost', async(req, res)=>{
    let { _id, article_title, article_description, article_image, article_thumbnail, article_id} = req.body;
    
    const articlepost = await Article.findOne({ _id });

    articlepost.article_id = article_id;
    articlepost.article_title = article_title;
    articlepost.article_description = article_description;
    articlepost.article_image = article_image;
    articlepost.article_thumbnail = article_thumbnail;

    articlepost.save(function(err, document){
        if(err) {
            console.log(err);
            return res.json({"message": "try again"})
        }
        else{
            return res.json({"message": "Job updated successfully"})
        }
    })

})

router.delete('/articlepost', async(req, res) => {
    const { _id } = req.body;

    Article.deleteOne({ _id }, function(err){
        if(err) {
            return res.json({"message": "some error try again"})
        }
        else{
            return res.json({"message": "Deleted"})
        }
    })
})

module.exports = router;



