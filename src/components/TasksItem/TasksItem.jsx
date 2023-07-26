import React from 'react';

const TasksItem = ({ tasksList, deleteTask, toggleTask }) => {

	
	return (
		<>
			{Boolean(tasksList.length) && tasksList.map((task, index) => (
				<div key={task.id} className='task' onClick={e => { toggleTask(task.id) }}  >
						{task.isDone === false
							?
							(<span className='task-active'>{`${tasksList.indexOf(task) + 1}. ${task.title}`}</span>)
							:
							(<span className='task-done'>{`${tasksList.indexOf(task) + 1}. ${task.title}`}</span>)}
							<button className='delete-btn' onClick={(e) => { e.stopPropagation(); deleteTask(task) }}>Удалить</button>
				</div>
			))
			}
		</>
		
	);
};

export default TasksItem;
	
