import React, { useState } from "react";

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
    background: "#1976D2",
    "&:hover": {
      background: "#1976D2",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MiddleSide = () => {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Button
        type="submit"
        className={classes.submitButton}
        variant="contained"
        color="primary"
        size="large"
      >
        Company Info
      </Button>
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
            <Typography variant="h5">Company Info</Typography>
            <hr />
            <p id="transition-modal-description">sdads</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default MiddleSide;
