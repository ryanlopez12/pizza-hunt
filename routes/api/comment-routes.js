const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

module.exports = router;

// api/comments/<pizza id>
router.route('/:pizzaId').post(addComment);

// api/comments/<pizza id>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);