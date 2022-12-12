import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.dark,
    margin:2,
  },
  image:{
    width:"100%",
    height:180
  },
  detailsContainer:{
    flex:1,
    padding:10
  },
  title:{
    alignSelf:"center",
    fontFamily:"MartinMono-Bold",
    fontSize:20,
    color:COLORS.primary,
  },
  dateContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  date:{
    fontFamily:"MartinMono-Light",
    color:COLORS.white
  },
  lossLocation:{
    fontFamily:"MartinMono-Light",
    color:COLORS.white
  },
})