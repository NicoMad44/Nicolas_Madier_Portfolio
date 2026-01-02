/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Coin = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
<Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
  <ambientLight intensity={1} />
  <directionalLight position={[0, 0, 0.5]} />

  <mesh castShadow receiveShadow scale={2.5} rotation={[-Math.PI / 2, 0, 0]}>
    <cylinderGeometry args={[1, 1, 0.15, 42]} />

    <meshStandardMaterial
      wireframe
    />

    <Decal
      map={decal}
      // La face "avant" de la pièce est maintenant sur +Y
      position={[0, 0.075, 0]}       // demi épaisseur sur Y
      // on tourne le projeteur pour qu'il regarde la face +Y
      rotation={[Math.PI / 2, 0, 0]} // 90° sur X pour viser +Y
      scale={1.2}
      flatShading
    />
  </mesh>
</Float>
  );
};



const CoinCanvas = ({ icon }) => {
  const controlsRef = useRef(null);
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        // quand l'utilisateur finit de tourner / drag
        onEnd={() => {
          setTimeout(() => {
            controlsRef.current?.reset();
          }, 1000);
        }} />
        <Coin imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CoinCanvas;