var React = require('react');

var ToDoList = React.createClass({
	render: function() {
		var createItem = function(item) {
			return <li key="item.id">{item.text}</li>
		}
		return <li> <ul>{this.props.items.map(createItem)} </ul> </li>
	}
});




var ToDoApp = React.createClass({
	getInitialState: function() {
		items: [],
		text: ""
	},
	componentDidMount: function() {

	},
	componentWillUnmount: function() {

	},
	handleAddItem: function(item){

	},
	handleRemoveItem: function(index){

	},
	_onChange: function() {

	},
	render: function() {
		return (
			<div>	

			</div>

		)
	}


})