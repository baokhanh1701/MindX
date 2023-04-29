var express = require('express');
var router = express.Router();
const { registerUser, authLogin, getUserProfile, getAllUsers } = require('../controllers/userController');
const {protect, isAdmin} = require('../middlewares/authMiddleware');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', registerUser);

router.post('/login', authLogin);

router.get('/profile', protect, getUserProfile);

router.get('/', isAdmin, getAllUsers);

module.exports = router;
