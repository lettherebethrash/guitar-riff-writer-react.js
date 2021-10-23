import './App.css';
import NewTab from './components/newriff';

const Home = () => {
  return (
    <div className = "container">
      <div className = "heading">
        <p id = "title">Welcome to the Riff Generator!</p> 
        <p id = "subtitle">A webapp to autogenerate guitar melodies.  Just enter 'major' or 'minor' and the fret numbers for 1 string will appear</p>
        <p>Designed, written and implemented by Tom Sherrin, October 2021</p>
      </div>
      <div className = "view">
        <NewTab />
      </div>
    </div>
  );
}
export default Home;
