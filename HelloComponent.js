var helloComponent = React.createClass({
  propTypes : {
    name: React.PropTypes.string.isRequired
  },
        render: function() {
          var nameString = "Hello, " + this.props.name + "!";
            return (
                div({},
                    h1({}, nameString)
                )
            )
        }
    }
);
