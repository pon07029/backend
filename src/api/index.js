import Router from 'koa-router';
import health from './posts';
import badminton from './badminton';
import ballet from './ballet';
import basketball from './basketball';
import boxing from './boxing';
import climbing from './climbing';
import crossfit from './crossfit';
import hapkido from './hapkido';
import jiujitsu from './jiujitsu';
import judo from './judo';
import pilates from './pilates';
import screengolf from './screengolf';
import swimming from './swimming';
import taekwondo from './taekwondo';
import tennis from './tennis';
import yoga from './yoga';
import survey from './survey';

import expedition from './expedition';

const api = new Router();

// api.get()

api.use('/badminton', badminton.routes());
api.use('/ballet', ballet.routes());
api.use('/basketball', basketball.routes());
api.use('/boxing', boxing.routes());
api.use('/climbing', climbing.routes());
api.use('/crossfit', crossfit.routes());
api.use('/hapkido', hapkido.routes());
api.use('/health', health.routes());
api.use('/jiujitsu', jiujitsu.routes());
api.use('/judo', judo.routes());
api.use('/pilates', pilates.routes());
api.use('/screengolf', screengolf.routes());
api.use('/swimming', swimming.routes());
api.use('/taekwondo', taekwondo.routes());
api.use('/tennis', tennis.routes());
api.use('/yoga', yoga.routes());

api.use('/survey', survey.routes());


api.use('/expedition', expedition.routes());


// 라우터를 내보냅니다.
export default api;