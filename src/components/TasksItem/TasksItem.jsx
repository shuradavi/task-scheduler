import React from 'react';

const TasksItem = ({ props }) => {
	
	
	return (
		<>
			{Boolean(props.length) && props.map((task, index) => (
				<div key={task.id}>
					<div className='task'>
						{`${props.indexOf(task) + 1}. ${task.title}`}
						<span className='delete-btn'>
							<button>Удалить</button>
						</span>
					</div>
				</div>
		))
			}
		</>
		
	);
};

export default TasksItem;
	
