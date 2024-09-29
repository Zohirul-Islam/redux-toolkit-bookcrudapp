import TaskSearch from "./TaskSearch";
import TaskHeader from "./TaskHeader";
import AllTask from "./AllTask";

function Taskboard() {
  return (
    <>
      <div>
        <div className="container board-bg mt-5 py-2 rounded">
          <TaskSearch />
          <TaskHeader />
          <AllTask />
        </div>
      </div>
    </>
  );
}

export default Taskboard;
