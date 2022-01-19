import express from 'express'
const router = express.Router()
import controller from '../controllers/commentsControllers'

router.get('/', controller.getAll)
router.post('/comments', controller.createComments)
router.delete('/comments/:id', controller.deleteComments)

export default router;