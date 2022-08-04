import logo from './lobo.svg';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import icon4 from './icon4.svg';
import icon5 from './icon5.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='lobo'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {/* Desktop version */}
      <div className='parrafo'>
        <span className='vanne'>vannelope</span>
        <span className='designer'> is a designer based in</span>
        <span className='medellin'> <a id='med' href='https://goo.gl/maps/JMYq3nUzuPxep4Bm9' target="_blank">medellin,</a></span> <br></br>
        <div className='renglon2'>
          <img src={icon1} className="pc" alt="icon" />
          <span className='yo'> I </span>
          <span className='design'><a id='des' href='https://dribbble.com/vannelope____' target='_blank' >design</a>, <img src={icon2} className="rayo" alt="icon" /> <a id='res' href='https://www.behance.net/vannelope____' target='_blank' >research</a></span>
          <span className='take'> and take some</span>
          <span className='fotos'> <a id='pho' href='https://www.instagram.com/vannelope____/' target='_blank'>photos.</a></span> <br></br>
        </div>
        <div className='renglon3'>
          <span className='like'>I like to</span>
          <span className='paint'> paint, read, travel</span>
          <span className='good'> and a good</span>
          <span className='cafe'> coffee <img src={icon3} className="coffee" alt="icon" /> </span>
        </div>
      </div>
      {/* Mobile version */}
      <div className='parrafo-mobile'>
        <span className='vanne'>vannelope</span>
        <span className='designer'> is a designer based in</span>
        <span className='medellin'> <a id='med' href='https://goo.gl/maps/JMYq3nUzuPxep4Bm9' target="_blank">medellin,</a></span>
        <img src={icon1} className="pc" alt="icon" />
        <span className='yo'> I</span>
        <span className='design'> <a id='des' href='https://dribbble.com/vannelope____' target='_blank' >design</a>, <br></br>
          <img src={icon2} className="rayo" alt="icon" /> <a id='res' href='https://www.behance.net/vannelope____' target='_blank' >research</a> <br></br>
        </span>
        <span className='take'> and take some</span><br></br>
        <span className='fotos'> <a id='pho' href='https://www.instagram.com/vannelope____/' target='_blank'>photos.</a></span> <br></br>
        <span className='like'>I like to</span>
        <span className='paint'> paint, <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;read, travel
        </span><br></br>
        <span className='good'> and a good</span>
        <span className='cafe'> coffee <br></br><img src={icon3} className="coffee" alt="icon" /> </span>
      </div>

      <div className='contenedor'>
        <span className='contact'>
          <img src={icon4} alt="icon" />
          &nbsp;<span><a id='con' href='mailto:vannelope023@gmail.com' target='_blank' >CONTACT</a></span>
        </span>
        <span className='resume'>
          <span><a id='resu' href='https://www.dropbox.com/s/0mqloq1wdz6m1vj/Vanessa_lopez_Resume_2022.pdf' target='_blank'>RESUME</a></span>
          &nbsp;<img src={icon5} alt="icon" />
        </span>
      </div>
    </div>
  );
}
export default App;

