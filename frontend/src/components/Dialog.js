import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Card } from '@mui/material';

export default function MovieDialog({ open, setOpen, movieDetail }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth='sm'
                fullWidth
            >
                <DialogTitle id="alert-dialog-title">
                    Movie Details
                </DialogTitle>
                <DialogContent>
                    <Card sx={{ textAlign: 'center' }} >
                        <img style={{ height: 100, width: 100, marginTop: '20px' }} src={movieDetail.image} alt={movieDetail.title} />
                        <h2>{movieDetail.title}</h2>
                        <p>{movieDetail.genre?.join(', ')}</p>
                        <p>Rating: {movieDetail.rating}</p>
                        <p>{movieDetail.year}</p>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}