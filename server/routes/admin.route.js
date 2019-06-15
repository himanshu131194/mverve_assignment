import express from 'express';
import adminController from '../controllers/admin.controller'

const router = express.Router();

router.get('/sample-gene', adminController.addGenerations)

router.get('/genres', adminController.listGenres)

router.post('/genres', adminController.addGenre)

router.put('/genres', adminController.updateGenre)

router.delete('/genres', adminController.deleteGenre)


router.get('/movies', adminController.listMovies)

router.post('/movies', adminController.addNewMovie)

router.put('/movies', adminController.updateMovie)

router.delete('/movies', adminController.deleteMovies)
// router.get('/upload-users', adminController.uploadUsers)

// router.get('/list-users', adminController.listUsers)

export default router;