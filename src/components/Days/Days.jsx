import React from 'react';
import Day from '../Day/Day';

const TasksList = ({ props }) => {

	
	return (
		<div className='week-container'>
			<Day props={props} day='Понедельник' />
			<Day props={props} day='Вторник'/>
			<Day props={props} day='Среда'/>
			<Day props={props} day='Четверг'/>
			<Day props={props} day='Пятница'/>
			<Day props={props} day='Суббота'/>
			<Day props={props} day='Воскресенье'/>
		</div>
	);
};

export default TasksList;