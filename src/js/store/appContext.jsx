import React from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectStore = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			fetch("https://swapi.co/api/planets")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.planets = data.results;
					this.setState({ store });
				})

				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});

			fetch("https://swapi.co/api/people")
				.then(response => response.json())
				.then(data => {
					let { store } = this.state;
					store.characters = data.results;
					this.setState({ store });
					// console.log(data);
				})

				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default injectStore;
