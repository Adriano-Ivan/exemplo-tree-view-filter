import React from "react";
import ButtonTreeFilter from "../buttonTreeFilter/ButtonTreeFilter";
import './ContainerButtonTreeFilter.styles.css';

interface ContainerButtonTreeProps {
    textButtonTree: string,
}

/* O container de botão pode servir para encapsular as regras relativas 
ao botão de filtrar do container. Nesse caso, apenas define uma div para o componente
de botão */
const ContainerButtonTreeFilter = ({textButtonTree}: ContainerButtonTreeProps) =>{
    return (
        <div className="container-button-tree">
            <ButtonTreeFilter textButton={textButtonTree} />
        </div>
    )
}

export default ContainerButtonTreeFilter;