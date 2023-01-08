import React, { useState } from "react";
import { Link } from "react-router-dom";

function List() {
    const[data] = useState([
    {pid: "1234", name: "Jie", title: "Milestone 1"},
    {pid: "2918", name: "Justin", title: "Milestone 2"}
    ]);
  return (
    <div classname="container">
        <h1>WallPage</h1>
        <ul>
          {data.map(item => (
            <li key={item.id} className="list-item">
              <Link to={item.id}>{item.title}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
  }
  export default List;