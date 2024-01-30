import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <>
            <div className="home_bg" id="home">
                <Navbar collapseOnSelect expand="lg" className="bg-transparent nav-top">
                    <Container>
                        <Navbar.Brand href="#home"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="享樂酒店" className="d-inline-block align-top" width="196" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav>
                                <Nav.Link href="#">客房旅宿</Nav.Link>
                                <Nav.Link href={`/login`}>會員登入</Nav.Link>
                                <Button variant="light" className="order">立即訂房</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="overlay"></div>
                <h2>高雄</h2>
                <h2>豪華住宿之選</h2>
            </div>
        </>);
}