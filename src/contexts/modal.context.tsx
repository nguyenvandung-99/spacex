import { createContext, useState } from 'react';
import { Launch } from '../models/Launch';

export const ModalContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
  selectedLaunch: {} as Launch,
  setSelectedLaunch: (selectedLaunch: Launch) => {},
});

export const ModalContextProvider = (props: React.PropsWithChildren) => {
  const setOpen = (open: boolean) => {
    setState({ ...state, open });
  };
  const setSelectedLaunch = (selectedLaunch: Launch) => {
    setState({ ...state, selectedLaunch, open: true });
  };

  const initState = {
    open: false,
    setOpen,
    selectedLaunch: {} as Launch,
    setSelectedLaunch,
  };

  const [state, setState] = useState(initState);

  return (
    <ModalContext.Provider value={state}>
      {props.children}
    </ModalContext.Provider>
  );
};
