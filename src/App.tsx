import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonComponent} from "./button/Button";


function App() {

    const [number, setNumber] = useState(0)

    const ButtonClick = () => {
        setNumber(number +1)
    }

    const ButtonPlus = () => {
        setNumber(0)
    }

    return (
        <div className="AppBg">
            <div className="App">
                <div className={"Number"}>
                    {number}
                </div>
                <div className={"Items"}>
                    <div className={'Item'}>
                        <ButtonComponent disabled={number === 5} name={'inc'} callBack={() => ButtonClick()}/>
                    </div>
                    <div className={'Item'}>
                        <ButtonComponent disabled={number === 0} name={'reset'} callBack={() => ButtonPlus()}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
