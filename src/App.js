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
      <div id='parrafo'>

        <div id='renglon1'>
          <p>
            <span id='vannelope'>vannelope </span>
            <span id='designer'>is a designer based in </span>
            <span id='medellin'>
              <a id='med' href='https://goo.gl/maps/JMYq3nUzuPxep4Bm9' target="_blank">medellin,</a>
            </span>
          </p>
        </div>

        <div id='renglo2'>
          <p>
            <img src={icon1} className="pc" alt="icon" />
            <div id='yo'> I </div>
            <div id='design'>
              <a id='des' href='https://dribbble.com/vannelope____' target='_blank' >design, </a>
            </div>
            <img src={icon2} className="rayo" alt="icon" />
            <div id='research'>
              <a id='res' href='https://www.behance.net/vannelope____' target='_blank' >research</a>
            </div>
            <div id='take'>and take some </div>
            <div id='fotos'>
              <a id='pho' href='https://www.instagram.com/vannelope____/' target='_blank'>photos.</a>
            </div>
          </p>
        </div>

        <div id='renglon3'>
          <p>
            <span id='like'>I like to </span>
            <span id='paint'>paint, read, travel </span>
            <span id='good'>and a good </span>
            <span id='cafe'>coffee </span><img src={icon3} className="coffee" alt="icon" />
          </p>
        </div>
      </div>

      {/* Mobile version */}
      <div id='parrafo-mobile'>
        <div id='vannem'>vannelope</div>
        <div id='designerm'>is a designer based in </div>
        <div id='medallo'><a id='med' href='https://goo.gl/maps/JMYq3nUzuPxep4Bm9' target="_blank">medellin,</a></div>
        <div id='designm'><img src={icon1} className="pc" alt="icon" /><span id='yom'>I </span><a id='des' href='https://dribbble.com/vannelope____' target='_blank' >design, </a></div>
        <div id='researchm'><img src={icon2} className="rayo" alt="icon" /><a id='res' href='https://www.behance.net/vannelope____' target='_blank' >research</a></div>
        <div id='take'>and take some</div>
        <div id='pho'><a id='pho' href='https://www.instagram.com/vannelope____/' target='_blank'>photos.</a></div>
        <div id='likem'>I like to <div id='paintm'>paint,</div></div>
        <div id='readm'>&nbsp;&nbsp;&nbsp;&nbsp;read, travel</div>
        <div id='coffeem'>and a good coffee</div>
        <div><img src={icon3} className="coffee" alt="icon" /></div>
      </div>

      {/* Footer */}
      <div className='contenedor'>
        <span className='contact'>
          <img src={icon4} alt="icon" />
          &nbsp;
          <span>
            <a id='con' href='mailto:vannelope023@gmail.com' target='_blank' >CONTACT</a>
          </span>
        </span>

        <span className='resume'>
          <span>
            <a id='resu' href='https://www.dropbox.com/s/0mqloq1wdz6m1vj/Vanessa_lopez_Resume_2022.pdf' target='_blank'>RESUME</a>
          </span>
          &nbsp;
          <img src={icon5} alt="icon" />
        </span>
      </div>
    </div>
  );
}
export default App;

