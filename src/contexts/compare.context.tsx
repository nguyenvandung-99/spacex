import { createContext, useState } from 'react';
import { Launch } from '../models/Launch';

interface CompareContextType {
  comparedLaunches: Launch[],
  setComparedLaunches: (launches: Launch[]) => void
}

export const CompareContext = createContext<CompareContextType>({
  comparedLaunches: [] as Launch[],
  setComparedLaunches: (launches: Launch[]) => {},
});

export const SelectionContextProvider = (props: React.PropsWithChildren) => {
  const setComparedLaunches = (comparedLaunches: Launch[]) => {
    setState({ ...state, comparedLaunches });
  };

  const initState: CompareContextType = {
    comparedLaunches: [],
    setComparedLaunches,
  };

  const [state, setState] = useState(initState);

  return (
    <CompareContext.Provider value={state}>
      {props.children}
    </CompareContext.Provider>
  );
};
