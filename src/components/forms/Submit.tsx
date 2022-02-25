import React from "react"

const Submit = ({text, outlined} : {text?: string, outlined?: boolean}) => 
    <button className={`button-${outlined ? 'outlined' : 'filled'} ml-auto block`} type="submit">
        {outlined ? <span className="text-gradient">{text}</span> : text}
    </button>

Submit.defaultProps = {
    text: "Submit",
    outlined: false
}

export default Submit