import React, { MutableRefObject, useState } from "react";
import TreeGroup from "../tree-group/TreeGroup";
import ContainerTreeTitle from "../container-tree-title/ContainerTreeTitle";
import ContainerButtonTree from "../container-button-tree/ContainerButtonTree";
import './TreeView.styles.css';

interface TreeViewProps {
    treeData: any[],
    titleContainer:string,
    textButtonTree: string,
    selectedItems: MutableRefObject<any[]>
}

/* A TreeView é a base para a renderização dos dados, pois recebe
todos os dados e solta o gatilho para a renderização recursiva */
const TreeView = ({treeData, titleContainer,textButtonTree,selectedItems}:TreeViewProps) =>{
       
    console.log('TREE VIEW')
    return (
        <section className="container-tree">
            <ContainerTreeTitle titleTree={titleContainer}/>

            <div className="container-tree-entities">
                {
                    treeData.map((entityData)=>{
                        const entityTitle = entityData.entityTitle;

                        return (
                            <section className="container-tree-entity">
                                  <h3 className="title-entity">{entityTitle}</h3>
                                  <div className="individual-tree-entity">
                                      {
                                        entityData.entityRecords.map((entityRecord:any)=>{
                                            return(
                                                <TreeGroup 
                                                    selectedItems={selectedItems}
                                                    key={entityRecord.id} 
                                                    treeItemIsChecked={false} 
                                                    openedGroup={false} 
                                                    checkedGroup={false} 
                                                    {...entityRecord} 
                                                />
                                            ) 
                                        })
                                      }
                                  </div>
                            </section>
                        )
                        
                    })
                }
            </div>

            <ContainerButtonTree textButtonTree={textButtonTree}/>
        </section> 
    )
}

export default TreeView;