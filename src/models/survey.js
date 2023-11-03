import mongoose from 'mongoose';

const { Schema } = mongoose;

const ServeySchema = new Schema({
  answerOne: String,
  answerTwo: String,
}, {collection: 'survey', versionKey: false });

const Survey = mongoose.model('survey', ServeySchema);
export default Survey;