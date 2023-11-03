import Expedition from '../../models/expedition';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types
export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  console.log(id)
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  return next();
};
/*
  POST /api/posts
  {
    name: '이름',
    sex: '성',
    phone: '전화번호',
    class: '수업명'
  }
*/
export const write = async ctx => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    name: Joi.string().required(), // required() 가 있으면 필수 항목
    sex: Joi.string().required(),
    phone: Joi.string().required(),
    className: Joi.string().required(),
  });

  // 검증 후, 검증 실패시 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { name, sex, phone, className } = ctx.request.body;
  const post = new Expedition({
    name,
    sex,
    phone,
    className
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  GET /api/posts
*/
export const list = async ctx => {
  const { lat, lon } = ctx.query;

  try {
    var posts;
    if ( lat && lon){
      posts = await Expedition.find({"lat": lat, "lon":lon}).exec();
    }
    else {
      posts = await Expedition.find().exec();
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
    const post = await Expedition.find({"name": name}).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  DELETE /api/posts/:id
*/
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Expedition.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공은 했지만 응답할 데이터는 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  PATCH /api/posts/:id
  {
    click: '수정'
    good: '수정'
  }
*/
export const update = async ctx => {
  const { id } = ctx.params;
  // write 에서 사용한 schema 와 비슷한데, required() 가 없습니다.
  const schema = Joi.object().keys({
    click: Joi.number(),
    good: Joi.number(),
  });

  // 검증 후, 검증 실패시 에러처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }
 
  try {
    const post = await Expedition.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false 일 때에는 업데이트 되기 전의 데이터를 반환합니다.
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};