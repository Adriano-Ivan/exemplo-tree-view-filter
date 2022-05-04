import React, { Fragment } from "react";
import { useState } from "react";
import { Checkbox } from "@fluentui/react";
// import { Icon } from "@fluentui/react";
import { CaretRightSolid8Icon} from '@fluentui/react-icons-mdl2';
import { CaretDownSolid8Icon } from "@fluentui/react-icons-mdl2";
import './TreeItem.css';

interface TreeItemProps {
    label: string,
    treeItemIsChecked: boolean
}

const TreeItem = ({label, treeItemIsChecked}: TreeItemProps) =>{
    const [isChecked, setIsChecked] = useState(treeItemIsChecked);

    // Nega o atual estado de do state checked
    const toggleIsChecked = () =>{
        setIsChecked(!isChecked);
    }

    // retorno de item, chevron para a direita ou para baixo,e os filhos do item
    return (
        <div className='item'>
            <span className="chevron-and-checkbox-tree-item" >

                <Checkbox className="checkbox-item-tree" label={label} 
                checked={isChecked} onChange={toggleIsChecked}/>

            </span> 
        </div>
    )
}

export default TreeItem;