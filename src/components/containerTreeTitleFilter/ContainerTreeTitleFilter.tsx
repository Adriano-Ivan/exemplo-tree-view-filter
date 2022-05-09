import React from "react";
import './ContainerTreeTitleFilter.styles.css';

interface ContainerTreeTitleFilterProps {
    titleTree: string,
}

/* O container de título pode servir para encapsular as regras do título
do container, como o próprio texto, possíveis componentes filhos e estilos */
const ContainerTreeTitleFilter = ({titleTree}: ContainerTreeTitleFilterProps) => {
    return (
        <h2 className="container-tree-title">{titleTree}</h2>
    );
}

export default ContainerTreeTitleFilter;