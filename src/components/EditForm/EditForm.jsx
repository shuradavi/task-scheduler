import React, {useState} from 'react';

const EditForm = ({ editedTask, setEditedTask, onChangeHandler }) => {
	const [editTaskValue, setEditTaskValue] = useState(editedTask);


	const applyChanges = (e) => {
		e.preventDefault()
		const newValue = {
			...editTaskValue
		}
		onChangeHandler(newValue)
	}
	const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Отложенные'];

	const handleInputChange = (e) => {
		setEditTaskValue((prev) => ({...prev, [e.target.name]: e.target.value}))
	}
	const handleInputNumberChange = (e) => {
		//eslint-disable-next-line
		let regexp = /[a-zа-яё.,_?\[\/\\\|\{\}\[\]!@#$%^&*\(\)-+'";:~`<>]/gi;
		let value = e.target.value;
		value = value.replace(regexp, '')
		if (value > 10) value = '10';
		value = value.substr(0, 2)
		setEditTaskValue((prev) => ({...prev, [e.target.name]: Number(value)}))
	}


	return (
		<form>
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
				type='text'
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
		</form>
	);
};

export default EditForm;