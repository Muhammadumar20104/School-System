import React, { useState } from "react";
import StdData from "./StdData";

function Form() {
  const [name, setName] = useState(null);
  const [roll, setRoll] = useState(null);
  const [clas, setClas] = useState(null);
  const [age, setAge] = useState(null);
  const [stdData, setStdData] = useState([]);


  // All Data Are Save
  // Ok

  const Data = (e) => {
    e.preventDefault();
    if (name == null || name.trim() === "") {
      alert("Please Enter Name");
    } else if (roll == null || roll.trim() === "") {
      alert("Please Enter Roll");
    } else if (clas == null || clas.trim() === "") {
      alert("Please Enter Class ");
    } else if (age == null || age.trim() === "") {
      alert("Please Enter Age ");
    } else {
      const allData = {
        name: name,
        roll_No: roll,
        class: clas,
        age: age,
        date: new Date().toLocaleDateString(),
      };
      setStdData([...stdData, allData]);
      setName("");
      setClas("");
      setRoll("");
      setAge("");
    }
  };
  return (
    <>
      {/* <form action=""> */}
      <div className="flex justify-center mt-20 p-2">
        <div className=" w-[50%] border border-gray-900 rounded-lg p-2 bg-neutral-700">
          <div className="flex justify-center ">
            <h1 className="flex  justify-center p-2 border border-gray-900 rounded-lg bg-rose-600">
              Enter The New Student
            </h1>
          </div>
          <div className="flex justify-evenly w-full p-2 gap-2">
            <h1 className="w-[30%] p-1 text-slate-50">Enter The Name :</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="p-1 border border-slate-900 rounded-lg w-full"
            />
          </div>
          <div className="flex justify-evenly w-full p-2 gap-2">
            <h1 className="w-[30%] p-1 text-slate-50">
              Enter The Roll Number :
            </h1>
            <input
              type="text"
              value={roll}
              onChange={(e) => {
                setRoll(e.target.value);
              }}
              className="p-1 border border-slate-900 rounded-lg w-full"
            />
          </div>
          <div className="flex justify-evenly w-full p-2 gap-2">
            <h1 className="w-[30%] p-1 text-slate-50">Enter The Class :</h1>
            <input
              type="text"
              value={clas}
              onChange={(e) => {
                setClas(e.target.value);
              }}
              className="p-1 border border-slate-900 rounded-lg w-full"
            />
          </div>
          <div className="flex justify-evenly w-full p-2 gap-2">
            <h1 className="w-[30%] p-1 text-slate-50">Enter The Age :</h1>
            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              className="p-1 border border-slate-900 rounded-lg w-full"
            />
          </div>
          <div className="flex  justify-center w-full p-1 border border-gray-900 rounded-lg bg-rose-600">
            <button className="w-full" onClick={Data}>
              Submit
            </button>
          </div>
        </div>
      </div>
      {/* <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Roll Number</th>
            <th scope="col">Class</th>
            <th scope="col">Age</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        {stdData.map((std) => {
          return (
            <tbody>
              <tr>
                <td>{std.name}</td>
                <td>{std.roll}</td>
                <td>{std.age}</td>
                <td>{std.date}</td>
              </tr>
            </tbody>
          );
        })}
      </table> */}
      <StdData stdData={stdData} />
    </>
  );
}

export default Form;
