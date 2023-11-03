import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const ballet = new Router();

ballet.get('/', postsCtrl.list);
ballet.get('/:name', postsCtrl.read);
ballet.patch('/:id', postsCtrl.update);

// posts.post('/', postsCtrl.write);

// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default ballet;