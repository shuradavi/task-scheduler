import React from 'react';
import TasksItem from '../TasksItem/TasksItem';

const Day = ({ props, day, deleteTask }) => {

	let sortedTasks = props.filter((obj) => (obj.dayForTheWeek === day));

	return (
		<div className='day-container'>
			<div className='day'>{day}</div>
			<TasksItem tasksList={sortedTasks} deleteTask={deleteTask} />
		</div>
	);
};

export default Day;
