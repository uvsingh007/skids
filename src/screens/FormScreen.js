import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../components/Form";
const FormScreen = ({ users, setUsers }) => {
  // used navigate to jump on home page
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] text-center relative text-sky-50 bg-texture bg-cover bg-fixed flex justify-center items-center ">
      <button
        onClick={() => navigate("/")}
        className="text-black border-2 z-10 border-amber-500 absolute top-6 left-10 bg-white p-2 rounded-2xl font-bold text-xl cursor-pointer"
      >
        Users
      </button>
      <ToastContainer />
      <div className="w-full sm:w-5/6 md:w-2/3 h-auto bg-gray-700/[0.25] backdrop-blur-md rounded-xl shadow-2xl pb-10 ">
        <h1 className="text-3xl pt-12 pb-10 underline underline-offset-8 decoration-amber-500 font-bold ">
          Enter User Details
        </h1>
        <Form users={users} setUsers={setUsers} submissionType={"add"} />
      </div>
    </div>
  );
};

export default FormScreen;
