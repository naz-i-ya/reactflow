import React, { useState } from 'react';

import ReactFlow, { removeElements, 
    addEdge, 
    isNode, 
    Background } from 'react-flow-renderer';

import EmailNode from './EmailNode';
import MeetingNode from './MeetingNode'
import ReminderNode from './ReminderNode'

const nodeTypes = {
	emailNode: EmailNode,
  meetingNode: MeetingNode,
  reminderNode: ReminderNode
}

const onNodeDragStop = (event, node) => console.log('drag stop', node);
const onElementClick = (event, element) => console.log('click', element);

const initialElements = [
  { id: '1', type: 'input', data: { label: 'BeamFox' }, position: { x: 250, y: 5 } },
  { id: '2', type: 'emailNode',  data: { label: 'Email' }, position: { x: 100, y: 100 } },
  { id: '3', type: 'meetingNode', data: { label: 'Meeting' }, position: { x: 400, y: 100 } },
  { id: '4', type: 'reminderNode', data: { label: 'Reminder' }, position: { x: 400, y: 300 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e1-4', source: '3', target: '4', animated: true },
];

const BasicFlow = () => {
  const [rfInstance, setRfInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onLoad = (reactFlowInstance) => setRfInstance(reactFlowInstance);

  const updatePos = () => {
    setElements((elms) => {
      return elms.map((el) => {
        if (isNode(el)) {
          return {
            ...el,
            position: {
              x: Math.random() * 400,
              y: Math.random() * 400,
            },
          };
        }

        return el;
      });
    });
  };

  const logToObject = () => console.log(rfInstance.toObject());

  const resetTransform = () => rfInstance.setTransform({ x: 0, y: 0, zoom: 1 });

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
      className="react-flow-basic-example"
      defaultZoom={1.5}
      minZoom={0.2}
			maxZoom={4}
			nodeTypes={nodeTypes}
    >
      <Background variant="lines" />

      <div style={{ position: 'absolute', right: 30, top: 10, zIndex: 4 }}>
        <button onClick={resetTransform} style={{ marginRight: 5 }}
       type="button" class="btn btn-outline-secondary">
          reset transform
        </button>
        <button onClick={updatePos} style={{ marginRight: 5 }} 
       type="button" class="btn btn-outline-secondary">
          change position
        </button>
        <button onClick={logToObject} 
         type="button" class="btn btn-outline-secondary">toObject</button>
      </div>
    </ReactFlow>
  );
};

export default BasicFlow;