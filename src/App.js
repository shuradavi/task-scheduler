import React, { useState } from "react";
import './App.css'
import MyModal from "./components/MyModal/MyModal";
import TaskForm from "./components/TaskForm/TaskForm";
import Results from "./components/Results/Results";
import EditForm from "./components/EditForm/EditForm";
import TasksItem from "./components/TasksItem/TasksItem";
import { days } from "./initialValues";

function App() {
	
	const [tasks, setTasks] = useState([]);
	const [modal, setModal] = useState(false);
	const [editedTask, setEditedTask] = useState(null);

	const selectedTask = (id) => {
		setEditedTask(tasks.find(task => task.id === id))
	}

	const createTask = (newTask) => {
		setTasks([...tasks, newTask])
		setModal(false)
	}
	const deleteTask = (task) => {
		setTasks(tasks.filter(t => t.id !== task.id))
	}
	const toggleTask = (id) => {
		const idx = tasks.findIndex(task => task.id === id)
		const newTaskState = [...tasks];
		newTaskState[idx] = {...newTaskState[idx], isDone: !newTaskState[idx].isDone }
		setTasks(newTaskState)
	}
	const onChangeHandler = (newValue) => {
		const idx = tasks.findIndex(task => task.id === newValue.id)
		const newTaskValue = [...tasks];
		newTaskValue[idx] = newValue;
		setTasks(newTaskValue)
		setEditedTask(null)
	}
	const postponeTask = (id) => {
		const index = tasks.findIndex(task => task.id === id)
		const postponed = [...tasks];
		postponed[index] = { ...postponed[index], dayForTheWeek: 'Отложенные' }
		setTasks(postponed)
	}
	const editTask = (id) => {
		setEditedTask(tasks.find(task => task.id === id))
	}

	return (
		<div className='App'>
			<header>
			<h1 style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'normal'  }}>Список задач</h1>
			<button className="btn_addNewTask" onClick={() => setModal(true)}>Добавить задачу</button>
			<MyModal visible={modal} setVisible={setModal}>
					<TaskForm create={createTask} />
			</MyModal>
				{Boolean(editedTask) &&
					<MyModal visible={Boolean(editedTask)} setVisible={setEditedTask}>
						<EditForm editedTask={editedTask} onChangeHandler={onChangeHandler} />
					</MyModal>
				}
			</header>
			<div className='week-container'>
				{days.map((day) =>
					<div className={'day-container ' + day} key={day}>
						<div className='day'>{day}</div>
						<TasksItem day={day} tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleTask={toggleTask} postponeTask={postponeTask} selectedTask={selectedTask} />
					</div>
				)}
			</div>
			<Results tasks={tasks}  />
		</div>
  	);
}

export default App;
