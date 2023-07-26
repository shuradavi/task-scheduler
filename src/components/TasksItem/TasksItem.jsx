import React from 'react';

const TasksItem = ({ tasksList, deleteTask, toggleTask, changeTask }) => {

	
	return (
		<>
			{Boolean(tasksList.length) && tasksList.map((task, index) => (
				<div key={task.id} className='task' onClick={e => { toggleTask(task.id) }}  >
						{task.isDone === false
							?
							(<span className='task-active'>{`${tasksList.indexOf(task) + 1}. ${task.title}`}</span>)
							:
							(<span className='task-done'>{`${tasksList.indexOf(task) + 1}. ${task.title}`}</span>)}
						<button className='edit-btn' onClick={(e) => { e.stopPropagation(); changeTask(task.id) }}>Редактировать</button>
						<button className='delete-btn' onClick={(e) => { e.stopPropagation(); deleteTask(task) }}>Удалить</button>
				</div>
			))
			}
		</>
		
	);
};

export default TasksItem;
	
