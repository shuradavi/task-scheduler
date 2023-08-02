import React from 'react';

const TasksItem = ({ tasksList, deleteTask, toggleTask, editTask, postponeTask }) => {

	
	return (
		<>
			{Boolean(tasksList.length) && tasksList.map((task, index) => (
				<div key={task.id} className='task'>
						{task.isDone === false
							?
						(<span
							className='task-active'
							onClick={e => { toggleTask(task.id); e.stopPropagation() }}>
							{`${tasksList.indexOf(task) + 1}. ${task.title}`}
						</span>)
							:
						(<span
							className='task-done'
							onClick={e => { toggleTask(task.id); e.stopPropagation() }}>
							{`${tasksList.indexOf(task) + 1}. ${task.title}`}
						</span>)}
						<div className='btn-wrapper'>
							<button
							className='edit-btn'
							onClick={e => { e.stopPropagation();  editTask(task.id)  }}>
								Ред
							</button>
							<button
								className='postpone-btn'
								onClick={(e) => { e.stopPropagation(); postponeTask(task.id) }}
								>Отлож.
							</button>
							<button
								className='delete-btn'
								onClick={(e) => { e.stopPropagation(); deleteTask(task) }}>
								Удал.
							</button>
						</div>
					
				</div>
			))
			}
		</>
		
	);
};

export default TasksItem;
	
