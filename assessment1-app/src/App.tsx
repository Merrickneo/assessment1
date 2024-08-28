import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header/Header';
import { Modes } from './Modes';
import './App.css';
import { UserView } from './components/UserView/UserView';
import InputAuthor from './components/InputAuthor/InputAuthor';

const App: React.FC = () => {
    const [mode, setMode] = useState<Modes>(Modes.Input);

    return (
        <ChakraProvider>
            <Header mode={mode} setMode={setMode} />
            {mode === Modes.Input ? <InputAuthor /> : <UserView />}
        </ChakraProvider>
    );
};

export default App;
