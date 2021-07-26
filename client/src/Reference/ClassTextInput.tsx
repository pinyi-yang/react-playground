import React from "react";

interface Props {
    inputRef: React.MutableRefObject<any>;
    text: string;
}

export class ClassTextInput extends React.Component<Props> {
    render() {
        console.log(this.refs);
        return <div>
            I am class component where is my ref? In my props!, props.ref.
            Here is my input, I can mimic too.
            <input type="text" ref={this.props.inputRef} />
        </div>
    }
}