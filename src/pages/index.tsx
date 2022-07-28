import { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import styles from '@/styles/Home.module.scss';
import Torus from '@/modules/graphics/Torus';

const Home: NextPage = () => {
   return (
      <div className={styles.canvas}>
         <Canvas>
            <ambientLight intensity={0.4} />
            <Torus />
         </Canvas>
      </div>
   );
};

export default Home;
