var express = require('express');
var router = express.Router();
var ctrlsongs = require('../controller/songs');
var ctrlOthers = require('../controller/others');
/* Locations page */
router.get('/',ctrlsongs.homelist);
router.get('/song1',ctrlsongs.SongInfo1);
router.get('/song2',ctrlsongs.SongInfo2);
router.get('/song3',ctrlsongs.SongInfo3);
router.get('/song/review/new',ctrlsongs.addReview);

/*Others pages*/
router.get('/about',ctrlOthers.about);

module.exports = router;
