import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";

const useStyles = makeStyles(() => ({
  listingsConteinter: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 100,
    height: 1000,
    backgroundColor: "#DDDDDD",
  },
}));

function Listings() {
  const { listingsConteinter } = useStyles();
  return (
    <div className={listingsConteinter}>
      <h1>Listings</h1>
    </div>
  );
}

export default Listings;
