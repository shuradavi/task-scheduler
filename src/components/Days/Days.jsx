import React from 'react';
import Day from '../Day/Day';

const TasksList = ({ props, deleteTask, toggleTask, changeTask }) => {

	
	return (
		<div className='week-container'>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} changeTask={changeTask} day='Понедельник' />
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} changeTask={changeTask} day='Вторник'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} changeTask={changeTask} day='Среда'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} changeTask={changeTask} day='Четверг'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} changeTask={changeTask} day='Пятница'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} changeTask={changeTask} day='Суббота'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} changeTask={changeTask} day='Воскресенье'/>
		</div>
	);
};

export default TasksList;