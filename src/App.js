import { ThemeProvider } from '@material-ui/core';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import MainLayout from './layout/Main';

import theme from './theme';

import HomePage from './components/pages/HomePage';
import ResultPage from './components/pages/ResultPage';
import AboutPage from './components/pages/AboutPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <MainLayout>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/result" component={ResultPage}></Route>
            <Route exact path="/about" component={AboutPage}></Route>
          </MainLayout>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
