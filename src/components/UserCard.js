import React, { useState } from "react";
import Form from "./Form";
import DateTimePicker from "./DateTimePicker";
import uuid from "react-uuid";

const UserCard = ({ data, users, setUsers }) => {
  //used useState to whether show the user detail or form 
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const handleDateTimeChange = (e) => {
    setSelectedDateTime(e.target.value);
  };
  const [show, setShow] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  // use remove function here so that the user prop will be filtered 
  const removeUser = () => {
    setUsers(users.filter((item) => data.id !== item.id));
  };
  return (
    <div className=" text-white w-full sm:w-2/3 md:w-1/2 lg:w-2/5 p-[6vw] lg:p-[4vw] bg-gray-700/[0.30] backdrop-blur-md rounded-xl shadow-2xl ">
      <div className="absolute flex top-5 right-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-amber-500 mr-5 cursor-pointer"
          onClick={show ? () => setShow(false) : () => setShow(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" w-6 h-6 text-red-600 cursor-pointer"
          onClick={() => removeUser()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
      <div className={`${!show ? "flex flex-col gap-10" : "hidden"}`}>
        <div className="flex">
          <div className="mr-4">First Name :</div>
          <div>{data.fName}</div>
        </div>
        <div className="flex">
          <div className="mr-4">Last Name :</div>
          <div>{data.lName}</div>
        </div>
        <div className="flex">
          <div className="mr-4">Location :</div>
          <div>{data.loc}</div>
        </div>
        <div className="flex">
          <div className="mr-4">Apointments :</div>
          <div>{
            data.appointments.map((data)=><div>{data.dateTime}</div>)
          }</div>
        </div>
        <div className={`${showAppointment?"":"hidden"}`}>
          <label htmlFor="datetimepicker">Select Date and Time : </label>
          <input
            className="bg-transparent"
            type="datetime-local"
            id="datetimepicker"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
          />
          <button className="block mt-3 p-2 bg-white text-black rounded-md" onClick={()=>{setShowAppointment(false)}}>Submit</button>
        </div>

        <button className={`${!showAppointment?"bg-amber-500 p-2 w-48":"hidden"}`} onClick={showAppointment ? () => setShowAppointment(false) : () => setShowAppointment(true)}>
          Add Apointments
        </button>
        
      </div>
      <div className={`${show ? "" : "hidden"}`}>
        <Form
          users={users}
          setUsers={setUsers}
          submissionType={"edit"}
          id={data.id}
        />
      </div>
    </div>
  );
};

export default UserCard;
