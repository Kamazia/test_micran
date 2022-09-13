import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import DevelopersList from './pages/Develops_list'
import Data_in_modal from './components/data_modal/Data_in_modal'
import Modal from './components/modal/modal';


function App() {
  const [modalActive,setModalActive] = useState(false) // Состояние модального окна
  const [control_data,setData] = useState([]) // Переменная control_data хранит информацию, которая устанавливается setData
  const [current,setCurrent] = useState('') // кто выбран кнопкой
  const [inspectorList,setInspectorList] = useState([]) // список тех кто может проверить
  const [currentInspector,setInspector] = useState([]) // кто будет проверять


  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <DevelopersList setData={setData} control_data = {control_data} setActive = {setModalActive} setInspectorList={setInspectorList} setCurrent={setCurrent} current={current} setInspector={setInspector} inspectorList={inspectorList} currentInspector={currentInspector}/>
      </div>
      {modalActive && <Modal active={modalActive} setActive={setModalActive}> <Data_in_modal current={current} currentInspector={currentInspector} inspectorList={inspectorList} setActive={setModalActive} setInspector={setInspector} setCurrent={setCurrent} setData={setData}/> </Modal>}
    </div>
  )
}

export default App;