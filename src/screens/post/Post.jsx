import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { styles } from './styles';
import { COLORS } from '../../constants/colors';

const Post = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.closeBtnContainer} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.closeBtnText}>X</Text>
        </TouchableOpacity>
        <View style={styles.optionsContainer}>
          <Text style={styles.title}>Nuevo Anuncio</Text>
          <Text style={styles.description}>Escoje la opción que se ajuste a lo que quieras anunciar</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={{...styles.optionTouchable, backgroundColor:COLORS.primary}} onPress={() => navigation.navigate("NewLostPet")}>
            <Text style={styles.optionTittle}>Animal Perdido</Text>
            <Text style={styles.optionDescription}>Si tu animal de compañia se a perdido o escapado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.optionTouchable, backgroundColor:COLORS.secondary}} onPress={() => navigation.navigate("NewFoundPet")}>
            <Text style={styles.optionTittle}>Animal Encontrado</Text>
            <Text style={styles.optionDescription}>Si has visto o encontrado a un animal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.optionTouchable, backgroundColor:COLORS.danger}} onPress={() => navigation.navigate("NewAdoptionPet")}>
            <Text style={styles.optionTittle}>Animal en adopción</Text>
            <Text style={styles.optionDescription}>Si necesitas que adopten a tu animal de compañia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Post