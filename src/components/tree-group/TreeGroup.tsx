import { Checkbox, sequencesToID } from "@fluentui/react";
import { Dispatch, Fragment, MutableRefObject, SetStateAction, useEffect, useRef, useState } from "react";
import { CaretRightSolid8Icon} from '@fluentui/react-icons-mdl2';
import { CaretDownSolid8Icon } from "@fluentui/react-icons-mdl2";
import './TreeGroup.styles.css'

interface TreeGroupProps {
    internElements: any[],
    itemSiblingsIds?:any[],
    label: string,
    id: number,
    openedGroup: boolean,
    idParent?:number,
    selectedItems:MutableRefObject<any[]>,
    auxSequenceChainSelected?:MutableRefObject<any[] | undefined>,
    handleStateAuxiliarChecked : () => void,
}

const TreeGroup = ({internElements,label,id,openedGroup,idParent,
    selectedItems,auxSequenceChainSelected,handleStateAuxiliarChecked,
     itemSiblingsIds}: TreeGroupProps) => {

    // const [groupIsChecked, setGroupIsChecked] = useState(checkedGroup);
    const [groupIsOpen, setGroupIsOpen] = useState<boolean>(openedGroup);
    const [auxiliarCheckedState, setAuxiliarCheckedState] = useState<boolean>(false);
    const [childrenOfGroup, setChildrenOfGroup] = useState<any[]>([]);
    const [fatherComponentId, setFatherComponentId] = useState<string>('');
    const sequenceChainSelectedAux = useRef<any[]>();

   
    useEffect(()=>{
       
        if(idParent !== undefined)
            setFatherComponentId(`${idParent}`);
        
       
    },[]);

    useEffect(()=>{
        const newChildrenOfGroup = filterInternElementsAndReturn(internElements,[]);
        setChildrenOfGroup([...newChildrenOfGroup]);
    },[]);

    useEffect(()=>{
        if(auxSequenceChainSelected !== undefined){
            if(Array.isArray(auxSequenceChainSelected.current)){
                sequenceChainSelectedAux.current = [...auxSequenceChainSelected.current];
            }
               
    
            if(idParent && Array.isArray(auxSequenceChainSelected.current) && 
            sequenceChainSelectedAux.current !== undefined &&
                !auxSequenceChainSelected.current.includes(`${idParent}`)){

                sequenceChainSelectedAux.current.push(`${idParent}`);
            } 

        } else {
            sequenceChainSelectedAux.current=[];

            if(!sequenceChainSelectedAux.current.includes(`${id}`)){
                sequenceChainSelectedAux.current.push(`${id}`);
            }
        }
        
    },[]);

    const handleAuxiliarCheckedState =() =>{
        setAuxiliarCheckedState(!auxiliarCheckedState);

        if(handleStateAuxiliarChecked !== undefined)
            handleStateAuxiliarChecked();
    }


    const elementExistsInGroup = (id:any) => {
        if(selectedItems.current.includes(id)){
            return true;
        } else if(!selectedItems.current.includes(id)){
            return false;
        }
    }

    const addSelectedItem = (id:string, childrenList: any[] = []) => {
        if(!elementExistsInGroup(id)){

            if(!childrenList.includes(id) && !selectedItems.current.includes(id)){
                selectedItems.current=[...selectedItems.current, id, ...childrenList];
            }

            if(childrenList.length === 0){
               
                if(!selectedItems.current.includes(id)){
                    selectedItems.current=[...selectedItems.current, id];
                }
             
            }
            
            if(sequenceChainSelectedAux.current !== undefined 
                && sequenceChainSelectedAux.current.length >= 1){
                    
                    for(let i = sequenceChainSelectedAux.current.length-1; i >= 0; i--){

                        if(!selectedItems.current.includes(sequenceChainSelectedAux.current[i])){

                            selectedItems.current=[...selectedItems.current,
                                sequenceChainSelectedAux.current[i] ];
                               
                        }
                    }
                    
            }
            
        }
        console.log('sequence chain add item: ',sequenceChainSelectedAux.current);
        console.log('selected items add item: ',selectedItems.current);
    }

    const markOffSelectedItem = (index:any, childrenList:any[], itemId:string) => {
        if(index >= 0){
            selectedItems.current = [...selectedItems
                                    .current
                                    .filter((item) => {
                                            if(item !== selectedItems.current[index]
                                                && !childrenList.includes(item)){
                                                    return item;
                                            }
                                        }
                                    )
                                ];


            let includesSomething = true;
            let qtde = 0;

            itemSiblingsIds?.forEach((itemSiblingId)=> {
                if(selectedItems.current.includes(itemSiblingId)){
                    qtde += 1;
                }
            });

            includesSomething = qtde > 0;

            console.log('SEQUENCE : ',sequenceChainSelectedAux)
            if(!includesSomething && !itemId.includes("item")){
                console.log(selectedItems.current)
                selectedItems.current = [...selectedItems
                                            .current        
                                            .filter((item,i) => {
                                               
                                                if(item !== fatherComponentId){
                                                    return item;
                                                }
                                            })];
            } else if(!includesSomething && sequenceChainSelectedAux.current?.length === 1){
                selectedItems.current = [...selectedItems
                    .current        
                    .filter((item,i) => {
                      
                        if(item !== sequenceChainSelectedAux.current?.[0]){
                            return item;
                        } 
                            
                    })];
            }
            
            console.log(itemId);
            console.log('children of group: ',childrenOfGroup)
            console.log('sequence chain mark off: ',sequenceChainSelectedAux.current);
            console.log('selected items mark off: ',selectedItems.current);
        }
    }

    const toggleOpenGroup = () => {
        setGroupIsOpen(!groupIsOpen);
    }

    const filterInternElementsAndReturn = (elements:any, arr:string[]):any[] => {
        let internIdsElements:string[] = [...arr];
        
        if(elements.length > 0){

            elements.map((element:any) => {
                if(element.internElements.length > 0){
                    internIdsElements.push(`${element.id}`);

                    element.internElements.map((internElement:any)=>{
                        if(internElement.internElements.length === 0){
                            internIdsElements.push(`item-${internElement.id}`);
                        } else {
                            internIdsElements.push(`${internElement.id}`);
                        }
                    });

                } else {
                    internIdsElements.push(`item-${element.id}`);
                }

                internIdsElements = filterInternElementsAndReturn(element,internIdsElements);
            })
            
        } 

        return [...internIdsElements];

    }

    const toggleGroupIsChecked = (value:any) => {

        if(handleStateAuxiliarChecked === undefined)
        {
            handleAuxiliarCheckedState();
        } else {
            handleStateAuxiliarChecked();
        }
        
        
        if(value.target.id.includes("item") || idParent !== undefined){
            // definir item como marcado ou desmarcado
            // setGroupIsChecked(true);
            console.log(idParent);
            // definir grupo como marcado (se o item for marcado, e não desmarcado)
            if(value.target.checked){
                addSelectedItem(`${idParent}`, [...childrenOfGroup]);
            }
        }
        
              
        if(value.target.checked){
            addSelectedItem(value.target.id,[...childrenOfGroup]);
        } else {
            const indexN = selectedItems.current.indexOf(value.target.id);
           
            markOffSelectedItem(indexN,[...childrenOfGroup],value.target.id);
        }

    }

    return (
        <div className='item'>
            <span className="chevron-and-checkbox-tree-item">

                { internElements.length > 0 && !(groupIsOpen)
                 ? <CaretRightSolid8Icon onClick={toggleOpenGroup}/> 
                 : null
                }

                { internElements.length > 0 && groupIsOpen ?
                 <CaretDownSolid8Icon onClick={toggleOpenGroup}/> 
                 : null
                }

                { internElements.length > 0
                  ? <Checkbox 
                    className="checkbox-item-tree" 
                    label={label}
                    checked={elementExistsInGroup(`${id}`)} 
                    onChange={toggleGroupIsChecked}
                    id={`${id}`}
                    />
                  :
                  <Checkbox 
                  className="checkbox-item-tree" 
                  label={label} 
                  id={`item-${id}`}
                  checked={elementExistsInGroup(`item-${id}`)} 
                  onChange={toggleGroupIsChecked}/>
                }
            </span> 

            <div className='list-item'  style={{marginLeft:"30px"}}>
            { internElements.map((internItem:any,i:number) => {
                
                    return(
                         <Fragment>
                        {
                            groupIsOpen &&
                            <TreeGroup 
                                idParent={id}
                                id={internItem.id}
                                // checkedGroup={groupIsChecked}
                                itemSiblingsIds={childrenOfGroup}
                                handleStateAuxiliarChecked={handleAuxiliarCheckedState}
                                selectedItems={selectedItems}
                                auxSequenceChainSelected={sequenceChainSelectedAux }
                                internElements={internItem.internElements}
                                label={internItem.label}
                                openedGroup={!groupIsOpen}
                            
                                
                            />
                        }   
                         </Fragment>
                    )
                
            })}
            </div>
        </div>
    )
}

export default TreeGroup;