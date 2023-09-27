import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const taekwondo = new Router();

taekwondo.get('/', postsCtrl.list);
taekwondo.get('/:name', postsCtrl.read);
taekwondo.patch('/:id', postsCtrl.update);



// posts.post('/', postsCtrl.write);
// const post = new Router(); // /api/posts/:id
// post.get('/', postsCtrl.read);
// // post.delete('/', postsCtrl.remove);
// post.patch('/', postsCtrl.update);

// health.use('/:id', post.routes());

export default taekwondo;