import React from "react";
import './InfoBox.css';
import {prettyPrintStat} from '../utilis'
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, ...props }) {

  return (
    <Card className={`infoBox ${props.active && "infoBox--selected"}  ${(props.isGreen && props.active) && "infoBox--green"}`} onClick={props.onClick} >
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <h2 className={title === "Recovered"? "infoBox__cases recovered": "infoBox__cases"}>{prettyPrintStat(cases)} today</h2>
        <Typography color="textSecondary">{prettyPrintStat(total)} total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
