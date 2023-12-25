import React from "react";

function StdData({ stdData }) {
  return (
    <>
      <div className="flex justify-center  w-full">
        <table className="w-full">
          <thead>
            <tr className=" border">
              <th scope="col" className="w-[20%] border border-gray-900">
                Name
              </th>
              <th scope="col" className="w-[20%] border border-gray-900">
                Roll Number
              </th>
              <th scope="col" className="w-[20%] border border-gray-900">
                Class
              </th>
              <th scope="col" className="w-[20%] border border-gray-900">
                Age
              </th>
              <th scope="col" className="w-[20%] border border-gray-900">
                Date
              </th>
            </tr>
          </thead>
          {stdData.map((std) => {
            return (
              <tbody>
                <tr className="border border-slate-900">
                  <td className="border border-gray-900 text-center">{std.name}</td>
                  <td className="border border-gray-900 text-center">{std.roll_No}</td>
                  <td className="border border-gray-900 text-center">{std.class}</td>
                  <td className="border border-gray-900 text-center">{std.age}</td>
                  <td className="border border-gray-900 text-center">{std.date}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default StdData;
