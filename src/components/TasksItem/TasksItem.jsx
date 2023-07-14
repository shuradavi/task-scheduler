import React from 'react';

const TasksItem = ({ tasksList, deleteTask }) => {
	
	
	return (
		<>
			{Boolean(tasksList.length) && tasksList.map((task, index) => (
				<div key={task.id}>
					<div className='task'>
						{`${tasksList.indexOf(task) + 1}. ${task.title}`}
						<span className='delete-btn'>
							<button onClick={() => deleteTask(task)}>Удалить</button>
						</span>
					</div>
				</div>
		))
			}
		</>
		
	);
};

export default TasksItem;
	
