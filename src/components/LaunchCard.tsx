import { Box, Button, Card, Tooltip, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Launch } from '../models/Launch';
import { useContext } from 'react';
import { CompareContext } from '../contexts/compare.context';
import { ModalContext } from '../contexts/modal.context';

interface LaunchProp {
  launch: Launch;
}

export default function ({ launch }: LaunchProp) {
  const { comparedLaunches, setComparedLaunches } =
    useContext(CompareContext);
  const isSelected = () => comparedLaunches.some(({ id }) => id === launch.id);
  const addToLaunches = () =>
    setComparedLaunches([...comparedLaunches, launch]);
  const removeFromLaunches = () =>
    setComparedLaunches(comparedLaunches.filter(({ id }) => id !== launch.id));

  const { setSelectedLaunch } = useContext(ModalContext);
  const exploreLaunch = () => {
    setSelectedLaunch(launch);
  }

  return (
    <Card
      variant='outlined'
      sx={{ mb: 2, borderRadius: 4, width: 500, p: 2, display: 'flex', borderColor: 'grey' }}
    >
      <RocketLaunchIcon sx={{ mr: 2.5, ml: 1, my: 'auto' }} />
      <Box>
        <Typography variant='h5'>{launch.mission_name}</Typography>
        <Typography variant='subtitle1'>
          Launch date: {new Date(launch.launch_date_local).toDateString()}
        </Typography>
      </Box>
      <Box
        sx={{
          ml: 'auto',
          height: 'inherit',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Tooltip title='Info'>
        <Button sx={{ height: '100%' }}>
          <TravelExploreIcon color='primary' onClick={exploreLaunch} />
        </Button>
        </Tooltip>
        {isSelected() ? (
          <Tooltip title='Remove'>
            <Button sx={{ height: '100%' }} onClick={removeFromLaunches}>
              <RemoveIcon color='error' />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip title='Compare'>
            <Button sx={{ height: '100%' }} onClick={addToLaunches}>
              <AddIcon color='success' />
            </Button>
          </Tooltip>
        )}
      </Box>
    </Card>
  );
}
