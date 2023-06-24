import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "react-uuid";
const Form = ({users,setUsers}) => {
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [messages, setMessages] = useState({
    fName: false,
    lName: false,
    email: false,
    phone: false,
  });

  const navigate = useNavigate();

  const clear = () => {
    fNameRef.current.value = "";
    lNameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  const checkInputData = () => {
    const fName = checkFName();
    const lName = checkLName();
    const email = checkEmail();
    const phone = checkPhone();
    if (!fName.message && !lName.message && !email.message && !phone.message) {
      setUsers([...users,{id:uuid(),fName:fName.value,lName:lName.value, email:email.value, phone:phone.value}]);
      toast.success("User added successfully");
      console.log(users);
    } else {
      console.log(users);

      toast.error("Enter User details correctly!!");
    }
    console.log(users);
  };

  const checkFName = () => {
    const fName = fNameRef.current?.value;
    const onlyAlphabets = /^[a-zA-Z\s]*$/;
    if(onlyAlphabets.test(fName) && fName.trim()) {
      setMessages({ ...messages, fName: false });
      return {message:false,value:fName};
    } else {
      setMessages({ ...messages, fName: true });
      return {message:true};

    }
  };

  const checkLName = () => {
    const lName = lNameRef.current?.value;
    const onlyAlphabets = /^[a-zA-Z\s]*$/;
    if (onlyAlphabets.test(lName) && lName.trim()) {
      setMessages({ ...messages, lName: false });
      return {message:false,value:lName};
    } else {
      setMessages({ ...messages, lName: true });
      return {message:true};

    }
  };

  const checkEmail = () => {
    const email = emailRef.current?.value;
    const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validEmailFormat.test(email)) {
      setMessages({ ...messages, email: false });
      return {message:false,value:email};
    } else {
      setMessages({ ...messages, email: true });
      return {message:true};

    }
  };

  const checkPhone = () => {
    const phone = phoneRef.current?.value;

    if (phone.length === 10) {
      setMessages({ ...messages, phone: false });
      return {message:false,value:phone};
    } else {
      setMessages({ ...messages, phone: true });
      return {message:true};
    }
  };

  return (
    <div className="min-h-[100vh] relative text-sky-50 bg-texture bg-cover bg-fixed flex justify-center items-center">
    <button onClick={()=>navigate("/")} className="text-black border-2 z-10 border-amber-500 absolute top-6 left-10 bg-white p-2 rounded-2xl font-bold text-xl cursor-pointer">Users</button>
      <ToastContainer />
      <div className="w-full sm:w-5/6 md:w-2/3 h-auto bg-gray-700/[0.25] backdrop-blur-md rounded-xl shadow-2xl ">
        <svg
          onClick={() => clear()}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute top-24 cursor-pointer right-10 w-6 h-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>

        <form className="flex flex-col text-center gap-10 mb-10">
          <h1 className="text-3xl mt-12 underline underline-offset-8 decoration-amber-500 font-bold ">
            Enter User Details
          </h1>
          <div className="">
            <label htmlFor="firstName" className="font-medium mr-4">
              First Name :
            </label>
            <input
              ref={fNameRef}
              id="firstName"
              className="bg-transparent border-b focus:outline-none pl-2 w-1/2"
              type="text"
              onChange={() => checkFName()}
              required
            />
            <div
              className={`${
                messages.fName ? "block" : "hidden"
              } text-red-600 font-medium flex justify-center ml-10 mt-1`}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              Enter the first name correctly!!
            </div>
          </div>
          <div className="">
            <label htmlFor="lastName" className="font-medium mr-4">
              Last Name :
            </label>
            <input
              ref={lNameRef}
              id="lastName"
              className="bg-transparent border-b focus:outline-none pl-2 w-1/2"
              type="text"
              onChange={() => checkLName()}
            />
            <div
              className={`${
                messages.lName ? "block" : "hidden"
              } text-red-600 font-medium flex justify-center ml-10 mt-1`}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              Enter the Last name correctly!!
            </div>
          </div>
          <div className="">
            <label htmlFor="email" className="font-medium mr-4">
              Email :
            </label>
            <input
              ref={emailRef}
              id="email"
              className="autofill:bg-transparent bg-transparent border-b selec focus:outline-none pl-2 w-1/2"
              type="email"
              onChange={() => checkEmail()}
            />
            <div
              className={`${
                messages.email ? "block" : "hidden"
              } text-red-600 font-medium flex justify-center ml-10 mt-1`}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              Enter the email correctly!!
            </div>
          </div>
          <div className="">
            <label htmlFor="phone" className="font-medium mr-4">
              Contact :
            </label>
            <input
              ref={phoneRef}
              id="phone"
              className="bg-transparent border-b focus:outline-none pl-2 w-1/2"
              type="number"
              onChange={() => checkPhone()}
            />
            <div
              className={`${
                messages.phone ? "block" : "hidden"
              } text-red-600 font-medium flex justify-center ml-10 mt-1`}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
              Must be a 10-digit contact number!!
            </div>
          </div>
          <button
            type="button"
            onClick={() => checkInputData()}
            className="text-amber-500 font-bold"
          >
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
