import React from 'react';
import './style.css';

function Card(props) {
	return (
		<div className="text-center">
			<div className="card" style={{ width: '18rem' }}>
				<img src={props.image} className="card-img-top" alt={props.name} />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.occupation}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
				<span className="remove">𝘅</span>
			</div>
		</div>
	);
}

export default Card;
