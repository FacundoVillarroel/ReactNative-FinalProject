import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import mipetLogo from "../../../assets/mipetLogo.png"


import { styles } from "./styles";
import { COLORS } from '../../constants/colors';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.editContainer}>
          <Ionicons name="ios-pencil" size={24} color={COLORS.details} />
        </TouchableOpacity>
        <Ionicons name="md-person-circle-outline" size={100} color={COLORS.details}  style={styles.image}/>
        <View style ={styles.dataContainer}>
          <Text style={styles.name}>Facundo Villarroel</Text>
          <Text style={styles.email}>facu@gmail.com</Text>
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={null}>
          <Text style={styles.optionText}>Mis Anuncios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={null}>
          <Text style={styles.optionText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={mipetLogo} style={styles.logo} />
        <Text style={styles.logoName}>Mipet</Text>
        <Text style={styles.logoText}>Busca, Encuentra y/o adopta!. </Text>
      </View>
    </View>
  )
}

export default Profile