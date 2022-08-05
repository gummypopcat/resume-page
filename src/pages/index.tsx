import { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import styles from '@/styles/Home.module.scss';
import Torus from '@/modules/graphics/Torus';
import Cube from '@/modules/graphics/Cube';

const Home: NextPage = () => {
   return (
      <div className={styles.canvas}>
         <Canvas>
            <ambientLight intensity={0.4} />
            <Torus />
            <Cube img='/img/profile.jpeg' />
         </Canvas>
      </div>
   );
};

export default Home;
