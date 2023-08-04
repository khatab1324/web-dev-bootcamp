import './App.css'
import Counter from './Counter'
import Dumbo from './dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojeClicker from './EmojeClickerArray'
import ScoreKeeper2 from './ScoreKeeperExersice'
function App() {
  return <div>
    {/* <Counter/>
    <Dumbo/> */}
    {/* <ScoreKeeper numPlayer={10} target={5}/> */}
    {/* <EmojeClicker/> */}
    <ScoreKeeper2 numPlayers={10} target={5}/>
  </div>
}

export default App
