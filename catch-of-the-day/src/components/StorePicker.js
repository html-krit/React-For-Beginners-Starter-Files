import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{

	//constructor(){
	//	super();
	//	this.goToStore = this.goToStore.bind(this);
	//}

	goToStore(event) {
		event.preventDefault();
		console.log(this.storeInput.value);
	}

	render(){
		return ( //Возвращать только 1 узел и все внутри него
			<form className="store-selector" onSubmit={(e) => {this.goToStore(e)}}>
				{/* комменты так */}
				<h2>Please enater a Store</h2>
				<input type="text" required placeholder="Store Name"
				       defaultValue={getFunName()}
				ref={(input)=>{this.storeInput = input}}/>
				<button type="submit">Visit Store -></button>
			</form>
		);
	}
}

export default StorePicker;