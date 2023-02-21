const Initial={
    movies: [],
}

 export const MovieReducer=(state=Initial,action)=>{
    switch(action.type){
        case "USER_NAME":
            return {...state, movies: action.payload}
        
        default:
            return state
    }

    
}