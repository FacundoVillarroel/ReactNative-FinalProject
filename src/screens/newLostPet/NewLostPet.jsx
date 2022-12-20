import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Input } from '../../components';
import { MaterialIcons } from '@expo/vector-icons'; 

import { styles } from "./styles";

const NewLostPet = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <ScrollView>

        {/* Fotos */}

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Añade Fotos</Text>
          <View style={styles.photosContainer}>
            <TouchableOpacity style={styles.photoContainer}>
              <Text style={styles.addPhoto}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoContainer}>
              <Text style={styles.addPhoto}> + </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoContainer}>
              <Text style={styles.addPhoto}> + </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.photoDescription}>Las fotos deben describir el animal para ayudar a identificarlo</Text>
        </View>

        {/* Titulo */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Título</Text>
          <Input style={styles.input} placeholder="Introduce un título breve"/>
        </View>

        {/* Tipo de animal */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Tipo de animal</Text>
          <Input style={styles.input} placeholder="Escoge un tipo de animal"/>
        </View>

        {/* Raza */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Raza</Text>
          <Input style={styles.input} placeholder="Introduce una raza"/>
        </View>

        {/* Sexo */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Sexo</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity style={styles.touchableGender}><Text>Macho</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableGender}><Text>Hembra</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableGender}><Text>No lo sé</Text></TouchableOpacity>
          </View>
        </View>

        {/* Apariencia */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Apariencia</Text>
          <View style={styles.appearanceContainer}>
            <TouchableOpacity style={styles.touchableAppearance}><Text>Pelo</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableAppearance}><Text>Ojos</Text></TouchableOpacity>
          </View>
        </View>

        {/* Identificacion */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Identificación</Text>
          <View style={styles.idContainer}>
            <TouchableOpacity style={styles.checkBox}><MaterialIcons name="check-box-outline-blank" style={styles.checkIcon}/></TouchableOpacity>
            <Text style={styles.idText}> Collar identificador</Text>
          </View>
          <View style={styles.idContainer}>
            <TouchableOpacity style={styles.checkBox}><MaterialIcons name="check-box-outline-blank" style={styles.checkIcon}/></TouchableOpacity>
            <Text style={styles.idText}> Chip Identificador </Text>
          </View>
        </View>

        {/* Cuando */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>¿Cúando ha sucedido?</Text>
          <Input style={styles.input} placeholder="Seleccione una fecha"/>
        </View>

        {/* Zona */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>¿En qué zona se ha perdido?</Text>
          <TouchableOpacity style={styles.lossZone}></TouchableOpacity>
        </View>

        {/* Descripcion */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Añade una descripción</Text>
          <Input style={styles.input} placeholder="Descripción (opcional)"/>
        </View>

        {/* Telefono de contacto */}
        <View style={{...styles.inputContainer, ...styles.bottom}}>
          <Text style={styles.inputTitle}>Teléfono de contacto</Text>
          <Input style={styles.input} placeholder="Teléfono para contactar"/>
        </View>

      </ScrollView>
      <TouchableOpacity style={styles.publishBtnContainer}>
        <Text style={styles.publishText}>Publicar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewLostPet