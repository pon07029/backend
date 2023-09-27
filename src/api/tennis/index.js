import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const tennis = new Router();

tennis.get('/', postsCtrl.list);
tennis.get('/:name', postsCtrl.read);
tennis.patch('/:id', postsCtrl.update);



// posts.post('/', postsCtrl.write);
// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// // post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// health.use('/:id', post.routes());

export default tennis;