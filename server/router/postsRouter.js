const express = require( "express" );
const router = express.Router();
const postController = require( "../controller/Post" );

router.post( "/new-post", postController.createPost );
router.get( "/", postController.posts );
router.get( "/:id", postController.showPost );

module.exports = router;