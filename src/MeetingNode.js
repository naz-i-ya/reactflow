import React, { useEffect, useState } from 'react';
import { Handle } from 'react-flow-renderer';
import Meeting from './components/Meeting';


 const MeetingNode = ({ data, selected }) => {
	useEffect(() => {
		if (selected) console.log("I've been selected!");
	}, [selected]);

	const [showMeeting, setShowMeeting] = useState(false)

	const handleClick = (event) => {
		console.log('Button clicked.');
		setShowMeeting(!showMeeting);
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
					alignItems: 'center'
				}}
			>
				{data.label}
                <p className="text-primary">Click here to attend meeting </p>
				<button onClick={handleClick}
                 type="button" class="btn btn-outline-info">Meeting</button>
			</div>
			<Handle type="source" position="bottom" />

			{showMeeting && <Meeting/>}
		</div>
	);
};
export default MeetingNode