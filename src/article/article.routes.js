var express = require('express');

var ArticleModel = require('./article.model');
var PeopleModel = require('../people/people.model');
var TagModel = require('../tag/tag.model');
var CommentModel = require('../comment/comment.model');

var find = require('../middlewares/find');
var get = require('../middlewares/get');
var post = require('../middlewares/post');
var patch = require('../middlewares/patch');
var findRelationship = require('../middlewares/findRelationship');
var getRelationship = require('../middlewares/getRelationship');
var patchRelationship = require('../middlewares/patchRelationship');
var postRelationship = require('../middlewares/postRelationship');
var deleteRelationship = require('../middlewares/deleteRelationship');

var router = express.Router();

router.get('/articles', find('article', ArticleModel));
router.post('/articles', post('article', ArticleModel));
router.get('/articles/:id', get('article', ArticleModel));
router.patch('/articles/:id', patch('article', ArticleModel));
router.get('/articles/:id/author', findRelationship('article', ArticleModel, 'author', 'people', PeopleModel));
router.get('/articles/:id/tag', findRelationship('article', ArticleModel, 'tag', 'tag', TagModel));
router.get('/articles/:id/comments', findRelationship('article', ArticleModel, 'comments', 'comment', CommentModel));
router.get('/articles/:id/relationships/author', getRelationship('article', ArticleModel, 'author'));
router.get('/articles/:id/relationships/tag', getRelationship('article', ArticleModel, 'tag'));
router.patch('/articles/:id/relationships/:relationship', patchRelationship('article', ArticleModel));
router.post('/articles/:id/relationships/:relationship', postRelationship('article', ArticleModel));
router.delete('/articles/:id/relationships/:relationship', deleteRelationship('article', ArticleModel));

module.exports = router;
