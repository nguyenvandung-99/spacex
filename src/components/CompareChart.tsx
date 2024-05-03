import { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { CompareContext } from '../contexts/compare.context';
import { totalEnergyJoules } from '../utils/calculateEnergy';
import { ChartData } from 'chart.js';
import Card from '@mui/material/Card';
import { SxProps } from '@mui/material';

const style: SxProps = {
  mb: 2,
  borderRadius: 4,
  p: 2,
  borderColor: 'grey',
  width: '100%',
  position: 'sticky',
  top: 16,
  height: 'fit-content',
};

export default function () {
  const { comparedLaunches } = useContext(CompareContext);

  const data = (): ChartData<'bar'> => ({
    labels: comparedLaunches.map(({ mission_name }) => mission_name),
    datasets: [
      {
        label: 'Compare energy consumption of launches (J)',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: comparedLaunches.map(totalEnergyJoules),
      },
    ],
  });

  return (
    <Card variant='outlined' sx={style}>
      <Bar data={data()} />
    </Card>
  );
}
