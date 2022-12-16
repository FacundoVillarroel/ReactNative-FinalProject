import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { isAndroid } from "../../utils";
import { Ionicons } from "@expo/vector-icons"

import { styles } from "./styles";
import { COLORS } from '../../constants/colors';

const Register = () => {
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
            <View style={styles.inputContainer}>
              <Ionicons style={styles.icon} name="ios-person" size={25} color={COLORS.primary}/>
              <TextInput 
                style={styles.textInput} 
                placeholder="Ingrese su Email"
                placeholderTextColor={COLORS.light}
              />
            </View>
            <View style={styles.inputContainer}>
              <Ionicons style={styles.icon} name="lock-closed" size={25} color={COLORS.primary}/>
              <TextInput 
                style={styles.textInput} 
                placeholder="Ingrese su Contraseña"
                placeholderTextColor={COLORS.light}
              />
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={null}>
              <Text style={styles.buttonText}>Registrarme</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.promptContainer}>
            <Text style={styles.promptText}> ¿Ya tienes una cuenta?</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={null}>
              <Text style={styles.buttonText}>Logueate!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotContainer} onPress={null}>
              <Text style={styles.forgotText}>Recuperar contraseña olvidada</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
  )
}

export default Register