import "./Home.scss"
import CustomNavbar from "../../components/navbar/Navbar";
import ReactPlayer from 'react-player';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const YT_TEST_VIDEO = "https://www.youtube.com/watch?v=rYvQoussA98";
const LOCAL_TEST_VIDEO = "assets/ClipsOfBunch5.mp4";


export default function Home() {
  const yt_video_element = <ReactPlayer
    className="react-player"
    url={YT_TEST_VIDEO}
    controls={false}
    loop={true}
    playing={true}
    muted={true}
    width='100%'
    height='1080px'
  />

  const local_video_element = <video className="HeaderSection-video HeaderSection-video--mobile" autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsInline" webkit-playsinline="webkit-playsinline" x5-playsinline="x5-playsinline" data-js="header-video">
                                <source src={LOCAL_TEST_VIDEO} type="video/mp4" />
                              </video>

  const video = true ? local_video_element : yt_video_element;

  return (
    <div className="home-container">
      <div className="jumbotron">
      <div className="player-wrapper">
            {video}
        </div>
      </div>
      <CustomNavbar tabOpen="Home"/>
      <Container>
        <div className="about-section">
          <div className="about-container">
            <h1>What is this?</h1>
            <p>
              This is a fan made website for a longstanding community maintained game called the Attack on Titan Tribute Game
              which is more formally called AOTTG. This game was originally made and maintained by Fenglee but as of recently
              has become a completely community maintained game. The gameplay this game provides varies from competative modes
              based on the game's in depth movement mechanics to more casual gameplay with multiplayer.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
