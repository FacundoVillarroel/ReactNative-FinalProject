import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    position:"absolute",
    top:10,
    left:10,
    zIndex:100,
    borderWidth:1,
    borderColor:COLORS.white,
    borderRadius:50,
    height:35,
    width:35,
    alignItems:"center",
    justifyContent:"center",
    opacity:0.7,
    backgroundColor:COLORS.dark
  },
  text:{
    fontFamily:"MartinMono-Medium",
    color:COLORS.white,
  },
})