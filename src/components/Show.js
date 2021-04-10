import React, { useState } from 'react'
import { ButtonGroup, Col, Row, Table, ToggleButton } from 'react-bootstrap';
import { myFilter } from '../scripts/logic';
import Element from './Element';

const Show = (props) => {
  const [checked, setChecked] = useState(false);
  let usersInfo = null;

  if (props.csv) {
    usersInfo = myFilter(props.csv)
  }

  return (
    <Row className="mt-4">
      {
        usersInfo && props.name ?
          <>
            <Col xs={12} md={4}>
              <h3>File name: {props.name}</h3>
            </Col>
            <Col xs={12} md={{ span: 4, offset: 4 }}>
              <ButtonGroup toggle className="mb-2 offset-md-4">
                <ToggleButton
                  type="checkbox"
                  variant="primary"
                  checked={checked}
                  value="1"
                  onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                  Show only marked records
                </ToggleButton>
              </ButtonGroup>
            </Col>
            <Table className="text-center tab" responsive borderless striped>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo Electrónico</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                <Element users={usersInfo[0]} uniques={usersInfo[1]} marked={checked} />
              </tbody>
            </Table>
          </>
        :
        <></>
      }
    </Row>
  );
}

export default Show;