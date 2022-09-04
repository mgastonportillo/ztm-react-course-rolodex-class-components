import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			cats: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(() => {
					return { cats: users };
				})
			);
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { cats, searchField } = this.state;
		const { onSearchChange } = this;

		const catsAll = [
			{
				id: 11,
				name: "Lily",
				address: { street: "Home", suite: "with Mum" },
			},
			...cats,
		];

		const filteredCats = catsAll.filter((cat) => {
			return cat.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<h1 className="app-title">Catto Rolodex</h1>
				<SearchBox
					onChange={onSearchChange}
					className="search-box"
					placeholder="search cats"
				/>
				<CardList cats={filteredCats} />
			</div>
		);
	}
}

export default App;
