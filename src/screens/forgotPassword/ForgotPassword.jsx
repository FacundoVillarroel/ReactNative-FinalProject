import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
import React, { useReducer, useState } from 'react';
import { isAndroid, resetPassword } from "../../utils";
import { UPDATED_FORM, onInputChange } from '../../utils/form';
import mipetLogo from "../../../assets/mipetLogo.png";

import { Input } from '../../components';
import { styles } from "./styles";
import { COLORS } from '../../constants/colors';

const initialState = {
  email:{value: "", error: "", touched:false, hasError:true },
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

const ForgotPassword = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const onHandleSubmit = () => {
    if(formState.isFormValid){
      resetPassword(formState.email.value, setLoading, navigation)
    } else {
      Alert.alert("El email ingresado no es válido","Verifica el email por favor.",[{text:"Ok."}])
    }
  };

  const onHandleChangeInput = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={isAndroid ? 'heigth' : 'padding'}
      enabled>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Image source={mipetLogo} style={styles.logo}/>
            <Text style={styles.title}>Mipet</Text>
          </View>
          <Text style={styles.subTitle}>¿Olvidó su contraseña?</Text>
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
            <TouchableOpacity style={styles.buttonContainer} onPress={onHandleSubmit}>
              <Text style={styles.buttonText}>Enviar link</Text>
              {loading? <ActivityIndicator color={COLORS.details}/> : null}
            </TouchableOpacity>
          </View>
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}> ¿No tienes una cuenta?</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("Register")}>
              <Text style={styles.buttonText}>Ir al Registro!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
  )
}

export default ForgotPassword