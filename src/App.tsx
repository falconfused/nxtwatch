import './App.css';
import { ThemeStore } from './stores/ThemeStore/ThemeStore';
import { Provider } from 'mobx-react';
import NxtWatchApp from './components/NxtWatchApp/NxtWatchApp';

const App = () => {
  const themeStore = new ThemeStore();
  return (
    <Provider themeStore={themeStore}><NxtWatchApp /></Provider>
  );
}

export default App;
