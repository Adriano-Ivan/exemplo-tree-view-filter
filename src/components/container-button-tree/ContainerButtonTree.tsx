import React from "react";
import ButtonTree from "../buttonTree/ButtonTree";
import './ContainerButtonTree.styles.css';

interface ContainerButtonTree {
    textButtonTree: string,
}

/* O container de botão pode servir para encapsular as regras relativas 
ao botão de filtrar do container. Nesse caso, apenas define uma div para o componente
de botão */
const ContainerButtonTree = ({textButtonTree}: ContainerButtonTree) =>{
    return (
        <div className="container-button-tree">
            <ButtonTree textButton={textButtonTree} />
        </div>
    )
}

export default ContainerButtonTree;