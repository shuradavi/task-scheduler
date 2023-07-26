import React from 'react';

const Results = ({ tasks }) => {
	let closeSum = 0;
	if (tasks) {
		closeSum = tasks.filter(task => task.isDone === true).
			reduce((acc, task) => acc + task.weight, 0)
	}

	return (
		<div className='results'>
		Итого: 
			<span>Полезные баллы: {closeSum}</span>
			<span>Штрафные баллы: 0</span>
		</div>
	);
};

export default Results;