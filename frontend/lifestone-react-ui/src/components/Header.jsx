import React from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
  NavItem,
  Nav,
  FormGroup,
  Form,
  NavLink,
  Input,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WalletIcon from "@mui/icons-material/Wallet";
import shortLogoWithText from "../images/shortLogoWithText.png";
import { updateLoginState } from "../actions/AuthActions";
const SearchBar = () => {
  return (
    <div style={{ borderRadius: "25px" }}>
      <Form style={{ backgroundColor: "#36454F", color: "white" }}>
        <FormGroup>
          <Input
            placeholder="Search"
            className="placeholder"
            style={{ color: "white", backgroundColor: "#36454F" }}

            //  onChange={}
          />
        </FormGroup>
      </Form>
    </div>
  );
};
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  // const { isAuth } = useSelector( state => state.auth );

  return (
    <div>
      (
      <div>
        <Navbar className="d-flex align-items-center">
          <NavbarBrand
            onClick={() => {
              dispatch(updateLoginState(false));
              navigate("/");
            }}
            style={{ color: "white" }}
            alt="Logo"
          >
            <img
              src={shortLogoWithText}
              style={{ height: "60px" }}
              alt="Our beautiful logo"
            />
          </NavbarBrand>

          {!isAuth ? (
            <NavItem>
              <Button
                color="pink-600"
                className="mx-5"
                style={{ backgroundColor: "#de3576" }}
                onClick={() => {
                  dispatch(updateLoginState(true));
                  navigate("/timeline");
                  window.location.reload();
                }}
              >
                <div className="text-white">
                  Connect to wallet &nbsp;
                  <WalletIcon />
                </div>
              </Button>
            </NavItem>
          ) : null}
          {isAuth ? (
            <React.Fragment>
              <div className="align-items-center">
                <SearchBar />
              </div>
              <Nav className="align-items-center">
                <NavItem>
                  <NavLink href="#" className="text-white">
                    My Wall
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="text-white">
                    TimeLine
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button
                    color="pink-600"
                    // className="mx-5"
                    style={{ backgroundColor: "#de3576" }}
                    onClick={() => {
                      dispatch(updateLoginState(false));
                      navigate("/");
                    }}
                    className="text-white"
                  >
                    Log out
                  </Button>
                </NavItem>
              </Nav>
            </React.Fragment>
          ) : null}
        </Navbar>
        <hr style={{ height: "5px", color: "white" }} />
      </div>
      )
    </div>
  );
};

export default Header;
