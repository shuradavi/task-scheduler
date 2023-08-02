import React, { useState } from "react";
import './App.css'
import MyModal from "./components/MyModal/MyModal";
import TaskForm from "./components/TaskForm/TaskForm";
import Results from "./components/Results/Results";
import EditForm from "./components/EditForm/EditForm";
import TasksItem from "./components/TasksItem/TasksItem";
import Postponed from "./components/Postponed/Postponed";

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
	const [modal, setModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [changes, setChanges] = useState({ title: '', description: '', dayForTheWeek: '', weight: 0, isDone: false, });
	const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

	


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

		if (newTaskState[idx].isDone === false) {
			newTaskState[idx] = { ...newTaskState[idx], isDone: true }
		}
		else {
			newTaskState[idx] = { ...newTaskState[idx], isDone: false }
		}
		setTasks(newTaskState)
	}


	const editTask = (id) => {
		setChanges(tasks.find(task => task.id === id))
		setEditModal(true)
	};

	const onChangeHandler = (newValue) => {
		const idx = tasks.findIndex(task => task.id === newValue.id)
		const newTaskValue = [...tasks];
		newTaskValue[idx] = newValue;
		setTasks(newTaskValue)
		setEditModal(false)
	}

	const postponeTask = (id) => {
		const index = tasks.findIndex(task => task.id === id)
		const postponed = [...tasks];
		postponed[index] = { ...postponed[index], dayForTheWeek: 'Отложенные' }
		setTasks(postponed)
	}


	return (
		<div className='App'>
			<header>
			<h1 style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'normal'  }}>Список задач</h1>
			<button className="btn_addNewTask" onClick={() => setModal(true)}>Добавить задачу</button>
			<MyModal visible={modal} setVisible={setModal}>
					<TaskForm create={createTask} />
			</MyModal>
			<MyModal visible={editModal} setVisible={setEditModal}>
					<EditForm changes={changes} setChanges={setChanges} onChangeHandler={onChangeHandler} />
			</MyModal>	
			</header>
			<div className='week-container'>
				{days.map(day => 
					<div className='day-container' key={day}>
						<div className='day'>{day}</div>
						<TasksItem day={day} tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} />
					</div>
				)}
				<Postponed tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Отложенные'/>
			</div>
			<Results tasks={tasks}  />
		</div>
  	);
}

export default App;
