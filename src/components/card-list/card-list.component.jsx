import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
	render() {
		const { cats } = this.props;
		return (
			<div className="card-list">
				{cats.map((cat) => {
					const { name, address, id } = cat;
					return <Card catName={name} catAddress={address} catId={id} />;
				})}
			</div>
		);
	}
}

export default CardList;
