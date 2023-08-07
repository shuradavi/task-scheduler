import React, { useState } from 'react';
import { days } from '../../initialValues';

const EditForm = ({ editedTask, onChangeHandler }) => {
	const [editTaskValue, setEditTaskValue] = useState(editedTask);


	const applyChanges = (e) => {
		const newValue = {
			...editTaskValue
		}
		onChangeHandler(newValue)
	}
	

	const handleInputChange = (e) => {
		setEditTaskValue((prev) => ({...prev, [e.target.name]: e.target.value}))
	}
	const handleInputNumberChange = (e) => {
		let value = e.target.value;
		if (value > 10) value = '10';
		value = value.substr(0, 2)
		setEditTaskValue((prev) => ({...prev, [e.target.name]:  Number(value)}))
	}


	return (
		<>
			<input
				className='addTask-input'
				value={editTaskValue.title}
				name='title'
				onChange={handleInputChange}
				type='text'
				placeholder='Название задачи'
			/>
			<input
				className='addTask-input'
				value={editTaskValue.description}
				name='description'
				onChange={handleInputChange}
				type='text'
				placeholder='Описание задачи'
			/>
			<input
				className='addTask-input'
				value={editTaskValue.weight}
				name='weight'
				onChange={handleInputNumberChange}
				type='number'
				min='1'
				max='10'
				placeholder='Ценность задачи'
			/>
			<select
				value={editTaskValue.dayForTheWeek}
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
			<button onClick={(e) => applyChanges(e)} >Применить</button>
		</>
	);
};

export default EditForm;