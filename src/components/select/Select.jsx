import {Picker} from '@react-native-picker/picker';
import React from 'react';

import { styles } from "./styles";

const Select = ({value, placeHolder, options, onChange, onChangeName, style  }) => {
  return (
    <Picker
      styles={{...styles.container, ...style}}
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) =>
      onChange(itemValue, onChangeName)
      }>
      <Picker.Item label={placeHolder} value=""/>
      {options.map(element => {
        return (<Picker.Item label={element.title} value={element.title} key={element.id} />)
      })}
    </Picker>
  )
}

export default Select