import React from "react";

function AllTask() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th>title</th>
            <th>description</th>
            <th>tags</th>
            <th>priority</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>learn react</td>
            <td>reactjs is an awesome language for web application</td>
            <td>
              <ul className="d-flex gap-2">
                <li>js</li>
                <li>view</li>
                <li>angular</li>
              </ul>
            </td>
            <td>high</td>
            <td>
              <div className="d-flex gap-2 justify-content-end">
                <button className="btn btn-danger">delete</button>
                <button className="btn btn-success">Edit</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AllTask;
