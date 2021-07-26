import React, {forwardRef} from "react";

export const ForwardRefTextInput = forwardRef((props, ref): React.ReactElement => {

    console.log(ref)
    return <div>
        Inside forwardRef, I am OK if parent doesn't pass a ref in.
    </div>
})