import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

/*
    Reference Link : https://reach.tech/dialog/
*/

function ShowDialog(props) {
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

  return (
    <>
        <div>
            <button onClick={open}>Show Dialog</button>
        </div>
        <Dialog isOpen={showDialog} onDismiss={close}>
            <p>This is a dialog message. How are you bro?</p>
            <button onClick={close}>Close</button>
        </Dialog>
    </>
  )
}

export default ShowDialog