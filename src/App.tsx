import './App.css';
import { ThemeStore } from './stores/ThemeStore/ThemeStore';
import { Provider } from 'mobx-react';
import CheckApp from './components/NxtWatchApp/NxtWatchApp';

const App = () => {
  const themeStore = new ThemeStore();
  return (
    <Provider themeStore={themeStore}><CheckApp /></Provider>
  );
}

export default App;
