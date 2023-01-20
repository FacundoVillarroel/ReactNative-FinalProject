import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:300,
  },
  image:{
    width: Dimensions.get("window").width,
    height:300,
  },
  carousel:{
    maxHeight:300,
  },
  dotContainer:{
    position:"absolute",
    width:"100%",
    bottom:0,
    flexDirection:"row",
    justifyContent:"center",
    marginVertical:20,
  },
  circleSelected:{
    width:15,
    height:15,
    backgroundColor:COLORS.details,
    borderRadius:50,
    marginHorizontal:5,
    opacity:.8,
  },
  circle:{
    width:13,
    height:13,
    backgroundColor:"grey",
    borderRadius:50,
    marginHorizontal:5,
    opacity:.8,
  },
})