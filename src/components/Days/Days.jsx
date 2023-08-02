import React from 'react';
import Day from '../Day/Day';

const TasksList = ({ props, deleteTask, toggleTask, editTask, postponeTask }) => {

	
	return (
		<div className='week-container'>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Понедельник' />
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Вторник'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Среда'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Четверг'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Пятница'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Суббота'/>
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Воскресенье' />
			<Day props={props} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} postponeTask={postponeTask} day='Отложенные' />
		</div>
	);
};

export default TasksList;