import React from 'react';
import ContainerTree from './components/containerTree/ContainerTree';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

const dataTree = [
  {
    id:1,
    label:'Front-end',
    internElements: [
      {
        id:2,
        label:'HTML',
        internElements:[
          {
            id:3,
            label:'Semântica',
            internElements:[],
          }
        ]
      },
      {
        id: 4,
        label:'CSS',
        internElements: [
          {
            id: 5,
            label:'Grid',
            internElements:[]
          },
          {
            id:6,
            label:'Flex-box',
            internElements:[]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    label:'Back-end',
    internElements:[
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
              }
            ]
          }
        ]
      },
      {
        id: 11,
        label:'C#',
        internElements:[
          {
            id: 12,
            label:'.NET',
            internElements: [

            ]
          }
        ]
      }
    ]
  }
]

function App() {

  // O app inicializa com o container de árvores, recebendo os dados, título do container e texto do botão de filtrar
  return (
    <div className="App">
      
      <ContainerTree dataTree={dataTree} titleContainer={"Filtro"} textButtonTree={"Filtrar"}/>
    </div>
  );
}

export default App;
