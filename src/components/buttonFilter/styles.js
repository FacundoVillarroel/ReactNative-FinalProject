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
    backgroundColor:COLORS.primary
  },
  title:{
    fontFamily:"MartinMono-Bold",
    alignSelf:"center",
    fontSize:20,
    padding:20,
    color:COLORS.white,
  },
  optionsContainer:{
    borderTopWidth:1,
    borderColor:COLORS.white
  },
  optionTitle:{
    fontFamily:"MartinMono-Regular",
    fontSize:18,
    padding:20
  },
  categoriesContainer:{
    width:"100%",
  },
  modalButton:{
    alignItems:"center",
    padding:10,
    backgroundColor:COLORS.secondary,
    width:"100%",
    position:"absolute",
    bottom:20
  },
  modalText:{
    fontFamily:"MartinMono-Regular"
  },
  categoryContainer:{
    flexWrap:"wrap",
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