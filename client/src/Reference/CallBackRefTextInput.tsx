import React from "react";

interface Props {
    inputRef: (instance: HTMLInputElement) => void;
}

export const CallBackRefTextInput: React.FC<Props> = ({inputRef}) : React.ReactElement => {
    return <input type="text" ref={inputRef} />
}