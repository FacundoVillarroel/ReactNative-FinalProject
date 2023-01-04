import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import mipetLogo from "../../../assets/mipetLogo.png"
import { logout } from '../../store/auth.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../components';

import { styles } from "./styles";
import { COLORS } from '../../constants/colors';


const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false)
  const currentUser = useSelector( state => state.user.currentUser)

  const { email = "", name="Ingrese su nombre" } = currentUser

  const onLogout = (isConfirmed) => {
    isConfirmed ? dispatch(logout()) : setModalVisible(false)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileDataContainer}>
          <TouchableOpacity style={styles.editContainer}>
            <Ionicons name="ios-pencil" size={24} color={COLORS.details} />
          </TouchableOpacity>
          <Ionicons name="md-person-circle-outline" size={100} color={COLORS.details}  style={styles.image}/>
          <View style ={styles.dataContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("MyPosts")}>
          <Text style={styles.optionText}>Mis Anuncios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => setModalVisible(true)}>
          <Text style={styles.optionText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={mipetLogo} style={styles.logo} />
        <Text style={styles.logoName}>Mipet</Text>
        <Text style={styles.logoText}>Busca, Encuentra y/o adopta!. </Text>
      </View>
      <Modal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        onPress={onLogout}
        title={"¿Confirmar cierre de sesión?"}
        option1={{icon:"checkmark", text:"Sí", action:true}}
        option2={{icon:"close", text:"No", action:false}}
      />
    </View>
  )
}

export default Profile