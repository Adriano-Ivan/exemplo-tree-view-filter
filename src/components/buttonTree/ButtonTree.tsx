import React from "react";
import { PrimaryButton } from "@fluentui/react";

interface ButtonTreeProps {
    textButton: string
}

/* Retorna o componente de botão do fluentUI */
const ButtonTree = ({textButton}: ButtonTreeProps) =>{
    return (
        <PrimaryButton text={textButton}/>
    );
}

export default ButtonTree;