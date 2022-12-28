import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import React, { useReducer } from 'react';
import { isAndroid } from "../../utils";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/auth.slice";
import { UPDATED_FORM } from '../../utils/form';
import { onInputChange } from '../../utils/form';

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
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const onHandleSubmit = () => {
    dispatch(signUp(formState.email.value, formState.password.value));
  };

  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={isAndroid ? 'height' : 'padding'}
      enabled>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Titulo De La App</Text>
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
                hasError={formState.email.hasError}
                error={formState.email.error}
                touched={formState.email.touched}
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