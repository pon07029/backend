import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const badminton = new Router();

badminton.get('/', postsCtrl.list);
badminton.get('/:name', postsCtrl.read);
badminton.patch('/:id', postsCtrl.update);




// badminton.post('/', postsCtrl.write);

// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default badminton;