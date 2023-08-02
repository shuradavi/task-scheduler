import React from 'react';

const Postponed = ({ props, day, deleteTask, toggleTask, editTask, postponeTask }) => {
	let tasksList = props.filter((obj) => (obj.dayForTheWeek.toLowerCase() === day.toLowerCase()));
	return (
		<div className='postpone-wrapper'>
			<div className='postpone'>{day}</div>
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
								className='delete-btn'
								onClick={(e) => { e.stopPropagation(); deleteTask(task) }}>
								Удал.
							</button>
						</div>
				</div>
			))
			}
		</>
		</div>
	);
};

export default Postponed;