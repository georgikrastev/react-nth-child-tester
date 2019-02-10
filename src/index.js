import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Input />

				<Tiles />
			</div>
		);
	}
}

class Input extends React.Component {
	unhighlight() {
		Array.from(document.querySelectorAll('.tile')).forEach(tile => tile.classList.remove('is--highlighted'));
	}

	highlight(e) {
		let elements;
		let selectorString = e.target.value;

		try {
			document.querySelectorAll(`.tile:nth-child(${selectorString})`);
		}

		catch(err) {
			this.unhighlight();

			return;
		}

		if ( selectorString !== '' ) {
			elements = document.querySelectorAll(`.tile:nth-child(${selectorString})`);
			
			this.unhighlight();

			Array.from(elements).forEach(element => element.classList.add('is--highlighted'));
		} else {
			this.unhighlight();
		}
	}

	render() {
		return (
			<input type="text" className="field" placeholder="ex.:3n+1" onKeyUp={(e) => {this.highlight(e)}} />
		);
	}
}

class Tile extends React.Component {
	render() {
		return (
			<div className="tile">
				<div className="tile__inner" data-index={this.props.index}></div>
			</div>
		);
	}
}

class Tiles extends React.Component {
	render() {
		let tiles = [];

		for ( let i = 0; i < 40; i++ ) {
			tiles.push(<Tile key={i} index={i+1} />);
		}

		return (
			<div className="tiles">
				{tiles}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
