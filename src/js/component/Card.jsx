import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class Card extends React.Component {
	constructor() {
		super();
		this.state = [
			{
				name: "",
				gender: "",
				hairColor: "",
				eyeColor: ""
			}
		];
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.demo.map((item, index) => {
						<div className="card" key={index}>
							<img
								src="http://placehold.it/500x325"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">
									{this.state.name}
								</h5>
								<p className="card-text">
									Some quick example text to build on the card
									title and make up the bulk of the cards
									content.
								</p>
								<Link
									to="/learnmore"
									className="btn btn-primary">
									Learn More
								</Link>
							</div>
						</div>;
					});
				}}
			</Context.Consumer>
		);
	}
}
