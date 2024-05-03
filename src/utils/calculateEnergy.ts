import { Launch } from '../models/Launch';

export const totalEnergyJoules = (launch: Launch) => {
  if (!launch.rocket) return 0;
  const totalMass =
    launch.rocket?.rocket.mass.kg +
    (launch.rocket.rocket.first_stage.fuel_amount_tons +
      launch.rocket.rocket.second_stage.fuel_amount_tons) *
      1000;
  return (totalMass * 15 * 1.35 * 10) ^ 7;
};
