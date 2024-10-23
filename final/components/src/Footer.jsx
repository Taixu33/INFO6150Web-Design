import './Footer.css';

// Footer.jsx
function Footer({ setPage }) {
  return (
    <footer className='footer'>
      <a href="#" onClick={() => setPage('PrivacyPolicy')}>Privacy Policy</a>
      <a href="tel:+1234567890">Tel: +1 234 567 890</a>
      <a href="mailto:contact@catsworld.com">Email: contact@catsworld.com</a>
    </footer>
  );
}

export default Footer;

