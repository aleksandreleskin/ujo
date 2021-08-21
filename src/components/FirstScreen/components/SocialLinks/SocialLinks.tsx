import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <ul className={styles.socialLinks}>
      <li><a target="_blank" rel="noreferrer" href="https://instagram.com">inst</a></li>
      <li><a target="_blank" rel="noreferrer" href="https://twitter.com">twit</a></li>
    </ul>
  );
};

export default SocialLinks;
