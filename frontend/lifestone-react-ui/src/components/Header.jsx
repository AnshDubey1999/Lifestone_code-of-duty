import React from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
  NavItem,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import WalletIcon from "@mui/icons-material/Wallet";
import shortLogoWithText from "../images/shortLogoWithText.png";
import { updateLoginState } from "../actions/AuthActions";

const SearchBar = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Input
            placeholder="Search"
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
        <Navbar light className="d-flex align-items-center">
          <NavbarBrand href="/" style={{ color: "white" }} alt="Logo">
            <img
              src={shortLogoWithText}
              style={{ height: "60px" }}
              alt="Our beautiful logo"
            />
          </NavbarBrand>
          <NavItem>
            <SearchBar/>
          </NavItem>
          {!isAuth ? (
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
          ) : null}
          {isAuth ? (
            <Button
              color="pink-600"
              className="mx-5"
              style={{ backgroundColor: "#de3576" }}
              onClick={() => {
                dispatch(updateLoginState(false));
                navigate("/");
              }}
            >
              Log out
            </Button>
          ) : null}
        </Navbar>
        <hr style={{ height: "5px", color: "white" }} />
      </div>
      )
    </div>
  );
};

export default Header;
