import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Dispatch, SetStateAction } from "react";
interface IProps {
  toggleState: boolean;
  setToggleState: Dispatch<SetStateAction<boolean>>;
}

export default function Home(props: IProps) {
    return (
        <>
            <div className="home_bg" id="home">
                <Navbar collapseOnSelect expand="lg" className="bg-transparent nav-top">
                    <Container>
                        <span className={props.toggleState ? 'brand-hidden' : ''}>
                            <Navbar.Brand href="#home"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/logo.png?raw=true" alt="享樂酒店" className="d-inline-block align-top" width="196" /></Navbar.Brand>
                        </span>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={e => props.setToggleState(!props.toggleState)} />
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
                <div className="home-slogan">
                    <div className="hotel-name">
                        <p className='hotel-name-title'>享樂酒店</p>
                        <p className='hotel-subname'>Enjoyment Luxury Hotel</p>
                        <p className='hotel-name-deco-line'></p>
                    </div>
                    <div className="hotel-slogan">
                        <p className='hotel-slogan-bg'></p>
                        <p className='hotel-slogan-title'>高雄</p>
                        <p className='hotel-slogan-title'>豪華住宿之選</p>
                        <p className='hotel-sub-slogan'>我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                        <button type="button">立即訂房<p className='button-deco-line'></p></button>
                    </div>
                </div>
            </div>
        </>);
}