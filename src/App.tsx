import React, { useRef } from 'react';
import TreeView from './components/treeview/TreeView';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

const dataTree = [
  // {
  //   entityTitle: "Front-end",
  //   entityRecords: [
  //     {
  //       id:2,
  //       label:'HTML',
  //       internElements:[
  //         {
  //           id:3,
  //           label:'Semântica',
  //           internElements:[],
  //         }
  //       ]
  //     },
  //     {
  //       id: 4,
  //       label:'CSS',
  //       internElements: [
  //         {
  //           id: 5,
  //           label:'Grid',
  //           internElements:[]
  //         },
  //         {
  //           id:6,
  //           label:'Flex-box',
  //           internElements:[]
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    entityTitle: "Back-end",
    entityRecords:[
      {
        id:8,
        label:'Java',
        internElements:[
          {
            id:9,
            label:'Spring',
            internElements:[
              {
                id:10,
                label:'Spring Boot',
                internElements:[]
              },
              {
                id:11,
                label:'Spring Security',
                internElements:[]
              }
            ]
          },
          {
            id:12,
            label:'JPA',
            internElements:[
              {
                id:13,
                label:'Entities',
                internElements:[]
              }
            ]
          },
          {
            id:14,
            label:'Orientação a Objetos',
            internElements:[
             
            ]
          }
        ]
      },
      {
        id: 15,
        label:'C#',
        internElements:[
          {
            id: 16,
            label:'.NET',
            internElements: [
              {
                id: 17,
                label:'NUGET',
                internElements: [
              
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  
]

function App() {

  const selectedItems = useRef<any[]>([]);
  console.log('APP COMPONENT');
  // O app inicializa com o container de árvores, recebendo os dados, título do container e texto do botão de filtrar
  return (
    <div className="App">
      
      <TreeView
        selectedItems={selectedItems}
         treeData={dataTree} 
         titleContainer={"Filtro de entidades"} 
         textButtonTree={"Filtrar Entidades"}
      />
    </div>
  );
}

export default App;
