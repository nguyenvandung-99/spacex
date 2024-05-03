import { useContext } from 'react';
import { ModalContext } from '../contexts/modal.context';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { totalEnergyJoules } from '../utils/calculateEnergy';

const style: SxProps = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function () {
  const { open, setOpen, selectedLaunch } = useContext(ModalContext);

  const handleClose = () => setOpen(false);
  const mass = () => String(selectedLaunch.rocket?.rocket.mass.kg) || 'Unknown';

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h5' component='h2'>
          {selectedLaunch.mission_name}
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          {selectedLaunch.details || 'No details'}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Rocket mass: {mass()} kg
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Total energy: {totalEnergyJoules(selectedLaunch)} Joules
        </Typography>
      </Box>
    </Modal>
  );
}
