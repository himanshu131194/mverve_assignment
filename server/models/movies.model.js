import mongoose from 'mongoose'
import CONFIG from '../../config';
const {DB} = CONFIG;

const Movies = new mongoose.Schema({
      title:{
         type: String,
         trim: true,
         lowercase: true,
      },
      year: {
      	type: String,
         trim : true
      },
      director:{ 
         type: String,
         trim: true,
         lowercase: true
      },
      genre: {
         type: String,
         trim: true,
         lowercase: true
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

export default mongoose.model('movies', Movies);