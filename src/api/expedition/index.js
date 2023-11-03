import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const expedition = new Router();

expedition.get('/', postsCtrl.list);
expedition.get('/:name', postsCtrl.read);
expedition.patch('/:id', postsCtrl.update);
expedition.post('/', postsCtrl.write);


// posts.post('/', postsCtrl.write);
// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// // post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// health.use('/:id', post.routes());

export default expedition;