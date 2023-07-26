import React from 'react';

const Results = ({ tasks }) => {
	let closeSum = 0;
	let postponeSum = 0;
	if (tasks) {
		closeSum = tasks.filter(task => task.isDone === true)
			.reduce((acc, task) => acc + task.weight, 0)
		postponeSum = tasks.filter(task => task.dayForTheWeek.toLowerCase() === 'отложенные')
			.reduce((acc, task) => acc + task.weight, 0)
	}
	

	return (
		<div className='results'>
		Итого: 
			<span>Полезные баллы: {closeSum}</span>
			<span>Штрафные баллы: {postponeSum}</span>
		</div>
	);
};

export default Results;