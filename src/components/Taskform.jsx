import React, { useState } from "react";

function Taskform() {
  const [task, setTask] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavourite: false,
  });

  return (
    <div className="container-fluid bg-form w-100 h-100 position-absolute ">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 board-bg rounded-1 p-4 my-3 position-absolute top-25">
          <h1 className="text-center">add task</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={task.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                name="description"
                className="form-control"
                rows="3"
                value={task.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="tags" className="form-label">
                Tags
              </label>
              <input
                name="tags"
                type="text"
                className="form-control"
                value={task.tags}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="priority" className="form-label">
                Priority
              </label>
              <select
                className="form-select"
                name="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="javascript">javascript</option>
                <option value="reactjs">Reactjs</option>
                <option value="nodejs">Nodejs</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              add task
            </button>
            <button className="btn btn-secondary mx-4">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Taskform;
