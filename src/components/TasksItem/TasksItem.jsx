import React from 'react';

const TasksItem = ({day, tasks, deleteTask, toggleTask, editTask, postponeTask }) => {
	let tasksList = tasks.filter((task) => (task.dayForTheWeek.toLowerCase() === day.toLowerCase()));	
	if (day !== 'Отложенные') {
		return (
			<>
				{Boolean(tasksList.length) && tasksList.map((task) => (
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
								onClick={e => { e.stopPropagation(); editTask(task.id) }}>
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
		
		)
	} else {
		return (
			<>
			{Boolean(tasksList.length) && tasksList.map((task, index) => (
				<div key={task.id} className='task'>
						{!task.isDone
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
								className='delete-btn'
								onClick={(e) => { e.stopPropagation(); deleteTask(task) }}>
								Удал.
							</button>
						</div>
				</div>
			))
			}
		</>
		)
	}
};

export default TasksItem;
	
