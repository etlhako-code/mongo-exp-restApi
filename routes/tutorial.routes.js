var express = require('express');
var router = express.Router();
var tutorialContoller=require('../src/controllers/tutorial.Controller');



router.get('/published',tutorialContoller.findAllPublished);
router.get('/',tutorialContoller.getAllTutorials);
router.post('/',tutorialContoller.createATutorial);
router.delete('/',tutorialContoller.deleteAll);

router.get('/:id',tutorialContoller.getTutorial);
router.put('/:id',tutorialContoller.updateTutorial);
router.delete('/:id',tutorialContoller.deleteTutorial);



module.exports = router;