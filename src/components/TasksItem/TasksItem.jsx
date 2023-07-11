import React from 'react';

const TasksItem = ({ tasks, day }) => {

	return (
		<div className='day-container'>
			{day}
			{
				Boolean(tasks.length) && tasks.map((t, index) => (
					<div key={t.id}>
						<div className='day-content'>
							<div className='task'>
								{`${index + 1}. ${t.title}`}
								<span className='delete-btn'>
									<button>Удалить</button>
								</span>
							</div>
						</div>
					</div>
				))
			}
		</div>	
	);
}


			
export default TasksItem;
	
