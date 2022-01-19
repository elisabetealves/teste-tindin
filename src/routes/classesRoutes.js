import express from 'express'
const router = express.Router()
import controller from '../controllers/classesControllers'

router.get('/all', controller.getAll)
router.get('/:id', controller.getById)

router.post('/', controller.createClass)

router.put('/:id', controller.updateClass)

router.delete('/:id', controller.deleteClass)

router.post('/:id/like', controller.like)
router.post('/:id/dislike', controller.dislike)

export default router;