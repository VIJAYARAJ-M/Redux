import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "./Action/Action";
import  Accordion  from "react-bootstrap/Accordion";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Movie() {

    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies) //useselector using select or get the value from reducer

    //const[Movie,setMovie]=useState([]);
    console.log("d", movie);


    useEffect(() => {
        dispatch(Action());
    }, [dispatch]);

    const get=()=>{
        dispatch(Action());
    }

    return (
        <div>
            <h5>Movie</h5>

            <ul>
                {movie.map((obj,) => (
                    <p>{obj.name}</p>
                ))}
            </ul>
            <div>
                <Accordion defaultActiveKey="0">
                    {movie.map((obj)=>(
                    <Accordion.Item eventKey={obj.id}>
                        <Accordion.Header>{obj.name}</Accordion.Header>
                       
                        <Accordion.Body >
                        {JSON.stringify(obj)}
                          
                        </Accordion.Body>
                       
                    </Accordion.Item>
                    ))}
                </Accordion>
            </div>
           
        </div>
    );
}