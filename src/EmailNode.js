import React, { useEffect, useState } from 'react';
import { Handle } from 'react-flow-renderer';
import Email from './components/Email';

 const EmailNode = ({ data, selected }) => {
	useEffect(() => {
		if (selected) console.log("I've been selected!");
	}, [selected]);

	const [showEmail, setShowEmail] = useState(false);

	const handleClick = (event) => {
		setShowEmail(!showEmail);
		console.log('Button clicked.');
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
				<p className="text-success">User can send mail by clicking Email button </p>
				<button onClick={handleClick} type="button" class="btn btn-outline-primary">
					Email</button>
			</div>
			<Handle type="source" position="bottom" />
			{showEmail && <Email/>}
		</div>
	);
};
export default EmailNode