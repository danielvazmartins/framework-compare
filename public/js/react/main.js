var ListItem = React.createClass({
	displayName: "ListItem",

	removeItem: function (e) {
		e.preventDefault();
		console.log("removeItem", e.target.id);
	},

	render: function () {
		var StyleImg = {
			width: "40px",
			height: "40px",
			margin: "10px"
		};
		var StyleIcon = {
			position: "absolute",
			right: "10px",
			top: "10px"
		};

		return React.createElement(
			"li",
			{ className: "list-group-item" },
			React.createElement(
				"a",
				{ href: this.props.href },
				React.createElement("img", { src: this.props.src, style: StyleImg }),
				this.props.children,
				React.createElement("span", { onClick: this.removeItem, id: this.props.id, className: "glyphicon glyphicon-remove text-right", style: StyleIcon })
			)
		);
	}
});

var List = React.createClass({
	displayName: "List",

	getInitialState: function () {
		return {
			notifications: []
		};
	},

	componentDidMount: function () {
		var _this = this;
		axios.get('/api/notifications').then(function (response) {
			_this.setState({
				notifications: response.data
			});
		});
	},

	render: function () {

		var noteItem = this.state.notifications.map(function (notification) {
			return React.createElement(
				ListItem,
				{ key: notification.id, id: notification.id, href: notification.url, src: notification.image },
				notification.title
			);
		});

		return React.createElement(
			"ul",
			{ className: "list-group" },
			noteItem
		);
	}
});

ReactDOM.render(React.createElement(List, null), document.getElementById('lista'));