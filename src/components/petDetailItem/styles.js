import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    borderColor:COLORS.secondary,
    borderTopWidth:2,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  description:{
    fontFamily:"MartinMono-Light"
  },
  text:{
    fontFamily:"MartinMono-Regular",
    fontSize:16,
    paddingVertical:10
  },
})