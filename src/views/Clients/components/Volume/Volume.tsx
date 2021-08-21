import '../Section.css';
import FadeInWhenVisible from '../../../../components/FadeInWhenVisible/FadeInWhenVisible';

interface IVolume {
  title: string;
  indexes: Array<string>;
}

const Volume = ({volumes}: { volumes: Array<IVolume> }) => {
  const volumeList = volumes.map((volume, i) => (
    <div key={i}>
      <span>{volume.title}</span>
      <ul>
        {volume.indexes.map((index, i) => <li key={i}>{index}</li>)}
      </ul>
    </div>
  ));

  return (
    <FadeInWhenVisible>
      <section className="content-block">
        <h2>Scope of work</h2>
        <div className="volume__list">
          {volumeList}
        </div>
      </section>
    </FadeInWhenVisible>
  );
};

export default Volume;
