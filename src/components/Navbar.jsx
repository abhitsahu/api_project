import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TextLinkExample() {

  const scrollToTop =()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }



  return (
    <Navbar className="nav-container" style={{
      backgroundColor: '#212121',
      height: '10vh',
      position:'fixed',
      width:'100%'
      }}>
      <Container>
        <Navbar.Brand className='nav-logo' href="#home" style={{color:'white', fontSize: 40,}}>Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>

            <button onClick={scrollToTop} className='nav-text' to={'/'} style={{color:'white', fontSize: 25,}}>Back to Top</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;