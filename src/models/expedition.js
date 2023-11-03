import mongoose from 'mongoose';

const { Schema } = mongoose;

const AllSchema = new Schema({
  name: String,
  sex: String,
  phone: String,
  className: String,
},{collection: 'expedition', versionKey: false});

const Expedition = mongoose.model('expedition', AllSchema);
export default Expedition;
