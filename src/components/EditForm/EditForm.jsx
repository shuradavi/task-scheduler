import React from 'react';

const EditForm = ({ changes, setChanges, onChangeHandler }) => {
	const applyChanges = (e) => {
		e.preventDefault()
		const newValue = {
			...changes
		}
		onChangeHandler(newValue)
	}

	return (
		<form>
			<input
				className='addTask-input'
				value={changes.title}
				onChange={e => setChanges({ ...changes, title: e.target.value })}
				type='text'
				placeholder='Название задачи'
			/>
			<input
				className='addTask-input'
				value={changes.description}
				onChange={e => setChanges({ ...changes, description: e.target.value })}
				type='text'
				placeholder='Описание задачи'
			/>
			<input
				className='addTask-input'
				value={changes.dayForTheWeek}
				onChange={e => setChanges({ ...changes, dayForTheWeek: e.target.value.trim() })}
				type='text'
				placeholder='День недели'
			/>
			<input
				className='addTask-input'
				value={changes.weight}
				onChange={e => setChanges({ ...changes, weight: e.target.value })}
				type='text'
				placeholder='Ценность задачи'
			/>
			<button onClick={(e) => applyChanges(e)} >Применить</button>
		</form>
	);
};

export default EditForm;