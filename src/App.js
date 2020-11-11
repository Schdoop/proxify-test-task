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

    return (
        <div className="App">
            <Menu toggleMenu={menuHandler} />
            <div className="content" ref={contentDiv}>
                <Content toggleMenu={menuHandler} />
            </div>
        </div>
    );
}

export default App;
