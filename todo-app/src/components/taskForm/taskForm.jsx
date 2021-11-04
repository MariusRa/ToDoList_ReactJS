
function TaskForm() {
    return (
        <form>
            <input
                id="inputList"
                className="inputToDo"
                type="text"
                placeholder="Enter Task!"
            />
            <input
                id="inputList1"
                className="inputCreated"
                type="text"
                placeholder="Task Created"
            />
            <input
                id="inputList1"
                className="inputStatus"
                type="text"
                placeholder="Task Status"
            />
            <input
                id="inputList1"
                className="inputDate"
                type="text"
                placeholder="Task Date"
            />
        </form>
    );
}
export default TaskForm;
