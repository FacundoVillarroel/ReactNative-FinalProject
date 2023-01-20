import { TouchableOpacity, Text, Modal, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { styles } from './styles';

const ButtonFilter = ({ onSelectCategory, onSelectStatus}) => { 
  const categories = useSelector((state) => state.category.categories)
  const statusList = useSelector((state) => state.status.status)
  const categorySelected = useSelector((state) => state.category.selected)
  const statusSelected = useSelector((state) => state.status.selected)

  const [modalVisible, setModalVisible] = useState(false)

  const onFilter = () => {
    setModalVisible(!modalVisible)
  }

  const onCategory = (id) => {
    onSelectCategory(id)
  }

  const onStatus = (id) => {
    onSelectStatus(id)
  }

  const renderItemCategories = ({item}) => (
    <TouchableOpacity onPress={() => onCategory(item.id)} style={{...styles.categoryContainer, ...(categorySelected?.id === item.id ? styles.selected : null)}}>
      <Text style={{...styles.category, ...(categorySelected?.id === item.id ? styles.selectedText : null)}}>{item.title}</Text>
    </TouchableOpacity>
  )
  
  const renderItemStatus = ({item}) => (
    <TouchableOpacity onPress={() => onStatus(item.id)} style={{...styles.categoryContainer, ...(statusSelected?.id === item.id ? styles.selected : null)}}>
      <Text style={{...styles.category, ...(statusSelected?.id === item.id ? styles.selectedText : null)}}>{item.title}</Text>
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
              data={categories}
              keyExtractor= {item => item}
              style={styles.categoriesContainer}
              renderItem={renderItemCategories}
              numColumns={3}
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
              numColumns={3}
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