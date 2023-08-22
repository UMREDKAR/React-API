import { useRef } from "react";
import Header from "./Header";
import See from "./See";

const Contact = (props) =>
{  
  const nameRef = useRef('');
  const emailRef = useRef('');
  const numberRef = useRef('');

  function SubmitHandler(event)
  {
     event.preventDefault();

     const userDetails = {
       userName: nameRef.current.value,
       userEmail: emailRef.current.value,
       userNumber: numberRef.current.value
     };

     nameRef.current.value = '';
     emailRef.current.value = '';
     numberRef.current.value = '';
     props.onAddUser(userDetails);
  }

  return(
    <>
    <Header/>
    <form onSubmit={SubmitHandler}>
        <div className='flex justify-center mt-20 text-2xl'>
          <label className='pr-36'>Name: </label>
          <input type="text" className='bg-slate-300 rounded-md' ref={nameRef} required></input>
        </div>

        <div className='flex justify-center mt-12 text-2xl'>
          <label  className='pr-32'>Email ID: </label>
          <input type="email" className='bg-slate-300 rounded-md' ref={emailRef} required></input>
        </div>

        <div className='flex justify-center mt-12 text-2xl'>
          <label  className='pr-14'>Phone Number: </label>
          <input type="number" className='bg-slate-300 rounded-md' ref={numberRef} required></input>
        </div>

        <div className='flex justify-center mt-20 text-2xl font-semibold'>
          <button className='bg-slate-500 p-2 rounded-md'>Submit</button>
        </div>
    </form>
    {/* <See/> */}
    </>
  );
}

export default Contact;