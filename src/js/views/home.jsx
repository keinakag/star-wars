import React from "react";

import Card from "../component/Card.jsx";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Characters</h1>
				<div className="row">
					<Card />
				</div>
			</div>
		);
	}
}
