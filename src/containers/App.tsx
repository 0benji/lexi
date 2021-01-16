import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import React, {useState} from 'react';
import Home from '../components/Home';

export type Config = {
    showPronunciations: boolean,
    showDefinitions: boolean,
}

const defaultConfig: Config = {
    showPronunciations: true,
    showDefinitions: true,
};

export const ConfigContext = React.createContext<{ config: Config, setConfig: (config: Config) => void }>({
    config: defaultConfig,
    setConfig: () => {
    }
});


export default function App() {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#3f51b5",
            },
            contrastThreshold: 3,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset: 0.2,
        },
    });

    const [state, setStateUnsaved] = useState<Config>(defaultConfig);
    return <ConfigContext.Provider value={{config: state, setConfig: setStateUnsaved}}>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={1}>
                <Home/>
            </SnackbarProvider>
        </ThemeProvider>
    </ConfigContext.Provider>;

}
