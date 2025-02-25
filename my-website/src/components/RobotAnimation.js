// src/components/RobotAnimation.js
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

// Import models
// import personTypingModel from '../assets/models/person_typing.glb';
// import computerModel from '../assets/models/computer.glb';
import robotModel from '../assets/models/robot.glb';

const Person = () => {
  const { scene, animations } = useGLTF(personTypingModel);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions['Typing']?.play();
  }, [actions]);

  return <primitive object={scene} />;
};

const Computer = () => {
  const { scene } = useGLTF(computerModel);
  return <primitive object={scene} />;
};

const Robot = React.forwardRef((props, ref) => {
  const { scene } = useGLTF(robotModel);
  return <primitive ref={ref} object={scene} {...props} />;
});

const NeuralNetwork = React.forwardRef((props, ref) => {
  // Placeholder for neural network visualization
  return (
    <mesh ref={ref} visible={false} position={[0, 1.5, -2]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="blue" wireframe />
    </mesh>
  );
});

const SceneContent = () => {
  const robotRef = useRef();
  const neuralNetworkRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      // Display neural network visualization
      if (neuralNetworkRef.current) {
        neuralNetworkRef.current.visible = true;
      }
    }, 3000);

    setTimeout(() => {
      // Turn on the robot's eyes
      if (robotRef.current) {
        const eyes = robotRef.current.getObjectByName('Eyes');
        if (eyes) {
          eyes.material.emissive = new THREE.Color(0xff0000);
        }
      }
    }, 6000);
  }, []);

  return (
    <>
      <Person />
      <Computer />
      <NeuralNetwork ref={neuralNetworkRef} />
      <Robot ref={robotRef} position={[0, 0, -5]} />
    </>
  );
};

const RobotAnimation = () => {
  return (
    <Canvas className="canvas" camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <SceneContent />
      <OrbitControls />
    </Canvas>
  );
};

export default RobotAnimation;
