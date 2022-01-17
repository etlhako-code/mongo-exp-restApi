var express = require('express');
var router = express.Router();
var tutorialContoller=require('../src/controllers/tutorial.Controller');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(403).json({message:"not allowed access"});
}

router.get('/published',tutorialContoller.findAllPublished);
router.get('/',tutorialContoller.getAllTutorials);
router.post('/',isLoggedIn,tutorialContoller.createATutorial);
router.delete('/',isLoggedIn,tutorialContoller.deleteAll);

router.get('/:id',tutorialContoller.getTutorial);
router.put('/:id',isLoggedIn,tutorialContoller.updateTutorial);
router.delete('/:id',isLoggedIn,tutorialContoller.deleteTutorial);



module.exports = router;