import Router from 'koa-router';
import * as badmintonCtrl from './badminton.ctrl';

const badminton = new Router();

badminton.get('/', badmintonCtrl.list);
badminton.get('/:name', badmintonCtrl.read);
badminton.patch('/:id', badmintonCtrl.update);




// badminton.post('/', postsCtrl.write);

// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default badminton;