import React, { useEffect, useState } from 'react';
import { Handle } from 'react-flow-renderer';
import Reminder from './components/Reminder';


 const ReminderNode = ({ data, selected }) => {
	useEffect(() => {
		if (selected) console.log("I've been selected!");
	}, [selected]);

	const [showReminder, setShowReminder] = useState(false);

	const handleClick = (event) => {
		console.log('Button clicked.');
		setShowReminder(!showReminder);
		event.stopPropagation();
	};

	

	return (
		<div
			style={{
				border: '1px solid blue',
				textAlign: 'center',
				padding: 5,
				fontSize: '0.7rem',
				borderColor: selected ? 'green' : 'blue'
			}}
		>
			<Handle type="target" position="top" />
			<div
				style={{
  
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
                    
				}}
			>
				{data.label}
                <p className="text-warning">Reminder box</p>
				<button  onClick={handleClick}  type="button"
                 class="btn btn-outline-danger" >
                    Reminder</button>  
			</div>
			<Handle type="source" position="bottom" />
			{showReminder && <Reminder/>}
		</div>
	);
};
export default ReminderNode