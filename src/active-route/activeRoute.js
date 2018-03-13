import React from 'react';

export default class ActiveRoute extends React.Component {


	render() {
		return (
				<p className="text-center m-0">{this.props.location.pathname}</p>
		);
	}
}