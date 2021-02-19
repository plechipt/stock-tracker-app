import React, { useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
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
    minWidth: "50%",
    margin: "auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
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

const MiddleSide = ({ stockDescription: { description, website } }) => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const loremIpsum = lorem.generateSentences(5);

  return (
    <div className={classes.root}>
      <b>
        <Button
          className={classes.submitButton}
          onClick={() => setModalIsOpen(true)}
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
                <p>{loremIpsum}</p>
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
