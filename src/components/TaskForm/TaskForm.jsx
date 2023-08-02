import React, {useState} from 'react';

const TaskForm = ({create}) => {
	const [task, setTask] = useState({title: '', description: '', dayForTheWeek: '', weight: '', isDone: false,})
	
	const addTask = (e) => {
		e.preventDefault()
		const newTask = {
			...task, id: Date.now()
		}
		create(newTask);
		setTask({ title: '', description: '', dayForTheWeek: '', weight: 0, isDone: false, })	
	}

	const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Отложенные'];


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
				value={task.weight}
				onChange={e => setTask({ ...task, weight: Number(e.target.value) })}
				type='text'
				placeholder='Ценность задачи'
			/>
			<select
				value={task.dayForTheWeek}
				onChange={e => setTask({ ...task, dayForTheWeek: e.target.value })}
			>
				<option disabled value="">День недели</option>
				{days.map(day =>
					<option
						key={Math.random()}
						value={day}>
						{day}
					</option>)}
			</select>
			<button onClick={addTask}>Добавить</button>
		</form>
	);
};

export default TaskForm;