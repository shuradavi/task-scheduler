import React from 'react';
import TasksItem from '../TasksItem/TasksItem';

const TasksList = ({ props }) => {
	console.log(props);
	const data = props.reduce((result, obj, index) => {
		result.push(obj.dayForTheWeek)
		return result
	}, [])

	console.log(data);
	// let result = [[{id: 'zxcv1123',
	// 		title: 'Забрать доставку',
	// 		description: 'Пункт WB ул. Столичная д.1, Чехол для телефона КОД 123321',
	// 		isDone: 'false',
	// 		dayForTheWeek: 'Понедельник',
	// 		weight: 1,}, {id: 'zxcv11111',
	// 		title: 'Заказать пиццу',
	// 		description: 'Joys Pizza',
	// 		isDone: 'false',
	// 		dayForTheWeek: 'Понедельник',
	// 		weight: 1,}], [], [], [], [], [{id: 'zxcv11333',
	// 		title: 'Собрать вещи',
	// 		description: 'Щетка, паста, шорты, футболка',
	// 		isDone: 'false',
	// 		dayForTheWeek: 'Пятница',
	// 		weight: 1,}], []]
	
	return (
		<div className='week-container'>
			{/* <TasksItem tasks={ data[0] } day='Понедельник' />
			<TasksItem tasks={ data[1] } day='Вторник'/>
			<TasksItem tasks={ data[2] } day='Среда'/>
			<TasksItem tasks={ data[3] } day='Четверг'/>
			<TasksItem tasks={ data[4] } day='Пятница'/>
			<TasksItem tasks={ data[5] } day='Суббота'/>
			<TasksItem tasks={ data[6] } day='Воскренье'/> */}
		</div>
	);
};

export default TasksList;