import logo from './lobo.svg';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import icon4 from './icon4.svg';
import icon5 from './icon5.svg';
import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <div className='lobo'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='parrafo'>
          <p>
            <span className='vanne'>vannelope</span>
            <span className='designer'> is a designer based in</span>
            <span className='medellin'> medellin,</span> <br></br>
            <img src={icon1} className="pc" alt="icon" />
            <span className='yo'> I</span>
            <span className='design'> design, <img src={icon2} className="rayo" alt="icon" /> research</span>
            <span className='take'> and take some</span>
            <span className='fotos'> photos.</span> <br></br>
            <span className='like'>I like to</span>
            <span className='paint'> paint, read, travel</span>
            <span className='good'> and a good</span>
            <span className='cafe'> coffee <img src={icon3} className="coffee" alt="icon" /> </span>
          </p>
        </div>
        <div className='contenedor'>
          <span><img src={icon4} className="plane" alt="icon" /></span>
          <span className='contact'>CONTACT </span>
          <span className='resume'>RESUME </span>
          <span><img src={icon5} className="block" alt="icon" /></span>
        </div>
      </div>
    </body>  
  );
}

export default App;
