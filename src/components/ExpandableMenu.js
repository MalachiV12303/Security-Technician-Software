import React, { useState } from 'react';
import '../App.css';
import '../styles/ExpandableMenu.css';
import { inventoryData } from '../utils/PersonalInventory';
import { packageData } from '../utils/PackageData';

const ExpandableMenu = ({ title, content }) => {

  const [isActive, setIsActive] = useState(false);
  if (content === 1){
    return (
      <div className="menu">
        <div className="menu-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="menu-content">
        {inventoryData.map(({ title, count }) => (
          <div className="item">
            <p>Item:{title}</p>
            <p>Count: {count}</p>
          </div>
        ))}
        </div>}
      </div>
    );
  }
  else if (content === 2){
    return (
      <div className="menu">
        <div className="menu-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="menu-content">
          <div className="row-item">
            <div><p>Choose Item to Add:</p></div>
            <div><input placeholder='...'></input></div>
          </div>
          <div className="row-item">
            <div><p>Choose Quantity:</p></div>
            <div><input placeholder='...'></input></div>
          </div>
          <div className="row-item">
            <div><button classId="submit-item">Submit</button></div>
          </div>
        </div>}
      </div>
    );
  }
  else if (content === 3){
    return (
      <div className="menu">
        <div className="menu-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className="menu-content">
        {packageData.map(({ title, count, cost, points}) => (
          <div className="package-line-item">
            <p>{title} pts: {points}</p>
            <p>Retail price: {cost}</p>
            <p>You are getting: {count} for ${count*cost}</p>
            <br></br>
          </div>
        ))}
        </div>}
      </div>
    );
  }
};

export default ExpandableMenu;