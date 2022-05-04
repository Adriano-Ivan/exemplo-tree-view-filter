import React from "react";
import './ContainerTreeTitle.styles.css';

interface ContainerTreeTitleProps {
    titleTree: string,
}

/* O container de título pode servir para encapsular as regras do título
do container, como o próprio texto, possíveis componentes filhos e estilos */
const ContainerTreeTitle = ({titleTree}: ContainerTreeTitleProps) => {
    return (
        <h2 className="container-tree-title">{titleTree}</h2>
    );
}

export default ContainerTreeTitle;