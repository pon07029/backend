import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const judo = new Router();

judo.get('/', postsCtrl.list);
judo.get('/:name', postsCtrl.read);
judo.patch('/:id', postsCtrl.update);



// posts.post('/', postsCtrl.write);
// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// // post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// health.use('/:id', post.routes());

export default judo;