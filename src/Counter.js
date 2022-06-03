import React, {useState, useEffect} from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

function Counter() {
	const [number, setNumber] = useState(0);

	useEffect( () => {
		if(number > 0 || number < 0){
			document.title = `Counter: ${number}`;
		}
	});

	const incrementClickHandler = () => {
		setNumber(number+1);
	};

	const decrementClickHandler = () => {
		setNumber(number-1);
	};

	return (
		<article>
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
		</article>
	);
};

export default Counter;
