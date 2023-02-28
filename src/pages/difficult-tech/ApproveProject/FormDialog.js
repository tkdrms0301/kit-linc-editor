import { Button, DialogTitle, Dialog, DialogContent, TextField, DialogActions, InputLabel, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkOpen, checkClose } from '../../../store/reducers/difficult-Tech/approveProject';

export default function FormDialog({ open, handleClose, rejectReasonRef, onSubmitRejectProject }) {
    // const [checkOpen, setCheckOpen] = useState(false);
    // const [rejectReason, setRejectReason] = useState('');
    // const handleCheckOpen = () => {
    //     setCheckOpen(true);
    //     setRejectReason(rejectReasonRef.current.value);
    // };
    // const handleCheckClose = () => {
    //     setCheckOpen(false);
    // };
    const dispatch = useDispatch();
    const isCheckOpen = useSelector((state) => state.checkInfo.checkOpen);
    const [rejectReason, setRejectReason] = useState('');
    // const rejectReason = useSelector((state) => state.checkInfo.rejectReason);
    const onChangeRejectReason = (e) => {
        setRejectReason(e.target.value);
    };
    const handleCheckOpen = () => {
        dispatch(checkOpen(rejectReason));
    };
    const handleCheckClose = () => {
        dispatch(checkClose());
    };
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>프로젝트 거절</DialogTitle>
                <DialogContent>
                    <InputLabel>프로젝트 거절 사유</InputLabel>
                    <TextField
                        autoFocus
                        margin="dense"
                        type="email"
                        sx={{ width: '400px' }}
                        variant="outlined"
                        multiline
                        rows={5}
                        inputRef={rejectReasonRef}
                        onBlur={onChangeRejectReason}
                    />
                    <Dialog open={isCheckOpen} onClose={handleCheckClose}>
                        <DialogTitle>다음 같은 사유로 거절하시겠습니까?</DialogTitle>
                        <DialogContent>
                            <Grid>
                                <Typography variant="body1">{rejectReason}</Typography>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCheckClose}>취소</Button>
                            <Button variant="contained" onClick={onSubmitRejectProject}>
                                확인
                            </Button>
                        </DialogActions>
                    </Dialog>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button variant="contained" onClick={handleCheckOpen}>
                        거절
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
