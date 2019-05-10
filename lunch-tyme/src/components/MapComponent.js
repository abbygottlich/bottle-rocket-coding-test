import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

    static defaultProps = {
        center: {
            lat: 32.95,
            lng: -96.82
        },
        zoom: 11
    };

    marker() {
        return <div className="map-marker"></div>
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={32.950787}
                        lng={-96.821118}
                        text={this.marker()}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;