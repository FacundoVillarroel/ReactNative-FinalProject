import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useReducer } from 'react';
import { ImageSelector, Input } from '../../components';
import { Ionicons } from '@expo/vector-icons'; 

import { styles } from "./styles";
import { onInputChange, UPDATED_FORM } from '../../utils/form';
import { COLORS } from '../../constants/colors';

const initialState = {
  image:{value:"", error:"", touched:false, hasError: false},
  name:{value:"", error:"", touched:false, hasError: true},
  isFormValid:false
}

const FormReducer = (state,action) => {
  switch(action.type){
    case UPDATED_FORM:
      const {value, name, error, touched, hasError, isFormValid } = action.data
      return{
        ...state,
        [name]:{
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid
      }
    default:
      return state
  }
}

const ModifyProfile = ({navigation}) => {
  const [formState, dispatchFormState] = useReducer(FormReducer, initialState)

  const onHandleChangeInput = (value, name) => {
    onInputChange(name, value, dispatchFormState, formState)
  };

  const onHandleSubmit = () => {
    if (formState.isFormValid){

    } else {
      Alert.alert("Debe ingresar su nombre")
    }
  }

  const onImagePicked = (uri) => {
    onHandleChangeInput( uri, "image")
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageSelector 
          children={<Ionicons name="ios-person" size={50} color={COLORS.white} />} 
          onImagePicked={onImagePicked} 
          style={styles.imageSelector} 
          imageStyle={styles.image}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Ingrese su nombre</Text>
        <Input
          style={styles.input}
          placeholder="Introduce tu nombre"
          value={formState.name.value}
          hasError={formState.name.hasError}
          error={formState.name.error}
          touched={formState.name.touched}
          onChangeText={(text) => onHandleChangeInput(text, "name")}
        />
      </View>
      <TouchableOpacity style={styles.btnConfirmContainer} onPress={onHandleSubmit}>
        <Text style={styles.btnText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCancelContainer} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.btnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ModifyProfile