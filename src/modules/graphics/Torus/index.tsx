import { NextPage } from 'next';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Torus: NextPage = () => {
   const torus = useRef(null);

   useFrame(() => {
      torus.current.rotation.x += 0.008;
      torus.current.rotation.y += 0.016;
   });

   return (
      <mesh position={[1, 1, -18]} ref={torus}>
         <torusGeometry args={[10, 2, 10, 80]} />
         <meshStandardMaterial color='#ffaa22' />
      </mesh>
   );
};

export default Torus;
