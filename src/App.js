import React, { useState } from "react";
import './App.css'
import Days from './components/Days/Days.jsx'
import MyModal from "./components/MyModal/MyModal";
import TaskForm from "./components/TaskForm/TaskForm";
import Results from "./components/Results/Results";

function App() {
	
	const [tasks, setTasks] = useState([
		{
			id: 'zxcv1123',
			title: 'Забрать доставку',
			description: 'Пункт WB ул. Столичная д.1, Чехол для телефона КОД 123321',
			isDone: false,
			dayForTheWeek: 'Понедельник',
			weight: 1,
		},
		{
			id: 'zxcv11111',
			title: 'Заказать пиццу',
			description: 'Joys Pizza',
			isDone: false,
			dayForTheWeek: 'Понедельник',
			weight: 1,
		},
		{
			id: 'zxcv11333',
			title: 'Собрать вещи',
			description: 'Щетка, паста, шорты, футболка',
			isDone: false,
			dayForTheWeek: 'Пятница',
			weight: 1,
		},
	]);
	const [modal, setModal] = useState(false)
	const [closedTasks, setClosedTasks] = useState([])

	const createTask = ((newTask) => {
		setTasks([...tasks, newTask])
		setModal(false)
	})
	const deleteTask = ((task) => {
		setTasks(tasks.filter(t => t.id !== task.id))
	})

	const toggleTask = ((id) => {
		console.log(`toggleTask Done`)
		const idx = tasks.findIndex(task => task.id === id)
		const newTaskState = [...tasks];

		if (newTaskState[idx].isDone === false) {
			newTaskState[idx] = { ...newTaskState[idx], isDone: true }
			setClosedTasks([...closedTasks, newTaskState[idx]])
		}
		else {
			newTaskState[idx] = { ...newTaskState[idx], isDone: false }
			setClosedTasks(closedTasks.filter((item) => item.id !== newTaskState[idx].id))
		}
		setTasks(newTaskState)
	})
	console.log(`Closed tasks: ${closedTasks}`);


	// changeTask((id, fields) => {

	// })

	// postponeTask((id) => {})
	

	
	return (
		<div className='App'>
			<header>
			<h1 style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'normal'  }}>Список задач</h1>
			<button className="btn_addNewTask" onClick={() => setModal(true)}>Добавить задачу</button>
			<MyModal visible={modal} setVisible={setModal}>
					<TaskForm create={createTask} />
			</MyModal>
			</header>
			<Days props={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
			<Results closedTasks={ closedTasks }  />
		</div>
  	);
}

export default App;
