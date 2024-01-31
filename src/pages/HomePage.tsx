import { Home, Footer } from '../components'
import { useState } from 'react';

export default function HomePage() {
    const [toggleState, setToggleState] = useState(false);
    console.warn('state', toggleState)

    return (
        <>
            <div className="home-page">
                <div className={toggleState ? 'home-overlay-show' : 'home-overlay'}>
                </div>
                <Home toggleState={toggleState} setToggleState={setToggleState} />
                <span className={toggleState ? 'footer-hidden' : ''}><Footer /></span>
            </div>
        </>);
}