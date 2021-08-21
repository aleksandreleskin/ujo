import '../Section.css';
import {ReactNode} from 'react';
import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

const Task = ({title = 'Task', children}: { title?: string, children: ReactNode }) => {
  return (
    <FadeInWhenVisible>
      <section className="content-block">
        <h2>{title}</h2>
        {children}
      </section>
    </FadeInWhenVisible>
  );
};

export default Task;
