import React from "react";
import './../App.css';


type ButtonComponentType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const ButtonComponent = (props: ButtonComponentType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button disabled={props.disabled} className={'Btn'} onClick={onClickHandler}>{props.name}</button>
    )
}