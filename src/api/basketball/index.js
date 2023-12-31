import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const basketball = new Router();

basketball.get('/', postsCtrl.list);
basketball.get('/:name', postsCtrl.read);
basketball.patch('/:id', postsCtrl.update);



// posts.post('/', postsCtrl.write);
// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// // post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// health.use('/:id', post.routes());

export default basketball;