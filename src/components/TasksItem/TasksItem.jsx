import React from 'react';

const TasksItem = ({ tasksList, deleteTask, toggleTask, changeTask, postponeTask }) => {

	
	return (
		<>
			{Boolean(tasksList.length) && tasksList.map((task, index) => (
				<div key={task.id} className='task' onClick={e => { toggleTask(task.id) }}  >
						{task.isDone === false
							?
							(<span className='task-active'>{`${tasksList.indexOf(task) + 1}. ${task.title}`}</span>)
							:
							(<span className='task-done'>{`${tasksList.indexOf(task) + 1}. ${task.title}`}</span>)}
					<button className='postpone-btn' onClick={(e) => { e.stopPropagation(); postponeTask(task.id)}}>POSTPONE</button>
					<button className='delete-btnpost' onClick={(e) => { e.stopPropagation(); deleteTask(task) }}>Удалить</button>
				</div>
			))
			}
		</>
		
	);
};

export default TasksItem;
	
