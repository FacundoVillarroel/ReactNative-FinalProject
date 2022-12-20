import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from '../../constants/colors';
import { styles } from './styles';

const Input = ({
  children,
  value,
  style,
  onChangeText,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  iconName = iconName || "",
  type,
  ...props
}) => {

  const [hidePassword, setHidePassword] = useState(type === "password" ? true : false)
  const toggleHidePassword = () => {
    setHidePassword(!hidePassword)
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Ionicons style={styles.icon} name={iconName} size={25} color={COLORS.primary}/>
        <View style= {styles.inputContainer}>
          <TextInput 
            {...props}
            style={{...styles.textInput, ...style}} 
            value={value}
            onChangeText = { onChangeText }
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor= { placeholderTextColor }
            secureTextEntry={hidePassword}
          />
        </View>
        {type === "password" ? (
          <Ionicons style={styles.icon} name={hidePassword ? "eye": "eye-off"} size={25} color={COLORS.primary} onPress={toggleHidePassword}/>
        ) : null}
      </View>
      {hasError && touched ? (
        <View style={{...styles.messageContainer,...style}}>
          <Text style= {styles.message}>{error}</Text>
        </View>
      ): null}
    </View>
  );
};

export default Input;
