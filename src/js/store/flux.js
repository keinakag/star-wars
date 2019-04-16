import React from "react";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [
				{
					name: "Han Solo",
					gender: "Male",
					hairColor: "Brown",
					eyeColor: "Blue",
					text:
						"Person 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
				},
				{
					name: "Luke Skywalker",
					gender: "Male",
					hairColor: "Yellow",
					eyeColor: "Brown",
					text:
						"Person 2 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				},
				{
					name: "Princess Leila",
					gender: "Female",
					hairColor: "Black",
					eyeColor: "Green",
					text:
						"Person 3 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, "
				},
				{
					name: "Gredo",
					gender: "Male",
					hairColor: "Green",
					eyeColor: "Black",
					text:
						"Person 4 Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, "
				},
				{
					name: "ChewBacca",
					gender: "Male",
					hairColor: "Brown",
					eyeColor: "Hazel",
					text:
						"Person 5 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				},
				{
					name: "C-3PO",
					gender: "Male",
					hairColor: "black",
					eyeColor: "Yellow",
					text:
						"Person 6 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
				}
			],

			planets: [
				{
					name: "Tatooine",
					orbital_period: "304",
					population: "120000",
					climate: "Arid",
					text:
						"Person 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
				},
				{
					name: "Hoth",
					orbital_period: "109",
					population: "70000000",
					climate: "Cold",
					text:
						"Person 2 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				},
				{
					name: "Tatooine",
					orbital_period: "304",
					population: "120000",
					climate: "Arid",
					text:
						"Person 3 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, "
				},
				{
					name: "Naboo",
					orbital_period: "867",
					population: "4000",
					climate: "Temperate",
					text:
						"Person 4 Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, "
				},
				{
					name: "Coruscant",
					orbital_period: "304",
					population: "2480000000",
					climate: "Temperate",
					text:
						"Person 5 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				},
				{
					name: "Kashyyyk",
					orbital_period: "14",
					population: "6900000",
					climate: "Temperate",
					text:
						"Person 6 Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'"
				}
			],

			favoritesArray: []
		},
		actions: {
			changeCard: item => {
				//get the store
				const store = getStore();

				const demo = store.characters.map(item => {
					return item;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			favorites: (name, index) => {
				const store = getStore();

				const demo = store.favoritesArray.push(name);

				setStore({ demo: demo });
			},

			deleteFav: i => {
				const store = getStore();

				const demo = store.favoritesArray.splice(i, 1);

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
