import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class Card extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.characters.map((item, index) => {
						return (
							<div className="col-3" key={index}>
								<div className="card w-100 p-3 h-100 p-3">
									<img
										src="http://placehold.it/500x325"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											{item.name}
										</h5>
										<p className="card-text">
											Gender:
											{" " + item.gender}
											<br />
											<br />
											Hair Color:
											{" " + item.hair_color}
											<br />
											<br />
											Eye Color:
											{" " + item.eye_color}
										</p>

										<Link to={"/single/" + index}>
											<a className="btn btn-outline-primary">
												Learn More
											</a>
										</Link>
										<button
											className="float-right"
											onClick={() =>
												actions.favorites(item.name)
											}>
											<i className="fas fa-heart" />
										</button>
									</div>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
