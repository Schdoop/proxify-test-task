import './App.css';
import React, { useRef } from "react";
import Menu from "./components/menu";
import Content from "./components/content";

function App() {

    let openedMenu = false;
    const contentDiv = useRef();

    const menuHandler = () => {
        if(openedMenu) {
            contentDiv.current.classList.remove('open');
        }
        else {
            contentDiv.current.classList.add('open');
        }
        openedMenu = !openedMenu;
    };

    // handle swipe
    let xDown = null;
    let yDown = null;

    const handleTouchStart = e => {
        const firstTouch = e.touches[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    const handleTouchMove = e => {
        if ( ! xDown || ! yDown ) {
            return;
        }

        let xUp = e.touches[0].clientX;
        let yUp = e.touches[0].clientY;

        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
            if ( xDiff > 0 ) {
                openedMenu = false;
                document.getElementById('content').classList.remove('open');
            } else {
                openedMenu = false;
                document.getElementById('content').classList.add('open');
            }
        }

        xDown = null;
        yDown = null;
    };


    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    return (
        <div className="App">
            <Menu toggleMenu={menuHandler} />
            <div className="content" id="content" ref={contentDiv}>
                <Content toggleMenu={menuHandler} />
            </div>
        </div>
    );
}

export default App;
