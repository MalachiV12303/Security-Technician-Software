import '../App.css';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div id="description">
          <p>This application is created for COP4533 and is not professionally affiliated with Safe Haven Security.</p>
          <p>This software will be a tool utilized by Safe Haven employees in both Tampa North and Tampa South regions.</p>
        </div>
        <div id="myinfo">
          <p>Created by: Felo Malachi Valle</p>
          <p><a href='https://github.com/MalachiV12303'>Github</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
