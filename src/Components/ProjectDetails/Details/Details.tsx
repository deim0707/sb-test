import React, { FC } from "react";
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import HeaderDetails from "../HeaderDetails/HeaderDetails";
import FactsAboutWorks from "../FactsAboutWorks/FactsAboutWorks";
import FormDetailsProject from "../FormDetailsProject/FormDetailsProject";
import TitleProjectDetails from "../TitleProjectDetails/TitleProjectDetails";
import s from './Details.module.scss';


const Details: FC<{}> = () => {
  const { id } = useParams();

  return (
    <div className={s.detailsWrapper}>
      <HeaderDetails id={Number(id)} />
      <TitleProjectDetails id={id} />
      <FormDetailsProject id={id} />
      <Row>
        <Col>
          <FactsAboutWorks id={id} />
        </Col>
      </Row>
    </div>
  );
}

export default Details;
