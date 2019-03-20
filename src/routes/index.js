const router = require('koa-router')();
const baseApi = require('../config').baseApi;
const verify = require('../middlewares/verify');
const robot = require('../controllers/robot');
const register = require('../controllers/register');
const login = require('../controllers/login');
const message = require('../controllers/message');
const privateChat = require('../controllers/privateChat.js');
const userInfo = require('../controllers/userInfo.js');
const newFriends = require('../controllers/newFriends.js');
const groupInfo = require('../controllers/groupInfo.js');

router.prefix(`/${baseApi}`)

router.post('/register', register.unActivate) //注册-未激活
router.get('/robot',verify, robot) //机器人交流
router.get('/activate', register.activate) //注册-激活
router.post('/login', login) //登陆
router.get('/message', verify, message) // 获取首页列表信息
router.get('/private_detail', verify, privateChat.getprivateDetail) // 获取私聊相关内容
router.post('/private_save_msg', verify, privateChat.savePrivateMsg) //保存私聊信息
router.get('/find_people', verify, userInfo.findUIByName) //通过用户名搜索加人，此接口返回用户信息
router.get('/user_info', verify, userInfo.getUserInfo) // 获取用户资料
router.get('/is_friend', verify, userInfo.isFriend) // 是否是好友
router.post('/insert_newfriends', verify, newFriends.insertNewFriends) // 添加我的新好友通知
router.get('/get_newfriends', verify, newFriends.getnewFriends) // 获取新朋友通知
router.get('/get_friends', verify, newFriends.getFriends) // 获取朋友通知
router.post('/be_friend', verify, userInfo.agreeBeFriend) // 加为好友
router.delete('/del_friend', verify, userInfo.delFriend) // 删除好友
router.put('/update_newfriends', verify, newFriends.updateNewFriends) // 更新 新好友状态  是否已被同意加好友
router.put('/editor_remark', verify, userInfo.editorRemark) // 修改备注
router.put('/editor_remark', verify, userInfo.editorRemark) // 修改备注
router.post('/create_group', verify, groupInfo.createGroup) // 建群
router.get('/get_group_info', verify, groupChat.getGroupInfo) //获取群资料

console.log("router");

module.exports = router
