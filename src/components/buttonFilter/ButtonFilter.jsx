import { TouchableOpacity, Text, Modal, View, FlatList } from 'react-native';
import React, { useState } from 'react';

import { styles } from './styles';

const ButtonFilter = ({categories, onSelectCategory, onSelectStatus}) => { 
  const [modalVisible, setModalVisible] = useState(false)
  const CATEGORIES = categories.map(category => category.id)
  const statusList = ["Perdidos", "Encontrados", "En Adopción"]

  const onFilter = () => {
    setModalVisible(!modalVisible)
  }

  const onCategory = (id) => {
    setModalVisible(!modalVisible)
    onSelectCategory(id)
  }

  const onStatus = (id) => {
    let status = "lost"
    id === "Encontrados" ? status = "found" : id === "En Adopción" ? status = "adoption" : null
    setModalVisible(!modalVisible)
    onSelectStatus(status)
  }

  const renderItemCategories = ({item}) => (
    <TouchableOpacity onPress={() => onCategory(item)} style={styles.categoryContainer}>
      <Text style={styles.category}>{item}</Text>
    </TouchableOpacity>
  )
  
  const renderItemStatus = ({item}) => (
    <TouchableOpacity onPress={() => onStatus(item)} style={styles.categoryContainer}>
      <Text style={styles.category}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFilter} style={styles.touchableContainer}>
        <Text style={styles.touchableText}>Filtrar</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">

        {/* List of Categories */}
        <View style={styles.modalContainer}>
          <Text style={styles.title} > Filtrar Por: </Text>
          <View style={styles.optionsContainer}>
            <Text style={styles.optionTitle}>Tipo de mascota:</Text>
            <FlatList 
              data={CATEGORIES}
              keyExtractor= {item => item}
              style={styles.categoriesContainer}
              renderItem={renderItemCategories}
              numColumns={CATEGORIES.length+1}
            />
          </View>

          {/* List of Status */}
          <View style={styles.optionsContainer}>
            <Text style={styles.optionTitle}>Estado de la mascota:</Text>
            <FlatList 
              data={statusList}
              keyExtractor= {item => item}
              style={styles.categoriesContainer}
              renderItem={renderItemStatus}
              numColumns={CATEGORIES.length+1}
            />
          </View>
          
          <TouchableOpacity style={styles.modalButton} onPress={onFilter}>
            <Text style={styles.modalText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default ButtonFilter