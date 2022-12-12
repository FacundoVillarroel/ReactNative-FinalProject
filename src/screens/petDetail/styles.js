import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.background,
  },
  image:{
    width:"100%",
    height:250
  },
  title:{
    color:COLORS.primary,
    fontFamily:"MartinMono-Bold",
    fontSize:25,
    padding:10
  },
  descriptionText:{
    fontFamily:"MartinMono-Regular",
    fontSize:15,
    paddingHorizontal:10,
    paddingBottom:30
  },
  detailContainer:{
    borderTopWidth:2,
    borderTopColor:COLORS.secondary,
    marginHorizontal:10
  },
  detailTitle:{
    paddingVertical:15,
    fontFamily:"MartinMono-Medium",
    fontSize:20
  },
  date:{
    borderTopWidth:2,
    borderTopColor:COLORS.secondary,
    fontFamily:"MartinMono-Light",
    fontSize:14,
    paddingTop:20
  },
  lossLocation:{
    fontFamily:"MartinMono-Light",
    fontSize:14,
    paddingVertical:5
  },
})