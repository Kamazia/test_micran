import React, {useEffect, useState,useLayoutEffect,useRef} from 'react'
import './style.css'


const useSkipFirstRender = (fn, args) => {
  const isMounted = useRef(0);

  useEffect(() => {
    if (isMounted.current >= 1) {
      return fn();
    } else if (isMounted.current < 1){
      isMounted.current += 1
    }
  }, args)
}


const DevelopersList = ({setData,setInspectorList,setCurrent,setActive,control_data,current,setInspector,inspectorList,currentInspector}) => {

  useEffect(() => {get_control_data()},[]) // Используется при загрузке страницы
  useSkipFirstRender(() => {sortirovka()},[current])

  async function get_control_data(){ // Просто вынес в отдельную функцию callback для useEffect

    let data = await fetch('http://127.0.0.1:8000/api/control/')
          .then(response => response.json())

    setData(data.sort((a, b) => (a.id > b.id) ? 1 : -1))
  }

  const add = (val) => {
    setCurrent({'name':val.name,'id':val.id})
  }

  const sortirovka = () => {
    let myData = [].concat(control_data).sort((a, b) => (a.amount > b.amount) ? 1 : -1)
    setInspectorList(myData.filter(person => (person.name !== current.name) && (person.last_check !== current.name)))
    setInspector(0)
    setActive(true)
  }

  if (control_data.length === 0){
    return(<div className='empty'>
      <p>В базе данных нет записей</p>
      <p>Прейдите в панель администратора Django и добавьте записи в модель "Сведения о проверках"</p>
      </div>)
  } else{
    return (
      <div className='users'>
          {control_data.map((val,index) => (
            <div key={index}>
              <p> {val.name} </p>
              <p> {val.amount} </p>
              <p> {val.last_check} </p>
              <button onClick={() => add(val)} className='rocket'>
                <span role="img" aria-label="rocket" id="rocket">🚀</span>
              </button>
            </div>
          ))}
      </div>
    );
    }

}

export default DevelopersList