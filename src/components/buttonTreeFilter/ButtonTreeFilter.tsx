import React from "react";
import { PrimaryButton } from "@fluentui/react";

interface ButtonTreeFilterProps {
    textButton: string
}

/* Retorna o componente de botão do fluentUI */
const ButtonTreeFilter = ({textButton}: ButtonTreeFilterProps) =>{
    return (
        <PrimaryButton text={textButton}/>
    );
}

export default ButtonTreeFilter;