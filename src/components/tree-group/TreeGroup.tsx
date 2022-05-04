import TreeItem from "../tree-item/TreeItem";
import { Checkbox } from "@fluentui/react";
import { Fragment, useState } from "react";
import { CaretRightSolid8Icon} from '@fluentui/react-icons-mdl2';
import { CaretDownSolid8Icon } from "@fluentui/react-icons-mdl2";

interface TreeGroupProps {
    internElements: any[],
    label: string,
    openedGroup: boolean,
    checkedGroup:boolean
}

const TreeGroup = ({internElements,label, openedGroup,checkedGroup}: TreeGroupProps) => {

    const [groupIsChecked, setGroupIsChecked] = useState(checkedGroup);
    const [groupIsOpen, setGroupIsOpen] = useState(openedGroup);

    const toggleOpenGroup = () => {
        setGroupIsOpen(!groupIsOpen);
    }

    console.log(internElements)
    const toggleGroupIsChecked = () => {
        setGroupIsChecked(!groupIsChecked);
    }

    return (
        <div className='item'>
            <span className="chevron-and-checkbox-tree-item">

                
                { internElements.length > 0 && !(groupIsOpen) ? <CaretRightSolid8Icon onClick={toggleOpenGroup}/> : null}

                { internElements.length > 0 && groupIsOpen ? <CaretDownSolid8Icon onClick={toggleOpenGroup}/> : null}

                <Checkbox 
                    className="checkbox-item-tree" 
                    label={label} checked={groupIsChecked} 
                    onChange={toggleGroupIsChecked}
                />

            </span> 

            <div className='list-item'  style={{marginLeft:"30px"}}>
            { internElements.map((internItem:any,i:number) => {
                if(groupIsOpen && internItem.internElements.length === 0){
                    return <Fragment>
                        <TreeItem
                            key={internItem.id}
                            treeItemIsChecked={groupIsChecked}
                            label={internItem.label}
                        />
                            
                    </Fragment>
                } else if(internItem.internElements.length > 0) {
                    return <Fragment>
                        {
                            groupIsOpen &&
                            <TreeGroup 
                                internElements={internItem.internElements}
                                label={internItem.label}
                                openedGroup={!groupIsOpen}
                                checkedGroup={groupIsChecked}
                            />
                        }   
                         </Fragment>
                }
            })}
            </div>
        </div>
    )
}

export default TreeGroup;