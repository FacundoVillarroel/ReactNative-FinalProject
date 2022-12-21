import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Input } from '../../components';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { COLORS } from '../../constants/colors';
import { styles } from "./styles";

const NewLostPet = ({ navigation }) => {
  const [type, setType] = useState("");
  const [collar, setCollar] = useState(false);
  const [chip, setChip] = useState(false);
  const [gender, setGender] = useState("")

  const handleCheckBox = ( name ) => {
    name === "collar" ? setCollar(!collar) : setChip(!chip)
  }

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
          <Picker
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) =>
              setType(itemValue)
            }>
            <Picker.Item label="Seleccione el tipo de mascota" value="" />
            <Picker.Item label="Perro" value="perro" />
            <Picker.Item label="Gato" value="gato" />
          </Picker>
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
            <TouchableOpacity style={styles.touchableGender} onPress={() => setGender("male")}><Ionicons name="male" size={24} color={gender === "male" ? COLORS.primary : "black"} /><Text>Macho</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableGender} onPress={() => setGender("female")}><Ionicons name="female" size={24} color={gender === "female" ? COLORS.primary :"black"} /><Text>Hembra</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableGender} onPress={() => setGender("")}><Ionicons name="male-female-sharp" size={24} color={!gender ? COLORS.primary : "black"} /><Text>No lo sé</Text></TouchableOpacity>
          </View>
        </View>

        {/* Apariencia */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Apariencia</Text>
          <View style={styles.appearanceContainer}>
            <TouchableOpacity style={styles.touchableAppearance}><MaterialIcons name="grass" size={24} color="black" /><Text>Pelo</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableAppearance}><Ionicons name="eye-outline" size={24} color="black" /><Text>Ojos</Text></TouchableOpacity>
          </View>
        </View>

        {/* Identificacion */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Identificación</Text>
          <View style={styles.idContainer}>
            <TouchableOpacity style={styles.checkBox} onPress={() => handleCheckBox("collar")}><MaterialIcons name={collar ? "check-box" : "check-box-outline-blank"} color={COLORS.primary} style={styles.checkIcon}/></TouchableOpacity>
            <Text style={styles.idText}> Collar identificador</Text>
          </View>
          <View style={styles.idContainer}>
            <TouchableOpacity style={styles.checkBox} onPress={() => handleCheckBox("chip")}><MaterialIcons name={chip ? "check-box" : "check-box-outline-blank"} color={COLORS.primary} style={styles.checkIcon}/></TouchableOpacity>
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