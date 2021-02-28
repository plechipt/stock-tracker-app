import React, { useState } from "react";
import { fetchStockDescription } from "../api";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  submitButton: {
    fontWeight: "1000",
    background: "#1976D2",
    "&:hover": {
      background: "#1976D2",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "50%",
    margin: "auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    minWidth: "50%",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  descriptionContainer: {
    marginBottom: theme.spacing(3),
  },
  title: {
    fontWeight: "500",
    marginBottom: theme.spacing(-1),
  },
}));

const MiddleSide = ({ ticker, isNewStock, setIsNewStock }) => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");

  const handleOnClick = async () => {
    let [{ description, website }] = await fetchStockDescription(ticker);
    website = website.replace("com/", "com");

    setModalIsOpen(true);
    setIsNewStock(false);
    setDescription(description);
    setWebsite(website);
  };

  return (
    <div className={`${classes.root} button-info-container`}>
      <b>
        <Button
          className={classes.submitButton}
          onClick={() => (isNewStock ? handleOnClick() : setModalIsOpen(true))}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Stock Info
        </Button>
      </b>
      <Modal
        className={classes.modal}
        onClose={() => setModalIsOpen(false)}
        open={modalIsOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalIsOpen}>
          <div className={classes.paper}>
            <Typography variant="h5">Stock Info</Typography>
            <hr />
            <div className={classes.descriptionContainer}>
              <Typography className={classes.title}>Description</Typography>
              {description !== "" ? (
                <p id="transition-modal-description">{description}</p>
              ) : (
                <p>None</p>
              )}
            </div>
            <div className="modal-webstie">
              <Typography className={classes.title}>Website</Typography>
              {website !== "" ? (
                <p id="transition-modal-description">{website}</p>
              ) : (
                <p>None</p>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MiddleSide;
