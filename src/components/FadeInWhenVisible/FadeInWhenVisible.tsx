import {ReactNode, useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const FadeInWhenVisible = ({children}: { children: ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => controls.start('visible'), 50);
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{duration: 3, type: 'spring'}}
      variants={{
        visible: {paddingTop: 0, opacity: 1},
        hidden: {paddingTop: 120, opacity: 0},
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
