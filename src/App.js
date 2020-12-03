import React from 'react'

import IconPractical from './components/IconPractical'
import ModalPractical from './components/ModalPractical'
import TooltipPractical from './components/TooltipPractical'
import CountUpPractical from './components/CountUpPractical'
import DatePicker from './components/DatePickerPractical'
import ToastNotification from './components/ToastNotification'
import './App.css';

function App() {
  return (
    <div style={{padding: '3rem'}}>
      <h3>Icons</h3>
      <IconPractical/>
      <hr/>
      <h3>Toast Notification</h3>
      <ToastNotification/>
      <hr/>
      <h3>Modal</h3>
      <ModalPractical/>
      <hr/>
      <h3>Tooltips</h3>
      <TooltipPractical/>
      <hr/>
      <h3>CountUp</h3>
      <CountUpPractical/>
      <hr/>
      <h3>Date Picker</h3>
      <DatePicker/>
      <hr/>
    </div>
  );
}

export default App;
