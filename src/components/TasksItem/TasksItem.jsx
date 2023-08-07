import React from 'react';

const TasksItem = ({ day, tasks, deleteTask, toggleTask, editTask, postponeTask }) => {
	let tasksList = tasks.filter((task) => (task.dayForTheWeek.toLowerCase() === day.toLowerCase()));
	
	return (
		<>
			{Boolean(tasksList.length) && tasksList.map((task) => (
				<div key={task.id} className='task'>
					{task.isDone === false
						?
						(<span
							className='task-active'
							onClick={e => { toggleTask(task.id)}}>
							{`${tasksList.indexOf(task) + 1}. ${task.title}`}
						</span>)
						:
						(<span
							className='task-done'
							onClick={e => { toggleTask(task.id)}}>
							{`${tasksList.indexOf(task) + 1}. ${task.title}`}
						</span>)}
					<div className='btn-wrapper'>
						<button
							className='edit-btn'
							onClick={e => {editTask(task.id) }}>
							Ред
						</button>
						<button
							className='postpone-btn'
							onClick={(e) => {postponeTask(task.id) }}>
							Отлож.
						</button>
						<button
							className='delete-btn'
							onClick={(e) => {deleteTask(task) }}>
							Удал.
						</button>
					</div>
				</div>
			))
			}
		</>
	)
};


export default TasksItem;
	
