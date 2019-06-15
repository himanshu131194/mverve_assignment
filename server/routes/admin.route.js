import express from 'express';
import adminController from '../controllers/admin.controller'

const router = express.Router();

router.get('/sample-gene', adminController.addGenerations)

router.get('/genre', adminController.listGenres)

router.post('/genre', adminController.addGenre)

router.put('/genre', adminController.updateGenre)

router.delete('/genre', adminController.deleteGenre)


router.get('/movie', adminController.listMovies)

router.post('/movie', adminController.addNewMovie)

router.put('/movie', adminController.updateMovie)

router.delete('/movie', adminController.deleteMovies)
// router.get('/upload-users', adminController.uploadUsers)

// router.get('/list-users', adminController.listUsers)

export default router;