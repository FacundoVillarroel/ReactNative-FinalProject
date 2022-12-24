import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

import { COLORS } from '../../constants/colors';


const ModalComponent = ({setModalVisible ,modalVisible, onPress}) => {
  return (
      <Modal style={styles.modalContainer} visible={modalVisible} transparent animationType="slide">
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnCloseContainer} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btnCloseText}> X </Text>
          </TouchableOpacity>
          <Text style={styles.title}>Elige una opción</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.touchableContainer} onPress={() => onPress("camera")}>
              <Ionicons name="camera" size={30} color={COLORS.primary} />
              <Text style={styles.btnText}>Cámara</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableContainer} onPress={() => onPress("gallery")}>
              <Ionicons name="image" size={30} color={COLORS.primary} />
              <Text style={styles.btnText}>Galeria</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

export default ModalComponent