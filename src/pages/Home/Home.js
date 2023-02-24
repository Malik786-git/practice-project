import Container from "react-bootstrap/Container";
import styles from './home.module.css'
import HeroVideo from '../../assets/videos/hero-bg.mp4';

function Home() {
  return (
    <>
      <Container fluid className={styles.hero_section}>
         <video src={HeroVideo} className={styles.hero_background_video}  autoPlay loop muted />
      </Container>
    </>
  );
}

export default Home;
