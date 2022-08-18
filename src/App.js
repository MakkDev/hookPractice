import CallbackHook from "./components/CallbackHook";
import EffectHook from "./components/EffectHook";
import MemoHook from "./components/MemoHook";
import ReduceHook from "./components/ReduceHook";
import RefHook from "./components/RefHook";
import './index.css';


function App() {
  return (
    <div className="App">
    <EffectHook/>
    <CallbackHook/>
    <MemoHook/>
    <ReduceHook/>
    <RefHook/>
    </div>
  );
}

export default App;
