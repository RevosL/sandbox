import { Provider } from "react-redux";
import store from "./store";
import GameContainer from './components/GameContainer';
import {BlockchainProvider} from './blockchain'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BlockchainProvider>
        <div className="App">
          <GameContainer></GameContainer>
        </div>
      </BlockchainProvider>
    </Provider>
  );
}

export default App;
