import React, { PropTypes } from 'react';

const WineApp = React.createClass({

  propTypes: {
    children: PropTypes.element
  },

  getInitialState() {
    return {
      title: ''
    };
  },

  setTitle(title) {
    this.setState({ title });
  },

  render () {
    return (
      <div className="grid">
          <div className="1/2 grid__cell">
            <h2>{this.state.title}</h2>
            {this.props.children && React.cloneElement(this.props.children, {
              setTitle: this.setTitle
            })}
          </div>
      </div>
    );
  }
})

export default WineApp