import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const survey = new Router();

survey.get('/', postsCtrl.list);
// badminton.get('/:name', postsCtrl.read);
survey.patch('/:id', postsCtrl.update);




survey.post('/', postsCtrl.write);

// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default survey;