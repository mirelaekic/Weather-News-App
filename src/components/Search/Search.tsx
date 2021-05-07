import React, { useState,useEffect, FormEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../store/actions/alert";
import { getWeather, setLoading } from "../../store/actions/weather";
import { getImage } from "../../store/actions/image";
import "./Search.css";
import { Container } from "react-bootstrap";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { RootState } from "../../store";
import { DOMElement } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  appbar:{
    borderRadius: "2rem",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "45ch"
      }
    }
  }
}));
interface SearchQuery {
  title: String;
}
const Search: FC<SearchQuery> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const data = useSelector((state: RootState) => state.weather.data);
  const changeHandler = (e: any) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return dispatch(setAlert("City is required!"));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
    dispatch(getImage(city))
    setCity("");
  };
  useEffect(() => {
    let search:HTMLElement = document.getElementById("appBar")!
    if(data === null && search){
      search.style.position = "relative"
      search.style.top = "20rem"
    } else {
      search.style.removeProperty("position")
      search.style.removeProperty("top")
    }
  }, [data])
  const classes = useStyles();
  return (
    <div className="jumbotron jumbotron-fluid">
    <Container>
      <form className="py-5" onSubmit={submitHandler}>
        <div className={classes.root}>
      <AppBar className={classes.appbar} id="appBar" position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          <a style={{color:"white"}} href="/">
            <WbSunnyIcon  className="navbar-icon"/>  {title}
          </a>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={changeHandler}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
      </form>
    </Container>
    </div>
  );
};
export default Search;
