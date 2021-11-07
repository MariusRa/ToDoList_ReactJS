import React, {useState} from "react";

const NewTask =(props)=> {
    const [userInput, setUserInput] = useState( {
        title: '',
        status: '',
        created: ''
    })
    const titleHandler = (event)=> {
        setUserInput(prevState=>{
            return {...prevState, title:event.target.value}
        })
    }
    const statusHandler =(event)=>{
        setUserInput(prevState=>{
            return {...prevState, status:event.target.value}
        })
    }
    const createdHandler =(event)=>{
        setUserInput(prevState=>{
            return {...prevState, created:event.target.value}
        })
    }
    const clearInputs =()=> {
        setUserInput(()=>{
            return {
                title:'',
                status:'',
                created:''
            }
        })
    }
    const submitHandler =(event)=>{
        event.preventDefault();
        const userInputId = {
            id:Math.random().toString(),
            ...userInput
        }
        console.log(userInputId)
        props.onNewTasks(userInputId)
        clearInputs();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="card-header-tab card-header">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i className="fa fa-tasks"></i>&nbsp;To Do Inputs
                </div>
            </div>
            <input id="inputList" className="inputToDo" type="text" placeholder="Enter Task!" value={userInput.title} onChange={titleHandler}/>
            <input id="inputList" className="inputCreated" type="text" placeholder="Task Created" value={userInput.created} onChange={createdHandler}/>
            <select className="status" value={userInput.status} onChange={statusHandler}>
                <option value="empty">-</option>
                <option value="open">Atvira</option>
                <option value="done">Atlikta</option>
            </select>
            <input id="inputList" className="inputDate" type="text" placeholder="Task Date"/>
            <div className="d-block text-right card-footer">
                <button className="mr-2 btn btn-link btn-sm">Cancel</button>
                <button type='submit' className="btn btn-primary">Add Task</button>
            </div>
        </form>

)}

export default NewTask;
