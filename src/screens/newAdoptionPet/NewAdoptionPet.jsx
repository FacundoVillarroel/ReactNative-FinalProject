import { View, Text, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useReducer, useState } from 'react';
import { Input, ImageSelector, Select, LocationSelector } from '../../components';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { CATEGORIES } from "../../constants/data/categories";
import { uploadImage } from '../../utils';

import { COLORS } from '../../constants/colors';
import { styles } from "./styles";
import { onInputChange, UPDATED_FORM } from '../../utils/form';
import { useDispatch, useSelector } from 'react-redux';
import { savePet } from '../../store/pet.slice';

const initialState = {
  image:{value: [], error: "", touched:false, hasError:true },
  name:{value: "", error: "", touched:false, hasError:true },
  categoryId:{value: "", error: "", touched:false, hasError:true },
  breed:{value: "", error: "", touched:false, hasError:true },
  gender:{value: "", error: "", touched:false, hasError:false },
  hair:{value: "", error: "", touched:false, hasError:true },
  eyes:{value: "", error: "", touched:false, hasError:true },
  chip:{value: false, error: "", touched:false, hasError:false },
  collar:{value: false, error: "", touched:false, hasError:false },
  lossZone:{value: "", error: "", touched:false, hasError:true },
  description:{value: "", error: "", touched:false, hasError:false },
  contact:{value: "", error: "", touched:false, hasError:true },
  isFormValid: false,
}

const formReducer = (state, action) => {
  switch(action.type){
    case UPDATED_FORM:
      const {name, value, hasError, error, touched, isFormValid} = action.data;
      return{
        ...state,
        [name]:{
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      }
    default: 
      return state;
    }
}

const NewFoundPet = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer( formReducer, initialState)
  const [loading, setLoading] = useState(false)

  const [appearanceToSelect, setAppearanceToSelect] = useState("");
  const currentUser = useSelector(state => state.user.currentUser);
  const authorId = currentUser.userId;

  const onHandleChangeInput = (value, name) => {
    onInputChange(name, value, dispatchFormState, formState)
  };

  const onHandleSubmit = async () => {
    if (formState.isFormValid) {
      setLoading(true)
      let images = []
      for (let i = 0; i < formState.image.value.length; i++) {
        const imageUrl = formState.image.value[i];
        images.push(await uploadImage(imageUrl))
      }
      const pet = {
        image: images,
        name: formState.name.value,
        categoryId: formState.categoryId.value,
        breed: formState.breed.value,
        gender: formState.gender.value,
        hair: formState.hair.value,
        eyes: formState.eyes.value,
        chip: formState.chip.value,
        collar: formState.collar.value,
        date: (new Date()).toLocaleDateString(),
        lossZone: formState.lossZone.value,
        description: formState.description.value,
        contact: formState.contact.value,
        status:"adoption",
        authorId
      }
      dispatch(savePet(pet))
      setLoading(false); 
      Alert.alert("Publicado correctamente !", "encontrará el anuncio en la seccion de 'inico'",[{text:"Ok"}]) 
      navigation.navigate("Post")
      navigation.navigate("Home")
    } else {
      Alert.alert("Formulario inválido", "Faltan campos por completar o hay campos erroneos", [{text:"ok"}])
    }
  }

  const handleCheckBox = ( name ) => {
    name === "collar" ? onHandleChangeInput(!formState.collar.value, "collar") : onHandleChangeInput(!formState.chip.value, "chip")
  }

  const onSetAppearance = (name, option) => {
    name === "hair" ? onHandleChangeInput(option, "hair") : onHandleChangeInput(option, "eyes")
    setAppearanceToSelect("")
  }

  const onImagePicked = (image) => {
    onHandleChangeInput( image, "image")
  }

  return (
    <View style={styles.container}>

      <ScrollView>

        {/* Fotos */}

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Añade Fotos</Text>
          <View style={styles.photosContainer}>
            <ImageSelector children={<Text style={styles.text}> + </Text>} onImagePicked={onImagePicked} index={0}/>
            <ImageSelector children={<Text style={styles.text}> + </Text>} onImagePicked={onImagePicked} index={1}/>
            <ImageSelector children={<Text style={styles.text}> + </Text>} onImagePicked={onImagePicked} index={2}/>
          </View>
          <Text style={styles.photoDescription}>Las fotos deben describir el animal para ayudar a identificarlo</Text>
        </View>

        {/* Titulo */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Título</Text>
          <Input 
            style={styles.input} 
            placeholder="Introduce un título breve"
            value= {formState.name.value}
            hasError={formState.name.hasError}
            error={formState.name.error}
            touched={formState.name.touched}
            onChangeText={(text) => onHandleChangeInput(text, "name")}
          />
        </View>

        {/* Tipo de animal */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Tipo de animal</Text>
          <Select 
            value={formState.categoryId.value} 
            placeHolder="Seleccione el tipo de mascota" 
            options={CATEGORIES.filter(category => category.id !== "all")} 
            onChange={onHandleChangeInput} 
            onChangeName="categoryId"
          />
          {formState.categoryId.hasError ? <Text style={styles.errorText}>{formState.categoryId.error}</Text>: null}
        </View>

        {/* Raza */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Raza</Text>
          <Input 
            style={styles.input} 
            placeholder="Introduce una raza"
            value= {formState.breed.value}
            hasError={formState.breed.hasError}
            error={formState.breed.error}
            touched={formState.breed.touched}
            onChangeText={(text) => onHandleChangeInput(text, "breed")}
          />
        </View>

        {/* Sexo */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Sexo</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity style={styles.touchableGender} onPress={() => onHandleChangeInput("macho","gender")}><Ionicons name="male" size={30} color={formState.gender.value === "macho" ? COLORS.primary : "black"} /><Text>Macho</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableGender} onPress={() => onHandleChangeInput("hembra","gender")}><Ionicons name="female" size={30} color={formState.gender.value === "hembra" ? COLORS.primary :"black"} /><Text>Hembra</Text></TouchableOpacity>
            <TouchableOpacity style={styles.touchableGender} onPress={() => onHandleChangeInput("","gender")}><Ionicons name="male-female-sharp" size={30} color={!formState.gender.value ? COLORS.primary : "black"} /><Text>No lo sé</Text></TouchableOpacity>
          </View>
        </View>

        {/* Apariencia */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Apariencia</Text>
          <View style={styles.appearanceContainer}>
            <TouchableOpacity 
              style={styles.touchableAppearance} 
              onPress={() => setAppearanceToSelect("hair")}>
              <MaterialIcons name="grass" size={30} color={formState.hair.value ? COLORS.primary : "black"} 
              />
              <Text>{formState.hair.value ? formState.hair.value : "Pelo"}</Text>
              {formState.hair.hasError ? <Text style={styles.errorText}>{formState.hair.error}</Text>: null}
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.touchableAppearance} 
              onPress={() => setAppearanceToSelect("eyes")}>
              <Ionicons name="eye-outline" size={30} color={formState.eyes.value ? COLORS.primary : "black"} 
              />
              <Text>{formState.eyes.value ? formState.eyes.value : "Ojos"}</Text>
              {formState.eyes.hasError ? <Text style={styles.errorText}>{formState.eyes.error}</Text>: null}
            </TouchableOpacity>
          </View>
          {appearanceToSelect === "eyes" ? 
            <View style={styles.appearanceOptions}>
              <TouchableOpacity style={styles.appearanceOption} onPress={() => onSetAppearance("eyes","claros")}><Text style={styles.appearanceText}>Claros</Text></TouchableOpacity>
              <TouchableOpacity style={styles.appearanceOption} onPress={() => onSetAppearance("eyes","oscuros")}><Text style={styles.appearanceText}>Oscuros</Text></TouchableOpacity>
            </View> : appearanceToSelect === "hair" ?
            <View style={styles.appearanceOptions}>
              <TouchableOpacity style={styles.appearanceOption} onPress={() => onSetAppearance("hair","sin pelo")}><Text style={styles.appearanceText}>Sin Pelo</Text></TouchableOpacity>
              <TouchableOpacity style={styles.appearanceOption} onPress={() => onSetAppearance("hair","pelo corto")}><Text style={styles.appearanceText}>Pelo Corto</Text></TouchableOpacity>
              <TouchableOpacity style={styles.appearanceOption} onPress={() => onSetAppearance("hair","pelo largo")}><Text style={styles.appearanceText}>Pelo Largo</Text></TouchableOpacity>
            </View> : null
          }
        </View>

        {/* Identificacion */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Identificación</Text>
          <View style={styles.idContainer}>
            <TouchableOpacity style={styles.checkBox} onPress={() => handleCheckBox("collar")}><MaterialIcons name={formState.collar.value ? "check-box" : "check-box-outline-blank"} color={COLORS.primary} style={styles.checkIcon}/></TouchableOpacity>
            <Text style={styles.idText}> Collar identificador</Text>
          </View>
          <View style={styles.idContainer}>
            <TouchableOpacity style={styles.checkBox} onPress={() => handleCheckBox("chip")}><MaterialIcons name={formState.chip.value ? "check-box" : "check-box-outline-blank"} color={COLORS.primary} style={styles.checkIcon}/></TouchableOpacity>
            <Text style={styles.idText}> Chip Identificador </Text>
          </View>
        </View>

        {/* Zona */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Indica la dirección de adopción</Text>
          {formState.lossZone.value.address && <Text style={styles.locationText}>{formState.lossZone.value.address}</Text>}
          <LocationSelector onLocationPicker={onHandleChangeInput} prevRoute="NewAdoptionPet"/>
        </View>

        {/* Descripcion */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Añade una descripción</Text>
          <Input 
            style={styles.input} 
            placeholder="Descripción (opcional)"
            value= {formState.description.value}
            hasError={formState.description.hasError}
            error={formState.description.error}
            touched={formState.description.touched}
            onChangeText={(text) => onHandleChangeInput(text, "description")}
          />
        </View>

        {/* Telefono de contacto */}
        <View style={{...styles.inputContainer, ...styles.bottom}}>
          <Text style={styles.inputTitle}>Teléfono de contacto</Text>
          <Input 
            style={styles.input} 
            placeholder="Teléfono para contactar"
            value= {formState.contact.value}
            hasError={formState.contact.hasError}
            error={formState.contact.error}
            touched={formState.contact.touched}
            onChangeText={(text) => onHandleChangeInput(text, "contact")}
          />
        </View>

      </ScrollView>
      <TouchableOpacity style={styles.publishBtnContainer} onPress={onHandleSubmit}>
        <Text style={styles.publishText}>Publicar</Text>
      </TouchableOpacity>
      
      {loading ?
        <View style={styles.activityContainer}>
          <Text style={styles.activityText}>Publicando..</Text>
          <ActivityIndicator color={COLORS.details} size={50}/> 
        </View> 
      : null}
      
    </View>
  )
}

export default NewFoundPet