import React from "react";

export default function Action(){
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(response=>{

            dispatch({type:"USER_NAME", payload:response})
            //console.log("f",response);
        })

    }
}