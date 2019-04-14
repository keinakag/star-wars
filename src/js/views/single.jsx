import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Single extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store }) => {
						return (
							<div>
								<div className="row">
									<div className="col">
										<img src="https://tinyurl.com/y2ebxe7y" />
									</div>
									<div className="col">
										<h1>
											{
												store.characters[
													this.props.match.params
														.theid
												].name
											}
										</h1>
										<h5>
											{
												store.characters[
													this.props.match.params
														.theid
												].text
											}
										</h5>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>

				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
