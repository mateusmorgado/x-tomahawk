import express from 'express';
import router from './auth.routes';

const router = express.Router();

router.post('/create', protectedRoute, createPost);
router.post('/like/:id', protectedRoute, likeUnlikePost);
router.post('/comment/:id', protectedRoute,commentOnPost);
router.delete('/', protectedRoute, deletePost);

export default router;