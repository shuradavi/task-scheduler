import React, { useState } from "react";
import './App.css'
import TasksList from "./components/TasksLists/TasksList";
import TasksItem from "./components/TasksItem/TasksItem";

function App() {
	
	const [tasks, setTasks] = useState([
		{
			id: 'zxcv1123',
			title: 'Забрать доставку',
			description: 'Пункт WB ул. Столичная д.1, Чехол для телефона КОД 123321',
			isDone: 'false',
			dayForTheWeek: 'Понедельник',
			weight: 1,
		},
		{
			id: 'zxcv11111',
			title: 'Заказать пиццу',
			description: 'Joys Pizza',
			isDone: 'false',
			dayForTheWeek: 'Понедельник',
			weight: 1,
		},
		{
			id: 'zxcv11333',
			title: 'Собрать вещи',
			description: 'Щетка, паста, шорты, футболка',
			isDone: 'false',
			dayForTheWeek: 'Пятница',
			weight: 1,
		},
	])

	// addTask(() => {
	// })

	// deleteTask((id) => {
	// })

	// toggleTask((id) => {
	// })

	// changeTask((id, fields) => {

	// })

	// postponeTask((id) => {})
	

	
	return (
		<div className='App'>
			<h1 style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'normal'  }}>Список задач</h1>
			<button className="btn_addNewTask">Добавить задачу</button>
			<TasksList props={tasks} />
    	</div>
  	);
}

export default App;
