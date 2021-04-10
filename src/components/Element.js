import React from 'react'
import { mark } from '../scripts/logic';

const Element = (props) => {
  const color = { color: "#ff0000" };

  const myFilter = (users) => {
    const showUsers = users.map((u, idx) =>
      <tr key={idx} style={mark(props.uniques, u) ? color : null}>
        <td>{u["Nombre"]}</td>
        <td>{u["Correo Electronico"]}</td>
        <td>{u["Telefono"]}</td>
      </tr>
    );

    if (props.marked) {
      return showUsers.filter(u => {
        if (u.props.style) {
          if (u.props.style.color === "#ff0000") {
            return u;
          }
        }
      });
    }
    else {
      return showUsers;
    }
    
  };

  return(
    <>
      {
        props.users ?
          myFilter(props.users)
        :
         <></>
      }
    </>
  );
}

export default Element;