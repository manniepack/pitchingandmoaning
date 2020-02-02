import React from 'react';
import Layer from '../Layer';
import Image__Frame from './sky.png';

// delta= float
class LAYER__4_SKY extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      position: [0, 0],
      rotation: 0,
    };

    this.animate = this.animate.bind(this);
  }

  animate() {

    // TODO;
    // modulate position and rotation
    return;
  }

  render() {
    
    this.animate();

    return <Layer
      id='animation__sky'
      position={this.state.position}
      rotation={this.state.rotation}
      image={Image__Frame}
      depth={3}
    />
  }
}

export default LAYER__4_SKY;