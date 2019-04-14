import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Navbar extends React.Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://cdn.iconscout.com/icon/free/png-256/starwars-5-555964.png"
							style={{ width: "60px" }}
						/>
					</span>
				</Link>
				<div className="dropdown" onClick={this.toggleOpen}>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Favorites ({store.favoritesArray.length})
								</button>
							);
						}}
					</Context.Consumer>
					<div
						className={menuClass}
						aria-labelledby="dropdownMenuButton">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.favoritesArray.map(
									(item, index) => {
										return (
											<a
												key={index}
												className="dropdown-item"
												href="#">
												<div className="row">
													<div className="col">
														<Link
															to={
																"/single/" +
																index
															}>
															{item}
														</Link>
													</div>
													<div className="col">
														<i
															className="fas fa-trash"
															onClick={() =>
																actions.remove(
																	item.name
																)
															}
														/>
													</div>
												</div>
											</a>
										);
									}
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</nav>
		);
	}
}
