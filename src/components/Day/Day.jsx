import React from 'react';
import TasksItem from '../TasksItem/TasksItem';

const Day = ({ props, day, deleteTask, toggleTask, editTask, postponeTask }) => {

	let sortedTasks = props.filter((obj) => (obj.dayForTheWeek.toLowerCase() === day.toLowerCase()));

	return (
		<div className='day-container'>
			<div className='day'>{day}</div>
			<TasksItem tasksList={sortedTasks} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} />
		</div>
	);
};

export default Day;
