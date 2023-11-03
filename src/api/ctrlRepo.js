import mongoose from 'mongoose';
import Joi from 'joi';

//모델들을 배열로 만들어서 접근 (종목 번호(DB) -1 의 인덱스로 생각)
import Badminton from '../models/badminton';
import Ballet from '../models/ballet';
import Basketball from '../models/basketball';
import Boxing from '../models/boxing';
import Climbing from '../models/climbing';
import Crossfit from '../models/crossfit';
import Hapkido from '../models/hapkido';
import Jiujitsu from '../models/jiujitsu';
import Judo from '../models/judo';
import Pilates from '../models/pilates';
import Health from '../models/health';
import Screengolf from '../models/screengolf';
import Swimming from '../models/swimming';
import Taekwondo from '../models/taekwondo';
import Tennis from '../models/tennis';
import Yoga from '../models/yoga';

const models = [Badminton, Ballet, Basketball, Boxing, Climbing, Crossfit, Hapkido, Jiujitsu, Judo, Pilates, Health, Screengolf, Swimming, Taekwondo, Tennis, Yoga]

export const list = async ctx => {
    const { lat, lon } = ctx.query;
    try {
      var posts;
      if ( lat && lon){
        posts = await Badminton.find({"lat": lat, "lon":lon}).exec();
      }
      else {
        posts = await Badminton.find().exec();
      }
      ctx.body = posts;
    } catch (e) {
      ctx.throw(500, e);
    }
  };
  
  /*
    GET /api/posts/:name
  */
  export const read = async ctx => {
    const { name } = ctx.params;
    try {
      const post = await Badminton.find({"name": name}).exec();
      if (!post) {
        ctx.status = 404; // Not Found
        return;
      }
      ctx.body = post;
    } catch (e) {
      ctx.throw(500, e);
    }
  };