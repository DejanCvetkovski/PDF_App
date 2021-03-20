import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  listingsConteinter: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 100,
    height: 1000,
    backgroundColor: "#ABABAB",
  },
}));

function Home() {
  const { listingsConteinter } = useStyles();
  return <div className={listingsConteinter}></div>;
}

export default Home;
