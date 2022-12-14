import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.dark,
    margin:2,
    width:175
  },
  statusContainer:{
    flex:1,
    alignItems:"center",
    height:30,
  },
  status:{
    color:COLORS.white,
    fontFamily:"MartinMono-Medium",
    fontSize:13,
    paddingVertical:4
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
    fontFamily:"MartinMono-Bold",
    fontSize:16,
    color:COLORS.white,
  },
  dateContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  date:{
    fontFamily:"MartinMono-Light",
    color:COLORS.primary,
    fontSize:11,
    paddingTop:4
  },
  lossLocation:{
    fontFamily:"MartinMono-Light",
    color:COLORS.primary,
    fontSize:11
  },
})