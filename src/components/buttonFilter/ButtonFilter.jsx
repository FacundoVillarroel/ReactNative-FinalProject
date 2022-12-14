import { TouchableOpacity, Text, Modal, View, FlatList } from 'react-native';
import React, { useState } from 'react';

import { styles } from './styles';

const ButtonFilter = ({categories, onSelect}) => { /* filter component */
  const [modalVisible, setModalVisible] = useState(false)
  const CATEGORIES = categories.map(category => category.id)
  CATEGORIES.push("todos")

  const onFilter = () => {
    setModalVisible(!modalVisible)
  }

  const onCategory = (id) => {
    setModalVisible(!modalVisible)
    onSelect(id)
  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => onCategory(item)} style={styles.categoryContainer}>
      <Text style={styles.category}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onFilter} style={styles.touchableContainer}>
        <Text style={styles.touchableText}>Filtrar</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.optionsContainer}>
            <Text style={styles.optionTitle}>Tipo de mascota:</Text>
            <FlatList 
              data={CATEGORIES}
              keyExtractor= {item => item}
              style={styles.categoriesContainer}
              renderItem={renderItem}
              numColumns={2}
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