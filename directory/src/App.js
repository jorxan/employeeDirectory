import React, { Component } from 'react';
import Card from './components/Card/Card';
import Wrapper from './components/Wrapper/index';
import Employee from './employee.json';
import './App.css';
import Header from './components/Header/Header';

class App extends Component {
	state = {
		Employee
	};
	render() {
		return (
			<div>
				<Header />
				<Wrapper>
					<div className="Container text-center">
						{this.state.Employee.map((Employee) => (
							<Card
								removeFriend={this.removeEmployee}
								id={Employee.id}
								key={Employee.id}
								name={Employee.name}
								image={Employee.image}
								occupation={Employee.occupation}
								location={Employee.location}
							/>
						))}
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default App;
