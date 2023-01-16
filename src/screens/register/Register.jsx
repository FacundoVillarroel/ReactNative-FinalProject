import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import React, { useReducer, useState } from 'react';
import { isAndroid } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthError, signUp } from "../../store/auth.slice";
import { UPDATED_FORM } from '../../utils/form';
import { onInputChange } from '../../utils/form';
import mipetLogo from "../../../assets/mipetLogo.png";

import { Input } from '../../components';
import { styles } from "./styles";
import { COLORS } from '../../constants/colors';

const initialState = {
  email:{value: "", error: "", touched:false, hasError:true },
  password:{value: "", error: "", touched:false, hasError:true },
  isFormatValid:false,
}

const formReducer = (state, action) => {
  switch(action.type) {
    case UPDATED_FORM: 
    const { name, value, hasError, error, touched, isFormValid } = action.data;
    return {
      ...state,
      [name]:{
        ...state[name],
        value,
        hasError,
        error,
        touched,
      },
      isFormValid,
    };
    default:
      return state;
  }
}

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const authError = useSelector(state => state.auth.error);

  const onHandleSubmit = () => {
    if(formState.isFormValid){
      dispatch(signUp(formState.email.value, formState.password.value, setLoading));
    } else {
      Alert.alert("Hay campos inválidos", "ingresa tu email y contraseña", [{text:"Ok"}])
    }
  };

  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  const manageFocus = ( onFocus ) => {
    if (authError && onFocus)
    dispatch(resetAuthError())
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={isAndroid ? 'height' : 'padding'}
      enabled>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Image source={mipetLogo} style={styles.logo}/>
            <Text style={styles.title}>Mipet</Text>
          </View>
          <View style={styles.inputsContainer}>
              <Input 
                style={styles.textInput} 
                iconName={"ios-person"}
                onChangeText = { (text) => onHandleChangeInput(text,"email") }
                placeholder="Ingrese su Email"
                placeholderTextColor={COLORS.light}
                keyboardType="email-address"
                value={formState.email.value}
                hasError={formState.email.hasError || authError}
                error={formState.email.error || authError}
                touched={formState.email.touched}
                onFocus={() => manageFocus(true)}
                onBlur={() => manageFocus(false)}
              />
              <Input 
                style={styles.textInput} 
                iconName= "lock-closed"
                onChangeText = { (text) => onHandleChangeInput(text, "password") }
                placeholder="Ingrese su Contraseña"
                placeholderTextColor={COLORS.light}
                value={formState.password.value}
                hasError={formState.password.hasError}
                error={formState.password.error}
                touched={formState.password.touched}
                type="password"
              />
            <TouchableOpacity style={styles.buttonContainer} onPress={onHandleSubmit}>
              <Text style={styles.buttonText}>Registrarme</Text>
              {loading? <ActivityIndicator color={COLORS.details}/> : null}
            </TouchableOpacity>
          </View>
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}> ¿Ya tienes una cuenta?</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Login")}>
              <Text style={styles.buttonText}>Ir a Login!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
  )
}

export default Register