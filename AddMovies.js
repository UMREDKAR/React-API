// import React, { useState } from "react";
import React, { useRef } from "react";

const AddMovies = (props) =>{

   // const[heading,setHeading] = useState('');
   // const[text,setText] = useState('');
   // const[date,setDate] = useState('');
   
   const titleRef = useRef('');
   const openingTextRef= useRef('');
   const releaseDateRef= useRef('');

   // const headingHandler = (event) =>{
   //    event.preventDefault();  
   //    setHeading(event.target.value);
   // }

   // const textHandler = (event) =>{
   //    event.preventDefault();  
   //    setText(event.target.value);
   // }

   // const dateHandler = (event) =>{
   //    event.preventDefault();  
   //    setDate(event.target.value);
   // }


   const submitHandler = (event) =>{
      event.preventDefault();
      const movie = { title: titleRef.current.value,
                    openingText: openingTextRef.current.value,
                    releaseDate: releaseDateRef.current.value
      };
      props.onAddMovies(movie);
   }


    return(
        <form onSubmit={submitHandler}>
            <label>Title</label>
            <input type="text" ref={titleRef}></input>

            <label>Opening Text</label>
            <textarea type="text" ref={openingTextRef}></textarea>

            <label>Release Date</label>
            <input type="date" ref={releaseDateRef}></input>

            <button>Add Movie</button>
        </form>
    );
}

export default AddMovies;