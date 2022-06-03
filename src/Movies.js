import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React from 'react'

const moviesDataSet = [
	{
		id: 1,
		title: 'Interestellar'
	},
	{
		id: 2,
		title: 'Finding Nemo'
	},
	{
		id: 3,
		title: 'Lilo & Stitch'
	}
];


function Movies(){

	const[movies, setMovies] = React.useState(moviesDataSet);

	const remove = (id) => {
		let moviesUpdated = movies.filter( (m) => m.id !== id)
		setMovies(moviesUpdated);
	};

    return (
		<>
		<div className="col">
			<h1 className="text-center">Movies App</h1>
			<div className="row">
				<ul className="list-group">
					{
						movies.map( (movie) => {
							const {id, title} = movie;

							return (
								<li key={id} className="list-group-item d-flex justify-content-between align-items-center">
									{id}: {title}
									<div >
										<button className="btn btn-danger"
												onClick={() => remove(id)}>
											Remove
										</button>
									</div>
								</li>
							)
						})
					}
				</ul>
				<button className="btn btn-primary"
						onClick={() => setMovies([])}>
					Clear Movie List
				</button>
			</div>
		</div>
		</>
    )
};

export default Movies;