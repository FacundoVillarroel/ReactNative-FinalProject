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
    color:COLORS.details,
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
    borderTopWidth:1,
    borderTopColor:COLORS.light,
    marginHorizontal:10
  },
  detailTitle:{
    paddingVertical:15,
    fontFamily:"MartinMono-Medium",
    fontSize:20
  },
  date:{
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