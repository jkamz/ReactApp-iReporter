import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText} from 'reactstrap';

import styles from "../styles/redflag.css"

const RedflagCard = (props) => {
  return (
    <li>
    <div className="rdcard">
      <Card body outline color="secondary">
        <CardHeader tag="h3">{props.title}</CardHeader>
        <CardBody>
          <CardTitle>Status: {props.status}</CardTitle>
          <CardText>{props.comment}</CardText>
          <Button>View Redflag</Button>
        </CardBody>
        <CardFooter className="text-muted">Created By: {props.createdBy}</CardFooter>
      </Card>
    </div>
    </li>
  );
};

export default RedflagCard;