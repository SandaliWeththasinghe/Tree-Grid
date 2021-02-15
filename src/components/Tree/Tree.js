import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Tree.css';

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map(tree => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  )
}

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisibility] = useState(false);

  const hasChild = node.children ? true : false;

  return(
    <li className="d-tree-node border=0">
      <div className="d-flex" onClick={e => setChildVisibility(v => !v)}>
        {hasChild && (
          <div className={`d-inline d-tree-toggler ${ childVisible ? "active" : ""}`}>
            <FontAwesomeIcon icon="caret-right"/>
          </div>
        )}

        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}> </i>
          {node.label}
        </div>
      </div>
      {
        hasChild && childVisible && <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      }
    </li>
  )
}

export default Tree;