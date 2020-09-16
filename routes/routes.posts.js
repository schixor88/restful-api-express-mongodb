const express = require('express'); //include expres
const { updateOne } = require('../model/Post');

const  router = express.Router(); //express router

const Post = require('../model/Post'); //import Post Model 


//GET ALL THE POSTS
//if you are bound to get something as promise
//using async is good as you wait for the result to occur
router.get('/', async (req,res)=>{
    
try {
    //use await where you do DB process like getting data from DB
    const post = await Post.find();
    res.json(post);

} catch (error) {
    res.json({message:error})
}

});

//GET SPECIFIC POST
//async and await
router.get("/:postId", async (req,res)=>{

    console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    
    } catch (error) {
        res.json({message:error})
    }
   

})

//POST METHOD TO STORE A DATA
//async and await
router.post('/', async (req,res)=>{

    console.log(req.body);
    const post = new Post({
        title:req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch (err){
        res.json({message:err});
    }
});


//DELETE SPECIFIC POST
//Post.remove is now deprecated so used Post.deleteOne
router.delete('/:postId', async (req,res) => {

    try {
        const removed = await Post.deleteOne({_id : req.params.postId});
        res.json(removed);
    } catch (error) {
        res.json({message:err});
    }
    
});


//UPDATE using PATCH
router.patch('/:postId', async (req, res) => {

    console.log("Patch for "+req.params.postId);

    try{
        const updatedPost = await Post.updateOne(
            {
                _id: req.params.postId //search this Id and
            }, 
            { 
                $set : { title:req.body.title } //set this title as update
            }
            );
            res.json(updatedPost);
    }catch(err){

    }
});


//export
module.exports = router