var iconMap = {
    "Music": "music",
    "Sports": "soccer",
    "Work": "code",
    "Life": "heartbeat"
};

var NavItem = React.createClass({
    render: function() {
        var iconClass = classNames(iconMap[this.props.title], "icon");
        var itemClass = classNames("item", this.props.active === this.props.title ? "active" : "")
        return (
            <a className={itemClass}>
                <i className={iconClass}></i>
                {this.props.title}
            </a>
        );
    }
});

var NavBar = React.createClass({
    render: function() {
        return (
            <div className="ui blue labeled icon inverted menu">
                <NavItem active={this.props.active} title="Work" />
                <NavItem active={this.props.active} title="Music" />
                <NavItem active={this.props.active} title="Sports" />
                <NavItem active={this.props.active} title="Life" />
            </div>
        );
    }
});

var Card = React.createClass({
    componentDidMount: function() {
        $('.card').dimmer({
            on: 'hover'
        });
    },
    render: function() {
        var iconClass = classNames(iconMap[this.props.title], "icon");
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.imageURL} style={{height: '300px', objectFit: 'cover'}}/>
                </div>
                <div className="ui dimmer inverted blurred">
                    <div className="content">
                        <div className="center">
                            <h2 className="ui icon header">
                                <i className={iconClass}></i>
                                {this.props.title}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var CardContainer = React.createClass({
    render: function() {
        return (
            <div className="ui container">
                <div className="ui link four cards centered">
                    <Card imageURL="https://www.dropbox.com/s/akive9x8esr94th/Work.jpg?dl=1" title="Work"/>
                    <Card imageURL="https://www.dropbox.com/s/mgzngpqxcfd50qq/Mridangam.jpg?dl=1" title="Music"/>
                    <Card imageURL="https://www.dropbox.com/s/1qp0le7jrqgs19k/Football.jpg?dl=1" title="Sports"/>
                    <Card imageURL="https://www.dropbox.com/s/x9em6ztfadga0qw/Vignesh%20Baby%20Picture.jpg?dl=1" title="Life"/>
                </div>
            </div>
        )
    }
});

var HelloWorldPage = React.createClass({
    render: function() {
        return (
            <div>
                <NavBar active="Work"/>
                <CardContainer />
            </div>
        )
    }
});

ReactDOM.render(
  <HelloWorldPage />,
  document.getElementById('nav')
);
