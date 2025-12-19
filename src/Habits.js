import Appbackground from "./Images/AppBackground.png";

function Habits(props) {
  return (
    <>
   <div className = "flower-bg min-vh-75"
        style={{ backgroundImage: `url(${Appbackground})`,
          position: "relative",
          height: "75vh",
          width: "100%",
        }}
      >
      <div className="" style={{ height: "40px"}}>
        <h1 className="lead fs-1 fw-bold text-center">
         Your Habits:
        </h1>
      </div>
      <div
        className="scroll-area p-2 mb-2 min-vh-75"
        style={{ height: "450px", overflowY: "auto" }}
      >
        {/** Map through the susHabitPD array to display each habit */}
        {/** Each habit has a checkbox that reflects its checked status from checkedTasksPD */}
        {/** When a checkbox is toggled, it calls the toggleHabitPD function with the habit's ID */}
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

      <div className="d-flex justify-content-center">
        <button
          className="p-1 btn btn-outline-success active btn-lg"
          onClick={() => props.changeTaskCheckPD({})}
        >
          Clear Habits
        </button>
      </div>

      </div>
    </>
  );
}

export default Habits;
