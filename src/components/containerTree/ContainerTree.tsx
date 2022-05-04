import React from "react";
import ContainerTreeTitle from "../container-tree-title/ContainerTreeTitle";
import TreeView from "../treeview/TreeView";
import ContainerButtonTree from "../container-button-tree/ContainerButtonTree";
import './ContainerTree.styles.css';

interface ContainerTreeProps {
    dataTree: any[],
    titleContainer: string,
    textButtonTree: string,
}

/* O container de árvores, com as informações recebidas, renderizará container de título, 
as árvores e o container de botão, repassando todas as informações necessárias para seus filhos */
const ContainerTree = ({dataTree, titleContainer,textButtonTree}: ContainerTreeProps) => {
    return (
        <section className="container-tree">
            <ContainerTreeTitle titleTree={titleContainer}/>
            <div className="container-tree-entities">
                <TreeView treeData={dataTree} treeEntityTitle={"Exemplo 1111"}/>
                <TreeView treeData={dataTree} treeEntityTitle={"Exemplo 2222"}/>
            </div>
            <ContainerButtonTree textButtonTree={textButtonTree}/>
        </section>
    )
}

export default ContainerTree;