import React from "react";

function TaskHeader() {
  return (
    <div className="row justify-content-between py-3 px-3">
      <div className="col-lg-6">
        <h3>Your task</h3>
      </div>
      <div className="col-lg-6 d-flex justify-content-end gap-3">
        <button className="btn btn-primary">AddTask</button>
        <button className="btn btn-danger">Delete ALL</button>
      </div>
    </div>
  );
}

export default TaskHeader;
