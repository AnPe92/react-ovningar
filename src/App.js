import React, { useState } from 'react';
import './App.css';
import DisplayApiData from './placeHoderAPI.js'

function Button(props) {

  return <>
    <button onClick={props.handler}>{props.title}</button>
  </>
}

class ButtonTwo extends React.Component {

  render() {
    return <>
      <button onClick={this.props.handler}>{this.props.title}</button>
    </>
  }
}

function Modal(props) {

  return <div className='Modal-background'>
    <div className='Modal'>
      <h1>1</h1>
      {props.children}
    </div>
  </div>
}

function App() {

  let [showModal, setShowModal] = useState(false)
  const handleModal = () => { setShowModal(!showModal) }

  return (
    <div className="App">
      <Button
        title={"Show Modal"}
        handler={handleModal}
      />
      <ButtonTwo
        title={"Second button"}
        handler={() => console.log("Clicked button two")}
      />
      {showModal && (<Modal>
        <h1>Hejsan</h1>
        <input></input>
        <button>Clickied ddikck</button>
        <button onClick={handleModal}>Close this shit</button>
      </Modal>)}
      <DisplayApiData />

    </div>
  );
}

export default App;
