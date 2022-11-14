import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const GridItem = (props) => (
	<div className="grid__flex">
		<h2>{props.title}</h2>
		<img
			className="grid__img"
			src={props.image}
			onClick={() =>
				console.log({
					id: props.id,
					title: props.title,
					description: props.description,
				})
			}
			alt={props.title}
		/>
	</div>
);

class App extends Component {
	state = {
		error: null,
		isLoaded: false,
		items: [],
	};

	getAnime = async (query, variables) => {
		try {
			const response = await axios.post("https://graphql.anilist.co", {
				query,
				variables,
			});

			console.log(response.data);

			this.setState(() => ({
				isLoaded: true,
				items: response.data.data.Page.media,
			}));
		} catch (error) {
			this.setState(() => ({ error }));
		}
	};

	componentDidMount() {
		const query = `
  query($search: String){
    Page {
      media(search: $search, type: ANIME, sort: POPULARITY_DESC, isAdult: false,) {
        id
				idMal
				description(asHtml: false)
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }
  `;

		// Taking out the "//" and changing the string in search you will have returned the anime equivalent to this search.
		const variables = {
			//search: "spy family",
		};
		this.getAnime(query, variables);
	}

	render() {
		const { error, isLoaded, items } = this.state;

		if (error) {
			return <div>{error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="grid">
					{items.map((item) => (
						<GridItem
							key={item.id}
							image={item.coverImage.large}
							title={item.title.english}
							id={item.id}
							description={item.description}
						/>
					))}
				</div>
			);
		}
	}
}

export default App;
