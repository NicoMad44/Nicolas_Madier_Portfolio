import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';
import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from '@react-three/drei';


const Coin = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
<Float speed={2.5} rotationIntensity={4} floatIntensity={4}>
  <mesh scale={2.5} rotation={[-Math.PI / 2, 0, 0]}> 
    <cylinderGeometry args={[1, 1, 0.15, 42]} />
    <meshBasicMaterial
      wireframe
      color="#b7c5d3"
    />
    <Decal
      map={decal}
      position={[0, 0.15, 0]}
      rotation={[Math.PI / 2, 0, 0]} // 90° sur X pour viser +Y
      scale={1.2}
    />
  </mesh>
</Float>
  );
};

Coin.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};


const CoinCanvas = ({ icon }) => {
  const controlsRef = useRef(null);
  return (
    <div>
    <Canvas>
        <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        onEnd={() => {
          setTimeout(() => {
            controlsRef.current?.reset();
          }, 1000);
        }} />
        <Coin imgUrl={icon} />
    </Canvas>
    </div>
  );
};

CoinCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export {CoinCanvas};