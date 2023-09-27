import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const pilates = new Router();

pilates.get('/', postsCtrl.list);
pilates.get('/:name', postsCtrl.read);
pilates.patch('/:id', postsCtrl.update);



// posts.post('/', postsCtrl.write);
// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// // post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// health.use('/:id', post.routes());

export default pilates;