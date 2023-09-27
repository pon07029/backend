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
},{collection: 'taekwondo'});

const Taekwondo = mongoose.model('taekwondo', AllSchema);
export default Taekwondo;