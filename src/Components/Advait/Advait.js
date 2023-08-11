import React, { Component } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class Advait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
        const style = {
            bgcolor: 'red',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            justifyContent: 'center',
          };
    }
   
    handleClose = () => {
        this.setState({ open: false })
        this.props.fnRef();
    }
    render() {
        return (
            //   A modal that says "Adwait is a Chutiya" and has a button that says "I agree"

            <div>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={{display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Advait is a Chutiya.
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            #Mahesh Dalle
                        </Typography>
                        <Button variant ="contained" onClick={this.handleClose} style={{width:'100px'}}>I agree</Button>
                    </Box>
                </Modal>
            </div>

        )
    }
}
