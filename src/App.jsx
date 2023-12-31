import { useState } from 'react';
import './App.css';

function App() {
	const [tip, setTip] = useState(0);

	const [percentage, setPercentage] = useState(10);
	const [friendPercentage, setFriendPercentage] = useState(10);
	function handleTipInput(e) {
		setTip(Number(e.target.value));
	}
	function handlePercentage(e) {
		setPercentage(Number(e.target.value));
	}
	function handleFriendPercentage(e) {
		setFriendPercentage(Number(e.target.value));
	}

	function handleReset() {
		setTip(0);
		setPercentage(10);
		setFriendPercentage(10);
	}

	return (
		<div>
			<BillAmount tip={tip} onInput={handleTipInput} />
			<TipPercent percentage={percentage} onPercentage={handlePercentage}>
				<span>How did you like the service? </span>
			</TipPercent>
			<TipPercent
				percentage={friendPercentage}
				onPercentage={handleFriendPercentage}
			>
				<span>How did your friend like the service? </span>
			</TipPercent>
			<Result
				tip={tip}
				percentage={percentage}
				friendPercentage={friendPercentage}
			/>
			<ResetBtn resetTip={handleReset} />
		</div>
	);
}

function BillAmount({ tip, onInput }) {
	return (
		<>
			<span>How much was the bill? </span>
			<input
				type="text"
				placeholder="Enter the amount"
				value={tip}
				onChange={onInput}
			/>
		</>
	);
}

function TipPercent({ percentage, onPercentage, children }) {
	return (
		<>
			<br></br>
			{children}
			<select value={percentage} onChange={onPercentage}>
				<option value={0}>Poor 0%</option>
				<option value={5}>Okay 5%</option>
				<option value={10}>Good 10%</option>
				<option value={20}>Excellent 20%</option>
			</select>
		</>
	);
}

function Result({ tip, percentage, friendPercentage }) {
	const myTip = Math.round((percentage / 100) * tip);
	const friendTip = Math.round((friendPercentage / 100) * tip);

	return (
		<div>
			You pay ${Math.round(tip + myTip + friendTip)} (${myTip} + $
			{friendTip} tip)
		</div>
	);
}

function ResetBtn({ resetTip }) {
	return <button onClick={resetTip}>Reset</button>;
}

export default App;
