const router = require("express").Router();
const verifyJWT = require("../middlewares/auth.middleware");
const commentControllers = require("../controllers/comment.controller");

router.use(verifyJWT);

router.post("/post/:postId", verifyJWT, commentControllers.createCommentOnPost);
router.get("/post/:postId", commentControllers.getCommentsOnPost);

router.get("/video/:videoId", commentControllers.getCommentsOnVideo);
router.post("/video/:videoId", verifyJWT, commentControllers.createCommentOnVideo);

router.delete("/:commentId", verifyJWT, commentControllers.deleteComment);

module.exports = router;
