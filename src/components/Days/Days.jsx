import React from 'react';
import Day from '../Day/Day';

const TasksList = ({ props, deleteTask }) => {

	
	return (
		<div className='week-container'>
			<Day props={props} deleteTask={deleteTask} day='Понедельник' />
			<Day props={props} deleteTask={deleteTask} day='Вторник'/>
			<Day props={props} deleteTask={deleteTask} day='Среда'/>
			<Day props={props} deleteTask={deleteTask} day='Четверг'/>
			<Day props={props} deleteTask={deleteTask} day='Пятница'/>
			<Day props={props} deleteTask={deleteTask} day='Суббота'/>
			<Day props={props} deleteTask={deleteTask} day='Воскресенье'/>
		</div>
	);
};

export default TasksList;