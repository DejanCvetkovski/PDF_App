import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#4CCCCC",
    paddingRight: 80,
    paddingLeft: 118,
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Times New Roman",
    fontWeight: 400,
    color: "#FFFEFE",
    textAlign: "left",
    marginRight: 300,
  },
  menuButton: {
    fontFamily: "Times New Roman",
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 38,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerStyle: { padding: "20px 30px" },
}));

const headerData = [
  {
    label: "Listings",
    href: "/listings",
  },
  {
    label: "Home",
    href: "/",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

function Header() {
  const [state, setState] = useState({ mobileView: false, drawerOpen: false });
  const { drawerStyle, header, logo, menuButton, toolbar } = useStyles();

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsivnes = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsivnes();
    window.addEventListener("resize", () => setResponsivnes());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        {getMenuButtons()}
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headerData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerStyle}>{getDrawerChoices()}</div>
        </Drawer>
        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Typography className={logo} variant="h6" component="h1">
      Femmecubator
    </Typography>
  );

  const getMenuButtons = () => {
    return headerData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default Header;
