import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 49.447882,
			lng: 5.0046008,
		},
		zoom: 15,
	};

	render() {
		return (
			// Important! Always set the container height explicitly
			<div style={{ height: '50vh', width: '70%', margin: 'auto' }}>
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyCOoWkKamurSv0Wtezu6shJJkRZc46qK8A',
					}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					<AnyReactComponent
						lat={49.447882}
						lng={5.0046008}
						text='Enplacement'
					/>
				</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
