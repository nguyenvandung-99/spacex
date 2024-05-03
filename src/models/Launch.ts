export interface Launch {
  id: string;
  mission_name: string;
  details: string;
  launch_date_local: string;
  rocket: {
    rocket: {
      mass: {
        kg: number
      },
      first_stage: {
        fuel_amount_tons: number;
      },
      second_stage: {
        fuel_amount_tons: number;
      }
    }
  }
}

export interface LaunchData {
  launches: Launch[]
}