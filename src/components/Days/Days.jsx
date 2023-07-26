import React from 'react';
import Day from '../Day/Day';

const TasksList = ({ props, deleteTask, toggleTask }) => {

	
	return (
		<div className='week-container'>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} day='Понедельник' />
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} day='Вторник'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} day='Среда'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} day='Четверг'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} day='Пятница'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} day='Суббота'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} day='Воскресенье'/>
		</div>
	);
};

export default TasksList;