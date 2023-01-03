import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

import { COLORS } from '../../constants/colors';


const ModalComponent = ({setModalVisible ,modalVisible, onPress, title, option1, option2}) => {
  return (
      <Modal style={styles.modalContainer} visible={modalVisible} transparent animationType="slide">
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnCloseContainer} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btnCloseText}> X </Text>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.touchableContainer} onPress={() => onPress(option1.action)}>
              <Ionicons name={option1.icon} size={30} color={COLORS.primary} />
              <Text style={styles.btnText}>{option1.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableContainer} onPress={() => onPress(option2.action)}>
              <Ionicons name={option2.icon} size={30} color={COLORS.primary} />
              <Text style={styles.btnText}>{option2.text}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

export default ModalComponent