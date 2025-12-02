import React from "react";

function Habits(props) {
  return (
    <>
    <div style = {{height: "75vh", width: "100%"}}>
      <div className="bg-info mb-2" style={{ height: "40px"}}>
        <h1 className="lead fs-1 fw-bold text-center">
         Your Habits:
        </h1>
      </div>
      <div
        className="bg-info scroll-area p-2 mb-2"
        style={{ height: "350px", overflowY: "auto" }}
      >
        {props.susHabitPD.map((a) => (
          <p className="lead fw-bold fs-4 text-center" key={a.ID}>
            <label>
              <input
                className="form-check-input"
                type="checkbox"
                checked={!!props.checkedTasksPD[a.ID]}
                onChange={() => props.toggleHabitPD(a.ID)}
              />{" "}
              {a.Habit}
            </label>
          </p>
        ))}
      </div>

      <div className="bg-info d-flex justify-content-center">
        <button
          className="p-1 btn btn-outline-success active btn-lg"
          onClick={() => props.changeTaskCheckPD({})}
        >
          Clear Habits
        </button>
      </div>

      <div className="bg-info" style={{ height: "20px" }}></div>
      <div className="bg-grass" style={{ height: "20px" }}></div>
      <div className="bg-brown" style={{ height: "300px" }}></div>
      </div>
    </>
  );
}

export default Habits;
