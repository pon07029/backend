import mongoose from 'mongoose';

const { Schema } = mongoose;

const AllSchema = new Schema({
  name: String,
  phone: String,
  time: String,
  price: String,
  location: String,
  address: String,
  lat: Number,
  lon: Number,
  click: Number,
  good: Number
},{collection: 'tennis'});

const Tennis = mongoose.model('tennis', AllSchema);
export default Tennis;