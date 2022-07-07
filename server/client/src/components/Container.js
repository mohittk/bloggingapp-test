import React, { useState } from "react";



export default function Container(props) {
  const [isOpen, setIsOpen] = useState(false);
 

//   function job_application() {
//     let obj = {
//       application_applicant_id: JSON.parse(
//         atob(localStorage.getItem("applicant_token").split(".")[1])
//       ).id,
//       application_jobpost_id: props.id,
//     };

//     apply_application(obj).then((data) => {
//       alert(data.message);
//       window.location.reload();
//     });
//   }

  return (
    <>
    {isOpen && (
      <>
      <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex drop-shadow-2xl backdrop-blur-[2px]">
      <div className="relative bg-white w-full max-w-6xl m-auto flex-col flex rounded-lg">
      <div className="job-container flex flex-row m-10 shadow-2xl">
        <div className="p-3 m-5 text-3xl font-semibold  ">
          {props.title}
          <div className="flex m-2 items-center justify-center">
          <img src={props.image} className="w-[50%] rounded-xl" />
          </div>
          <div className="text-lg p-2 m-10 bg-teal-500 text-white rounded">
            {props.description}
          </div>
        
          <button className="" onClick={()=> setIsOpen(false)}>Exit</button>
 </div>

        </div>
      </div>
      </div>
      </>
    )}
      
      <div className="job-container flex flex-row m-10 shadow-2xl">
        <div className="p-3 m-5 text-3xl font-semibold ">
          {props.title}
          {/* <div className="text-lg p-1 m-10 bg-teal-500 text-white rounded">
            {props.description}
          </div> */}
          <div className="items-center justify-center">
          {/* <img src={props.image} className="w-[50%]" /> */}
          <img src={props.thumbnail} className="w-[80%]" />
          </div>
          <button className="text-xl" onClick={()=> setIsOpen(true)}> Read More </button>
 

        </div>
      </div>
    </>
  );
}
