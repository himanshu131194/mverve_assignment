import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Genres = new mongoose.Schema({
      name:{
         type: String,
         trim: true,
         lowecase: true
      },
      created: {
      	 type: Date,
      	 default: Date.now
      },
      updated:{ 
         type: Date
      },
      comments: {
      	 type: String
      }
})

export default mongoose.model('genres', Genres);