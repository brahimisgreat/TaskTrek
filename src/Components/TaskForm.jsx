import "./TaskForm.css";

export default function TaskForm() {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        />
        <div className="task_form_bottom_line">
          <div>
            <button className="tag">HTML</button>
            <button className="tag">CSS</button>
            <button className="tag">JavaScript</button>
            <button className="tag">React</button>
          </div>
          <div>
            <select className="task_status">
              <option>To do</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
