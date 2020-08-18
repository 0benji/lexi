import React, { useState } from 'react';
import Home from '../components/Home';

export type Config = {
  showPronunciations: boolean,
  showDefinitions: boolean,
}

const defaultConfig: Config = {
  showPronunciations: true,
  showDefinitions: true,
};

export const ConfigContext = React.createContext<{config: Config, setConfig: (config: Config) => void}>({config: defaultConfig, setConfig: () => {}});


export default function App() {

  const [state, setStateUnsaved] = useState<Config>( defaultConfig );

  const setConfig = (config: Config) => {
    setStateUnsaved(config);
  }

  return <ConfigContext.Provider value={{ config: state, setConfig }}>
    <Home/>
  </ConfigContext.Provider>;

}
