import React, {useState} from 'react';

const TaskForm = ({create, initialState}) => {
	const [task, setTask] = useState(initialState)
	const addTask = (e) => {
		e.preventDefault()
		const newTask = {
			...task, id: Date.now()
		}
		create(newTask);
		setTask(initialState)	
	}

	const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Отложенные'];
	const handleInputChange = (e) => {
		setTask((prev) => ({...prev, [e.target.name]: e.target.value}))
	}
	const handleInputNumberChange = (e) => {
		//eslint-disable-next-line
		let regexp = /[a-zа-яё.,_?\[\/\\\|\{\}\[\]!@#$%^&*\(\)-+'";:~`<>]/gi;
		let value = e.target.value;
		value = value.replace(regexp, '')
		if (value > 10) value = '10';
		value = value.substr(0, 2)
		setTask((prev) => ({...prev, [e.target.name]:  Number(value)}))
	}

	return (
		<form>
			<input
				className='addTask-input'
				value={task.title}
				name='title'
				onChange={handleInputChange}
				type='text'
				placeholder='Название задачи'
			/>
			<input
				className='addTask-input'
				value={task.description}
				name='description'
				onChange={handleInputChange}
				type='text'
				placeholder='Описание задачи'
			/>
			<input
				className='addTask-input'
				value={task.weight}
				name='weight'
				onChange={handleInputNumberChange}
				type='text'
				placeholder='Ценность задачи'
			/>
			<select
				value={task.dayForTheWeek}
				name='dayForTheWeek'
				onChange={handleInputChange}
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