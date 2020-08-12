import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function Customer(props) {
  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt="얼굴" />
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.job}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
  );
}

function CustomerProfile(props) {
  return (
    <div>
      <p>{this.props.name}</p>
    </div>
  );
}

export default Customer;
