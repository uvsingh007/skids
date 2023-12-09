import React, { useRef, useState } from "react";
// import DateTimePicker from 'react-date-picker';
import DateTimePicker from 'react-datetime-picker';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "react-uuid";
const Form = ({ users, setUsers, submissionType, id }) => {
  //used four refs for input tags
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
    const Ref = useRef(null);
    // const phoneRef = useRef(null);
  const locRef=useRef(null);
  // used usestate to display error tags
  const [messages, setMessages] = useState({
    fName: false,
    lName: false,
    loc:false,
    // email: false,
    // phone: false,
  });

  // to check the submission type whether its from user page or form page
  const submit = () => {
    if (submissionType == "add") {
      checkInputData();
    } else {
      editData();
    }
  };

  // edit the data if submission type is edit
  const editData = () => {
    const fName = checkFName();
    const lName = checkLName();
    const loc = checkLoc();
    // const email = checkEmail();
    // const phone = checkPhone();
    if (!fName.message && !lName.message && !loc.message) {
      setUsers(
        users.map((item) => {
          if (item.id == id) {
            return {
              id: uuid(),
              fName: fName.value,
              lName: lName.value,
              loc:loc.value,
              // email: email.value,
              // phone: phone.value,
            };
          } else {
            return item;
          }
        })
      );
      toast.success("Client edited successfully");
      console.log(users);
    } else {
      console.log(users);

      toast.error("Enter Client details correctly!!");
    }
  };

  // check input data if the submit type add
  const checkInputData = () => {
    const fName = checkFName();
    const lName = checkLName();
    const loc = checkLoc();
    // const email = checkEmail();
    // const phone = checkPhone();
    if (!fName.message && !lName.message && !loc.message) {
      setUsers([
        ...users,
        {
          id: uuid(),
          fName: fName.value,
          lName: lName.value,
          loc:loc.value,
          // email: email.value,
          // phone: phone.value,
        },
      ]);
      toast.success("Client added successfully");
      console.log(users);
    } else {
      console.log(users);

      toast.error("Enter Client details correctly!!");
    }
  };

  // checks firstname 
  const checkFName = () => {
    const fName = fNameRef.current?.value;
    const onlyAlphabets = /^[a-zA-Z\s]*$/;
    if (onlyAlphabets.test(fName) && fName.trim()) {
      setMessages({ ...messages, fName: false });
      return { message: false, value: fName };
    } else {
      setMessages({ ...messages, fName: true });
      return { message: true };
    }
  };

    // checks Lastname 
  const checkLName = () => {
    const lName = lNameRef.current?.value;
    const onlyAlphabets = /^[a-zA-Z\s]*$/;
    if (onlyAlphabets.test(lName) && lName.trim()) {
      setMessages({ ...messages, lName: false });
      return { message: false, value: lName };
    } else {
      setMessages({ ...messages, lName: true });
      return { message: true };
    }
  };

  const checkLoc = () => {
    const loc = locRef.current?.value;
    const onlyAlphabets = /^[a-zA-Z\s]*$/;
    if (onlyAlphabets.test(loc) && loc.trim()) {
      setMessages({ ...messages, loc: false });
      return { message: false, value: loc };
    } else {
      setMessages({ ...messages, loc: true });
      return { message: true };
    }
  };

  // checks Email format
  // const checkEmail = () => {
  //   const email = emailRef.current?.value;
  //   const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   if (validEmailFormat.test(email)) {
  //     setMessages({ ...messages, email: false });
  //     return { message: false, value: email };
  //   } else {
  //     setMessages({ ...messages, email: true });
  //     return { message: true };
  //   }
  // };

  // checks phone number length
  // const checkPhone = () => {
  //   const phone = phoneRef.current?.value;

  //   if (phone.length === 10) {
  //     setMessages({ ...messages, phone: false });
  //     return { message: false, value: phone };
  //   } else {
  //     setMessages({ ...messages, phone: true });
  //     return { message: true };
  //   }
  // };

  return (
    <form className="flex flex-col gap-10">
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
        <label htmlFor="loc" className="font-medium mr-4">
          Location :
        </label>
        <input
          ref={locRef}
          id="loc"
          className="bg-transparent border-b focus:outline-none pl-2 w-1/2"
          type="text"
          onChange={() => checkLoc()}
        />
        <div
          className={`${
            messages.loc ? "block" : "hidden"
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
          Enter the Location correctly!!
        </div>
      </div>
      <button
        type="button"
        onClick={() => submit()}
        className="text-amber-500 font-bold"
      >
        {" "}
        Submit
      </button>
      
    </form>
    
  );
};

export default Form;
