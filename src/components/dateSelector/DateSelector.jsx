import React from 'react';
import DatePicker from 'react-native-modern-datepicker';

import { styles } from "./styles";

const DateSelector = ({onSelectDate, style}) => {
  const currentDate = (new Date()).toISOString().split('T')[0]
  return (
    <DatePicker 
      style={{...styles.container, ...style}}
      maximumDate={currentDate}
      onSelectedChange={(date) => onSelectDate(date)}
    />
  )
}

export default DateSelector