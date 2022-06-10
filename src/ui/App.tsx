import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Link } from 'react-router-dom';

import { light } from './styles/themes';
import BaseStyles from './styles/BaseStyles';
import NormalizeStyles from './styles/NormalizeStyles';
import FontStyles from './styles/FontStyles';
import ViewsEditor from './views/Editor/Editor';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(light);

  return (
    <ThemeProvider theme={currentTheme}>
      <NormalizeStyles />
      <BaseStyles />
      <FontStyles />
      
      {/* <Link to='/input'>Input</Link> */}

      <Routes>
        <Route path='/' element={<ViewsEditor />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
