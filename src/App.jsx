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
		// I need to review thissssssss
		const { cats, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredCats = cats.filter((cat) => {
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
