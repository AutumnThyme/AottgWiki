import "./Home.scss"
import Navbar from "../../components/navbar/Navbar";
import ReactPlayer from 'react-player';

const YT_TEST_VIDEO = "https://www.youtube.com/watch?v=rYvQoussA98";
const LOCAL_TEST_VIDEO = "assets/ClipsOfBunch5.mp4";

export default function Home() {
  const video = <ReactPlayer
    className="react-player"
    url={LOCAL_TEST_VIDEO}
    controls={false}
    loop={true}
    playing={true}
    muted={true}
    width='100%'
    height='1080px'
  />

  return (
    <div className="home-container">
        <Navbar tabOpen="Home"/>
        <div className="player-wrapper">
        <video class="HeaderSection-video HeaderSection-video--mobile" autoplay="autoplay" loop="loop" muted="muted" playsinline="playsinline" webkit-playsinline="webkit-playsinline" x5-playsinline="x5-playsinline" poster="https://static.playoverwatch.com/img/pages/home/header-video-poster-mobile-0443ef2d5e.jpg" data-js="header-video">
          <source src={LOCAL_TEST_VIDEO} type="video/mp4" />
        </video>
        </div>
        <div className="about-section">
          <div className="about-container">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos, placeat magnam ipsum quod incidunt ipsam cupiditate tenetur exercitationem vero excepturi temporibus harum necessitatibus sit ducimus quia assumenda in aut.</p>
          </div>
        </div>
    </div>
  )
}
