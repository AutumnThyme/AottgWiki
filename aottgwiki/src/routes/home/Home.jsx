import "./Home.scss"
import Navbar from "../../components/navbar/Navbar";
import ReactPlayer from 'react-player';

export default function Home() {
  return (
    <div className="home-container">
        <Navbar tabOpen="Home"/>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=rYvQoussA98"
            controls="false"
            loop="true"
            playing="true"
            muted="false"
            width='100%'
            height='116vh'
            config={{ youtube: { playerVars: { disablekb: 1 } } }}
          />
        </div>
        <div className="spacer" />
        <div className="about-section">
          <div className="about-container">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos, placeat magnam ipsum quod incidunt ipsam cupiditate tenetur exercitationem vero excepturi temporibus harum necessitatibus sit ducimus quia assumenda in aut.</p>
          </div>
        </div>
    </div>
  )
}
