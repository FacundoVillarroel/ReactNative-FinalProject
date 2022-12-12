import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    
  },
  touchableContainer:{
    height:"auto",
    padding:5,
    margin:5,
    backgroundColor:COLORS.light,
    alignItems:"center"
  },
  touchableText:{
    fontFamily:"MartinMono-Medium",
    color:COLORS.dark,
  },
  modalContainer:{
    flex:1,
    justifyContent:"space-between",
  },
  optionsContainer:{
    backgroundColor:COLORS.primary
  },
  optionTitle:{
    fontFamily:"MartinMono-Regular",
    alignSelf:"center",
    fontSize:20,
    padding:20
  },
  categoriesContainer:{
    flexDirection:"row",
  },
  modalButton:{
    alignItems:"center",
    padding:10,
    backgroundColor:COLORS.secondary
  },
  modalText:{
    fontFamily:"MartinMono-Regular"
  },
  categoryContainer:{
    backgroundColor:COLORS.white,
    margin:10,
    padding:10,
    borderRadius:10
  },
  category:{
    fontFamily:"MartinMono-Regular",
    color:COLORS.dark
  },
})