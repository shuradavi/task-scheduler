import React, { useState } from 'react';
import { days, initialState } from '../../initialValues';

const TaskForm = ({ create }) => {

	const [task, setTask] = useState(initialState)
	const addTask = (e) => {
		const newTask = {
			...task, id: Date.now()
		}
		create(newTask);
		setTask(initialState)	
	}
	const handleInputChange = (e) => {
		setTask((prev) => ({...prev, [e.target.name]: e.target.value}))
	}
	const handleInputNumberChange = (e) => {
		let value = e.target.value;
		if (value > 10) value = '10';
		value = value.substr(0, 2)
		setTask((prev) => ({...prev, [e.target.name]:  Number(value)}))
	}

	return (
		<>
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
				type='number'
				value={task.weight}
				name='weight'
				onChange={handleInputNumberChange}
				min='1'
				max='10'
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
		</>
	);
};

export default TaskForm;