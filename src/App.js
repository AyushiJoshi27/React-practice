import logo from './logo.svg';
import './App.css';
import Buttons from './Components/Buttons/Buttons';
import ButtonGroupCompo from './Components/Buttons/ButtonGroup';
import GroupOrientation from './Components/Buttons/VerticalGroup';

function App() {
  return (
    <>
      <GroupOrientation />
      <ButtonGroupCompo />
      <Buttons />
    </>
  );
}

export default App;
