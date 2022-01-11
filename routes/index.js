var express = require('express');
var router = express.Router();
var tutorialContoller=require('../src/controllers/tutorial.Controller');
var app = require('../src/app');



router.get('/api/tutorials',tutorialContoller.getAllTutorials);
router.post('/api/tutorials',tutorialContoller.createATutorial);
router.delete('/api/tutorials',tutorialContoller.deleteAll);

router.get('/api/tutorials:id',tutorialContoller.getTutorial);
router.put('/api/tutorials:id',tutorialContoller.updateTutorial);
router.delete('/api/tutorials:id',tutorialContoller.deleteTutorial);

router.get('/api/tutorials/published',tutorialContoller.findAllPublished);

module.exports = router;
