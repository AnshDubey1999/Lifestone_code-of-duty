import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import StorageIcon from "@mui/icons-material/Storage";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { updateLoginState } from "../actions/AuthActions";
import { useNavigate } from "react-router-dom";
import PhotoCameraSharpIcon from "@mui/icons-material/PhotoCameraSharp";

const Slider = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  console.log("Is auth: ", isAuth);

  // conditionally show the slider
  const styles = {
    slider: {
      position: "absolute",
      visibility: isSliderOpen ? "visible" : "hidden",
      backgroundColor: "white",
      zIndex: "100",
      minWidth: "45%",
      height: "100vh",
      borderRight: "7px solid white",
      boxShadow: "0 0 10px rgba(255, 255, 255, 1)",
    },
    nav: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
    },

    header: {
      alignSelf: "center",
      display: "block",
      margin: "20px",
    },
    navLink: {
      margin: "10px 20px",
      padding: "10px 20px ",
      backgroundColor: "#de3576",
      borderRadius: "10px",
      // how to change the color of the text in the link on hover ?
    },

    footer: {
      alignSelf: "flex-end",
      marginTop: "auto",
      padding: "10px",
    },
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isAuth) {
    return (
      <>
        <div style={styles.slider} onClick={() => setIsSliderOpen(false)}>
          <StyledMenuOpen>
            <CloseSharpIcon />
          </StyledMenuOpen>
          <div style={styles.nav}>
            <div style={styles.header}>
              <div
                style={{
                  padding: "10px",
                  margin: "5px 10px",
                  border: "1px solid black",
                  borderRadius: "100%",
                }}
              >
                <PhotoCameraSharpIcon />
              </div>
              <div>$$$</div>
            </div>
            <div style={styles.navLink}>
              <Link to="/timeline">Timeline</Link>
            </div>
            <div style={styles.navLink}>
              <Link to="/timeline">Timeline</Link>
            </div>
            <div style={styles.footer}>
              <Button
                color="pink-600"
                style={{ backgroundColor: "#de3576" }}
                onClick={() => {
                  dispatch(updateLoginState(false));
                  navigate("/");
                }}
              >
                Log out
              </Button>
            </div>
          </div>
        </div>

        {!isSliderOpen && (
          <StyledMenuClose onClick={() => setIsSliderOpen(true)}>
            <StorageIcon />
          </StyledMenuClose>
        )}
      </>
    );
  }
};

export default Slider;

const StyledMenuOpen = styled("div")`
  display: flex;
  position: absolute;
  left: 101%;
  top: 20%;
  width: 40px;
  height: 40px;
  justify-content: center;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  align-items: center;
  background-color: #de3576;
`;

const StyledMenuClose = styled("div")`
  position: absolute;
  left: 1%;
  top: 20%;
  z-index: 100;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 100%;
  border-bottom-right-radius: 100%;
  align-items: center;
  background-color: #de3576;
`;
