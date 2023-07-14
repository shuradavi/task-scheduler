import React, {useState} from 'react';

const TaskForm = ({create}) => {
	const [task, setTask] = useState({title: '', description: '', dayForTheWeek: '', weight: ''})
	
	const addTask = (e) => {
		e.preventDefault()
		const newTask = {
			...task, id: Date.now()
		}
		create(newTask);
		setTask({ title: '', description: '', dayForTheWeek: '', weight: '' })
		
	}

	return (
		<form>
			<input
				className='addTask-input'
				value={task.title}
				onChange={e => setTask({ ...task, title: e.target.value })}
				type='text'
				placeholder='Название задачи'
			/>
			<input
				className='addTask-input'
				value={task.description}
				onChange={e => setTask({ ...task, description: e.target.value })}
				type='text'
				placeholder='Описание задачи'
			/>
			<input
				className='addTask-input'
				value={task.dayForTheWeek}
				onChange={e => setTask({ ...task, dayForTheWeek: e.target.value })}
				type='text'
				placeholder='День недели'
			/>
			<input
				className='addTask-input'
				value={task.weight}
				onChange={e => setTask({ ...task, weight: e.target.value })}
				type='text'
				placeholder='Ценность задачи'
			/>
			<button onClick={addTask}>Добавить</button>
		</form>
	);
};

export default TaskForm;