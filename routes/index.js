var express = require('express');
const { User } = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', (req, res, next) => {
  res.render('register', { title: 'register' });
});

router.post('/checkLogin', async (req, res, next) => {
  const { uId, pw } = req.body
  if(!uId || !pw) return res.send('<script>alert("로그인에 실패하였습니다.");location.href="/"</script>');

  try {
    const user = await User.findOne({ where: { uId, pw } }); // select * from User where uId = uId , pw = pw
    if(!user) return res.send('<script>alert("회원 정보가 없습니다.");location.href="/"</script>');
    console.log(user.dataValues)
    
    return res.send(`<script>alert("${uId}님 로그인에 성공하였습니다.");location.href="/"</script>`);
  } catch(err) {
    console.error(err)
    return res.send('<script>alert("error");location.href="/"</script>');
  }
});

router.post('/checkRegister', async (req, res, next) => {
  const { uId, pw } = req.body

  if(!uId || !pw) return res.send('<script>alert("로그인에 실패하였습니다.");location.href="/"</script>');

  try {
    const user = await User.create({ uId, pw }); // insert into User value ~~~
    if(!user) return res.send('<script>alert("회원 정보가 없습니다.");location.href="/"</script>');
    console.log(user.dataValues)
    
    return res.send(`<script>alert("${uId}님 회원가입 성공하였습니다.");location.href="/"</script>`);
  } catch(err) {
    console.error(err)
    return res.send('<script>alert("error");location.href="/"</script>');
  }
});

module.exports = router;