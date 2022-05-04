import React, { useState } from "react";
import TreeGroup from "../tree-group/TreeGroup";
import './TreeView.styles.css';

interface TreeViewProps {
    treeData: any[],
    treeEntityTitle: string,
}

/* A TreeView é a base para a renderização dos dados, pois recebe
todos os dados e solta o gatilho para a renderização recursiva */
const TreeView = ({treeData, treeEntityTitle}:TreeViewProps) =>{
       
    return ( 
        <section className="container-tree-entity">
            <h3 className="title-entity">{treeEntityTitle}</h3>
            <div className="individual-tree-entity">
                {
                    treeData.map((item)=>(
                        <TreeGroup key={item.id} treeItemIsChecked={false} 
                        openedGroup={false} checkedGroup={false} {...item} />
                    ))
                }
            </div>
        </section>
    )
}

export default TreeView;