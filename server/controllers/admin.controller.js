import mongoose from 'mongoose'
import Genres from '../models/genres.model'
import Movies from '../models/movies.model'
import errorHandler from '../helpers/db_errors_handler'
import CONFIG from '../../config';

export default {
        listGenres: async (req, res)=>{
             const listObject = {};
             if(req.query['name'] && req.query['name']!==null){
                listObject['name'] = req.query['name'].trim().toLowerCase();
             }
             try{
                  const genres = await Genres.aggregate([
                     { $match : listObject },
                  ]).sort({created: -1});
                  res.status(200).send({
                      data : genres  
                  })
              }catch(e){
                  res.status(400).send({
                      error : CONFIG.ERRORS[100]
                  })
              } 
       },
       addGenre: async (req, res)=>{
           const genreObject = {
                 name : req.body['name'] ? (req.body['name']).trim():''
           }
           try{
               const genre = new Genres(genreObject)
               const result = await genre.save();
               res.status(200).send({
                   data : result   
               });
           }catch(e){
               res.status(400).send({
                   error : CONFIG.ERRORS[100]   
               })
           }
      },
      updateGenre: async (req, res)=>{
               let toUpdateSeachKey = req.body['seach_key'] ? (req.body['seach_key']).trim():'';
               let toUpdateSeachValue = req.body['seach_value'] ? (req.body['seach_value']).trim():'';
               
               if(typeof toUpdateSeachValue=='string'){
                  toUpdateSeachValue = toUpdateSeachValue.toLowerCase();
               }
               const updateObject = {}
               if(req.body['name'] && req.body['name']!==null){
                  updateObject['name'] = req.body['name'].trim();
               }
               try{
                   const result = await Genres.findOneAndUpdate(
                          {[toUpdateSeachKey]: toUpdateSeachValue},
                          updateObject,
                          {
                            new: true
                          }
                   )
                   res.status(200).send({
                       data : result   
                   });
                }catch(e){
                   console.log(e)
                   res.status(400).send({
                       error : CONFIG.ERRORS[100]   
                   })
                }
      },
      deleteGenre: async (req, res)=>{
               let deleteKey = req.body['delete_key'] ? (req.body['delete_key']).trim():'';
               let deleteValue = req.body['delete_value'] ? (req.body['delete_value']).trim():'';
               try{
                 const result = await Genres.remove({[deleteKey]: deleteValue});
                 res.status(200).send({
                   data : result  
                 })
               }catch(e){
               res.status(400).send({
                   error : CONFIG.ERRORS[100]
               })
              } 
      },


	   addGenerations: async (req, res)=>{
       const genresListObject = [
         {name: 'action'},
         {name: 'adventure'},
         {name: 'sci-fi'},
         {name: 'fiction'},
         {name: 'suspense'},
         {name: 'thriller'},
         {name: 'comedy'},
         {name: 'romance'},
         {name: 'biopics'}
       ]
 	     try{
           const result = await Genres.insertMany(genresListObject);
           res.status(200).send({
               data : result   
           })
 	     }catch(e){
           res.status(400).send({
               error : CONFIG.ERRORS[100]   
           })
 	     }
	    },


      //ROUTES ACTIONS FOR MOVIES
      addNewMovie: async (req, res)=>{
       const movieTitle = req.body['movie_title'] ? (req.body['movie_title']).trim():'',
             movieYear = req.body['movie_year'] ? (req.body['movie_year']).trim(): '',
             movieDirector = req.body['movie_director']? (req.body['movie_director']).trim():'',
             movieGenre = req.body['movie_genre']? (req.body['movie_genre']).trim():'';
       const movieObject = {
             title : movieTitle,
             year: movieYear,
             director: movieDirector,
             genre : movieGenre
       }
       try{
           const movie = new Movies(movieObject)
           const result = await movie.save();
           res.status(200).send({
               data : result   
           });
       }catch(e){
           console.log(e)
           res.status(400).send({
               error : CONFIG.ERRORS[100]   
           })
       }
      },

      updateMovie: async (req, res)=>{

       let toUpdateSeachKey = req.body['seach_key'] ? (req.body['seach_key']).trim():'';
       let toUpdateSeachValue = req.body['seach_value'] ? (req.body['seach_value']).trim():'';
       
       if(typeof toUpdateSeachValue=='string'){
          toUpdateSeachValue = toUpdateSeachValue.toLowerCase();
       }
       const updateObject = {}
             if(req.body['movie_title'] && req.body['movie_title']!==null){
                updateObject['title'] = req.body['movie_title'].trim();
             }
             if(req.body['movie_year'] && req.body['movie_year']!==null){
                updateObject['year'] = req.body['movie_year'].trim();
             }
             if(req.body['movie_director'] && req.body['movie_director']!==null){
                updateObject['director'] = req.body['movie_director'].trim();
             }
             if(req.body['movie_genre'] && req.body['movie_genre']!==null){
                updateObject['genre'] = req.body['movie_genre'].trim();
             }
             try{
                 const result = await Movies.findOneAndUpdate(
                        {[toUpdateSeachKey]: toUpdateSeachValue},
                        updateObject,
                        {
                          new: true
                        }
                 )
                 res.status(200).send({
                     data : result   
                 });
              }catch(e){
                 console.log(e)
                 res.status(400).send({
                     error : CONFIG.ERRORS[100]   
                 })
              }
      },
      listMovies: async (req, res)=>{
             const listObject = {};
             if(req.query['title'] && req.query['title']!==null){
                listObject['title'] = req.query['title'].trim().toLowerCase();
             }
             if(req.query['year'] && req.query['year']!==null){
                listObject['year'] = req.query['year'].trim().toLowerCase();
             }
             if(req.query['director'] && req.query['director']!==null){
                listObject['director'] = req.query['director'].trim().toLowerCase();
             }
             if(req.query['genre'] && req.query['genre']!==null){
                listObject['genre'] = req.query['genre'].trim().toLowerCase();
             }
            try{
               const movies = await Movies.aggregate([
                   { $match : listObject },
               ]).sort({created: -1});
               res.status(200).send({
                   data : movies  
               })
            }catch(e){
               res.status(400).send({
                   error : CONFIG.ERRORS[100]
               })
            } 
      },
      deleteMovies: async (req, res)=>{
             const listObject = {};
             if(req.body['title'] && req.body['title']!==null){
                listObject['title'] = req.body['title'].trim().toLowerCase();
             }
             if(req.body['year'] && req.body['year']!==null){
                listObject['year'] = req.body['year'].trim().toLowerCase();
             }
             if(req.body['director'] && req.body['director']!==null){
                listObject['director'] = req.body['director'].trim().toLowerCase();
             }
             if(req.body['genre'] && req.body['genre']!==null){
                listObject['genre'] = req.body['genre'].trim().toLowerCase();
             }
             try{
               const result = await Movies.remove(listObject);
               res.status(200).send({
                   data : result  
               })
             }catch(e){
               res.status(400).send({
                   error : CONFIG.ERRORS[100]
               })
             } 
      },
      
	   // uploadUsers : async (req, res)=>{
    //        // let usersList = fakeUsers.data;
           
    //        // let count = 1;
    //        // for(let x in usersList){
    //        // 	   usersList[x]['name'] = usersList[x]['name'].toLowerCase();
    //        // 	   usersList[x]['email'] = count+"@gmail.com";
    //        //     ++count;
    //        // }
    //        // //const result = await User.find({account_type: -1}).remove();
    //        // const result = await User.insertMany(usersList)
    //        // res.send({
    //        // 	  data : result
    //        // })
	   // },
	   // listUsers : async (req, res)=>{
    //       const users = await User.find({}).sort({created: 1});
    //       res.send({
    //       	  data: users
    //       })
	   // }


}
