export default {
	 env : process.env.NODE_ENV || 'development',
	 port : process.env.PORT || 3000,
	 mongoURI : 'mongodb+srv://feelfunny:feelfunny123@feelfunny-jfu4v.mongodb.net/test?retryWrites=true',
	 DB:{
        DEFAULT_COUNT : 0,
        DEFAULT_CONTENT_TYPE : 1,  //1-images 2- videos
        DEFAULT_TRUE: true,
        DEFAULT_FALSE: false,
        DEFAULT_ACCOUNT_TYPE: 0, //0 - Normal , 1- Google, 2- Facebook
        GENDER:{
        	MALE : 1,
        	FEMALE: 2,
        	OTHER: 3
        },
        BADGETS: {
        	NOOBIE: 1,
        	PRO: 2 
        }
	}
}