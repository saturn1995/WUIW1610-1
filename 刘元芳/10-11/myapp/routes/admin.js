var express = require('express');
var router = express.Router();

//当访问admin时，显示首页
router.get('/', function(req, res) {
  res.render("admin/index");
});
// admin/info
router.get('/info', function(req, res) {
    res.render("admin/info");
});
// admin/pass
router.get('/pass', function(req, res) {
    res.render("admin/pass");
});
// admin/user
router.get('/user', function(req, res) {
    res.render("admin/user");
});
// admin/adv
router.get('/adv', function(req, res) {
    res.render("admin/adv");
});
// admin/addadv
router.get('/addadv', function(req, res) {
    res.render("admin/addadv");
});
// admin/cate
router.get('/cate', function(req, res) {
    res.render("admin/cate");
});
// admin/addcate
router.get('/addcate', function(req, res) {
    res.render("admin/addcate");
});
// admin/article
router.get('/article', function(req, res) {
    res.render("admin/article");
});
// admin/message
router.get('/message', function(req, res) {
    res.render("admin/message");
});
// admin/link
router.get('/link', function(req, res) {
    res.render("admin/link");
});
// admin/addlink
router.get('/addlink', function(req, res) {
    res.render("admin/addlink");
});


module.exports = router;
