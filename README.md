# mverve_assignment

MOVIES URLS 

ADD - POST
   https://salty-beach-35483.herokuapp.com/api/movies,
   data : {
      movie_title: 'Thor',
      movie_year: '2012',
      movie_director: 'Joss Whedon',
      movie_genre: 'Action, Sci-Fi, Fantasy'
   }
 
READ - GET
    https://salty-beach-35483.herokuapp.com/api/movies,  - LIST ALL MOVIES
     
    query parametes -
      title , year, director, genre


UPDATE - PUT
    https://salty-beach-35483.herokuapp.com/api/movies,
     
    data : {
      search_key: 'title',
      search_value : 'thor',
      title : '', year : ''
      .....
    }

DELETE - DELETE
    https://salty-beach-35483.herokuapp.com/api/movies,
    data : {
      delete_key: 'title',
      delete_value : 'thor'
    }
    
 
// FOR GENRES

ADD - POST
   https://salty-beach-35483.herokuapp.com/api/genres,
   data : {
      name : 'comedy',
   }
 
READ - GET
    https://salty-beach-35483.herokuapp.com/api/genres  - LIST ALL GENRES
     
    query parametes -
      name
      
UPDATE - PUT
    https://salty-beach-35483.herokuapp.com/api/genres,
     
    data : {
      search_key: 'name',
      search_value : 'adventure',
      
      name : 'adventures'
    }

DELETE - DELETE
    https://salty-beach-35483.herokuapp.com/api/genres,
    data : {
      delete_key: 'name',
      delete_value : 'comedy'
    }






