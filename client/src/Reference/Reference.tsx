import React, {useRef} from "react";
import { CallBackRefTextInput } from "./CallBackRefTextInput";
import {ClassTextInput} from "./ClassTextInput";
import {ForwardRefTextInput} from "./ForwardRefTextInput";
import "./Reference.scss"

export const Reference: React.FC = (): React.ReactElement => {
    const basicRef = useRef(null);
    const classRef = useRef(null);
    const forwardRef = useRef(null);
    let callBackRef: HTMLInputElement | null = null;
    const setCallBackRef = (el: HTMLInputElement): void => {
        callBackRef = el;
    }

    function onBasicBlured(e: React.FocusEvent<HTMLInputElement>): void {
        if (basicRef !== null && basicRef.current !== null) {
            basicRef.current.value = e.target.value;
        }
        if (callBackRef) callBackRef.value = e.target.value;
        if (classRef) classRef.current.value = e.target.value;
    }

    return (
        <div className="references">
            <h2>References in React</h2>
            <hr />

            <h3>Basic Example</h3>
            Input: <input type="text" onBlur={onBasicBlured}/><br/><br/>
            I am ref input. I will mimic: <input type="text" ref={basicRef}/>
            <ClassTextInput inputRef={classRef} text="test" />

            <h3>Call Back Ref</h3>
            React.FC Child with Ref. I will mimic too: <CallBackRefTextInput inputRef={setCallBackRef} />

            <h3>ForwardRef</h3>
            <ForwardRefTextInput ref={forwardRef}/>
        </div>
    )
}