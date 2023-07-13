import React from 'react';
import TasksItem from '../TasksItem/TasksItem';

const Day = ({ props, day }) => {

	let sortedTasks = props.filter((obj) => (obj.dayForTheWeek === day));

	return (
		<div className='day-container'>
			{Boolean(sortedTasks.length) ? <div className='day'>{sortedTasks[0].dayForTheWeek}</div> : <div className='day'>{day}</div>}
			<TasksItem props={sortedTasks} />
		</div>
	);
};

export default Day;
