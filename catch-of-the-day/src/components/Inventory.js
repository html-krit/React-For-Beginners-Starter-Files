import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

	constructor() {
		super();
		this.renderInventory = this.renderInventory.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e, key) {
		const fish = this.props.fishes[key];
		//take a copy
		const updateFish = {
			...fish,
			[e.target.name]: e.target.value
		};

		this.props.updateFish(key, updateFish);
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];
		return (
			<div className="fish-edit" key={key}>
				<input name="name" type="text" placeholder="Fish Name" value={fish.name}
				       onChange={(e) => this.handleChange(e, key)}
				/>
				<input name="price" type="text" placeholder="Fish Price" value={fish.price}
				       onChange={(e) => this.handleChange(e, key)}
				/>
				<select name="status" placeholder="Fish Status" value={fish.status}
				        onChange={(e) => this.handleChange(e, key)}
				>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea name="desc" placeholder="Fish Desc" value={fish.desc}
				          onChange={(e) => this.handleChange(e, key)}
				></textarea>
				<input name="image" type="text" placeholder="Fish Image" value={fish.image}
				       onChange={(e) => this.handleChange(e, key)}
				/>
				<button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={this.props.addFish}/>
				<button onClick={this.props.loadSamples}>Load sample Fishes</button>
			</div>
		);
	}
}

export default Inventory;