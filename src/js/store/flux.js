const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [
				{
					name: "Person 1",
					gender: "P1 Gender",
					hairColor: "P1 Hair",
					eyeColor: "P1 Eyes",
					text:
						"Person 1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
				},
				{
					name: "Person 2",
					gender: "P2 Gender",
					hairColor: "P2 Hair",
					eyeColor: "P2 Eyes",
					text:
						"Person 2 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
				},
				{
					name: "Person 3",
					gender: "P3 Gender",
					hairColor: "P3 Hair",
					eyeColor: "P3 Eyes",
					text:
						"Person 3 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, "
				},
				{
					name: "Person 4",
					gender: "P4 Gender",
					hairColor: "P4 Hair",
					eyeColor: "P4 Eyes",
					text:
						"Person 4 Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, "
				},
				{
					name: "Person 5",
					gender: "P5 Gender",
					hairColor: "P5 Hair",
					eyeColor: "P5 Eyes",
					text:
						"Person 5 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				},
				{
					name: "Person 6",
					gender: "P6 Gender",
					hairColor: "P6 Hair",
					eyeColor: "P6 Eyes",
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

			favorites: name => {
				const store = getStore();
				let demo = [];
				//checks if name already exists in array
				if (store.favoritesArray.includes(name)) {
					//true leaves array the same
					demo = store.favoritesArray;
				} else {
					//false pushes new favorite to array
					demo = store.favoritesArray.push(name);
				}

				setStore({ favorites: demo });
			},

			//not functional
			remove: name => {
				const store = getStore();
				const favs = store.favoritesArray;
				//filters names not equal to name clicked on
				const demo = favs.filter(function(ele) {
					return ele !== name;
				});

				setStore({ favorites: demo });
			}
		}
	};
};

export default getState;
