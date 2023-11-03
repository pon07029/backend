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
  good: Number,
  serviceInfo: Number,
  lessonInfo : Array,
  openDateInfo: Array,
  additionalFacInfo: Number,
  environInfo: Number,
  
}, {collection: 'badminton'});

const Badminton = mongoose.model('badminton', AllSchema);
export default Badminton;