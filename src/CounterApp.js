import React, {useState} from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

function CounterApp() {
	const [number, setNumber] = useState(0);

	const incrementClickHandler = () => {
		setNumber(number+1)
	};

	const decrementClickHandler = () => {
		setNumber(number-1)
	};

	return (
		<div id='app' className='container'>
			<h1 className='text-center'>Counter App</h1>
			<div className="col">
				<div>
					<p className='fs-1 text'>{number}</p>
					<button type='button' className="btn-primary"
						onClick={incrementClickHandler}>+</button>
					<button type='button' className="btn-danger"
					onClick={decrementClickHandler}>-</button>
				</div>
			</div>
			<br />
			<p className='fst-italic'>Click on '+' to increment and '-' to decrement</p>
		</div>
	);
}

export default CounterApp;
