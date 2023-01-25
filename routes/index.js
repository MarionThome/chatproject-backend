var express = require('express');
var router = express.Router();
const Pusher = require('pusher');
const bodyParser = require('body-parser');
var Chat = require('../models/chats')

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', (req, res) =>{
  Chat.find({}).then((data) =>{
    if(data){
      res.json({result : true, messages : data})
    } else {
      res.json({result : false })
    }
  })
})

router.post('/message', (req, res) => {
    const payload = req.body;
    console.log(payload)
    pusher.trigger('chat', 'message', payload);
    const newChat = new Chat(payload)
    newChat.save()
    res.send(payload)
    
});


module.exports = router;
