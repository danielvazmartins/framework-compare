var ListItem = React.createClass({
	removeItem: function(e) {
		e.preventDefault();
		console.log("removeItem", e.target.id);
	},

	render: function() {
		var StyleImg = {
			width: "40px",
			height: "40px",
			margin: "10px"
		}
		var StyleIcon = {
			position: "absolute",
			right: "10px",
			top: "10px"
		}

		return (
			<li className="list-group-item">
				<a href={this.props.href}>
					<img src={this.props.src} style={StyleImg} />
					{this.props.children}
					<span onClick={this.removeItem} id={this.props.id} className="glyphicon glyphicon-remove text-right" style={StyleIcon} />
				</a>
			</li>
		)
	}	
});

var List = React.createClass({
	getInitialState: function(){
		return {
			notifications: []
		};
    },

    componentDidMount: function() {
    	var _this = this;
    	axios.get('/api/notifications')
		.then(function(response){
			_this.setState({
				notifications: response.data
			});
		});
	},

	render: function() {

		var noteItem = this.state.notifications.map(function(notification){
            return (
            	<ListItem key={notification.id} id={notification.id} href={notification.url} src={notification.image}>{notification.title}</ListItem>
            );
        });

		return (
			<ul className="list-group">          
		  		{noteItem}
			</ul>			
		);
	}
});

ReactDOM.render(
	<List />,
	document.getElementById('lista')
);