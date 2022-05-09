import React, { MutableRefObject, useState } from "react";
import TreeGroupFilter from "../treeGroupFilter/TreeGroupFilter";
import ContainerTreeTitleFilter from "../containerTreeTitleFilter/ContainerTreeTitleFilter";
import ContainerButtonTreeFilter from "../containerButtonTreeFilter/ContainerButtonTreeFilter";
import './TreeViewFilter.styles.css';

interface TreeViewFilterProps {
    treeData: any[],
    titleContainer:string,
    textButtonTree: string,
    selectedItems: MutableRefObject<any[]>
}

/* A TreeView é a base para a renderização dos dados, pois recebe
todos os dados e solta o gatilho para a renderização recursiva */
const TreeViewFilter = ({treeData, titleContainer,textButtonTree,selectedItems}:TreeViewFilterProps) =>{
       
    console.log('TREE VIEW')
    return (
        <section className="container-tree">
            <ContainerTreeTitleFilter titleTree={titleContainer}/>

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
                                                <TreeGroupFilter
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

            <ContainerButtonTreeFilter textButtonTree={textButtonTree}/>
        </section> 
    )
}

export default TreeViewFilter;