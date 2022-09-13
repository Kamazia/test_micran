import React from 'react'
import Cookies from 'js-cookie'
import './data_modal.css'


async function ok ({setActive,current,currentInspector,inspectorList,setData}){
    const csrftoken = Cookies.get('csrftoken');
    let put_info = await
      fetch(`http://127.0.0.1:8000/api/assign_check/${current.id}`,{
        method:"PUT",
        headers:{
          "X-CSRFToken": csrftoken,
          'Content-Type':'application/json'
        },
        body:JSON.stringify(inspectorList[currentInspector])
      })


    let data = await fetch('http://127.0.0.1:8000/api/control/')
            .then(response => response.json())
    setData(data.sort((a, b) => (a.id > b.id) ? 1 : -1))

    setActive(false)
  }

function next ({setInspector,currentInspector}){
    setInspector(currentInspector+1)
  }

  function again ({setInspector}){
    setInspector(0)
  }

const DataModel = ({current,currentInspector,inspectorList,setActive,setInspector,setCurrent,setData}) =>{
    if(inspectorList[currentInspector] === undefined){
      return(<div>
          <p>Больше некому проверять. Показать список заново?</p>
          <div className='Button'>
            <button onClick={() => again({setInspector})}> Заново</button><button className='Cancel' onClick={() => setActive(false)}>Отмена</button>
          </div>
        </div>)
    } else{
    return(
        <div>
          <p>Разработчику: {current.name}</p>
          <p>Проверит: {inspectorList[currentInspector].name}</p>
          <div className='Button'>
            <div className='Button_left'>
              <button className='Ok' onClick={() => ok({setActive,setCurrent,current,currentInspector,inspectorList,setData})}>ok</button>
              <button className='Next' onClick={() => next({currentInspector,setInspector})}>далее</button>
            </div>
            <button className='Cancel' onClick={() => setActive(false)}>Отмена</button>
          </div>
        </div>
    )
    }
  }

  export default DataModel