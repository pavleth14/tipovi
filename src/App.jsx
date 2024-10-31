import './App.css'
import Sliders from './components/sliders/Sliders';
import { setDoorType, calculateValue } from './features/doorSlice'
import { useDispatch, useSelector } from 'react-redux'


function App() {  

  const dispatch = useDispatch();
  const type = useSelector((state) => state.doorSlice.doorType);
  const price = useSelector((state) => state.doorSlice.value);

  const handleSelect = (doorType) => {
    dispatch(setDoorType(doorType)); 
    dispatch(calculateValue()); 
}

  return (
    <>
      <div onClick={() => handleSelect('Type 1')} className='divDoorType'>1</div>
      <div onClick={() => handleSelect('Type 2')} className='divDoorType'>2</div>
      <div onClick={() => handleSelect('Type 3')} className='divDoorType'>3</div>
      <Sliders />
      {type && <p>Cena: {price.toFixed(2)} dinara</p>}
    </>
  )
}

export default App
