import React, { Fragment } from "react";
import { useState } from "react";
import { Checkbox } from "@fluentui/react";
// import { Icon } from "@fluentui/react";
import { CaretRightSolid8Icon} from '@fluentui/react-icons-mdl2';
import { CaretDownSolid8Icon } from "@fluentui/react-icons-mdl2";
import './TreeItem.css';

interface TreeItemProps {
    label: string,
    id:number,
    toggleIsChecked:(value:any) => void,
    verifyIsChecked:(id:any) => boolean | undefined,
}

const TreeItem = ({label, id,toggleIsChecked,verifyIsChecked}: TreeItemProps) =>{
    // const [isChecked, setIsChecked] = useState(treeItemIsChecked);

    // Nega o atual estado de do state checked
    // const toggleIsChecked = () =>{
    //     setIsChecked(!isChecked);
    // }

    // retorno de item, chevron para a direita ou para baixo,e os filhos do item
    return (
        <div className='item'>
            <span className="chevron-and-checkbox-tree-item" >

                <Checkbox 
                    className="checkbox-item-tree" 
                    label={label} 
                    id={`item-${id}`}
                    checked={verifyIsChecked(`item-${id}`)} 
                    onChange={toggleIsChecked}/>

            </span> 
        </div>
    )
}

export default TreeItem;