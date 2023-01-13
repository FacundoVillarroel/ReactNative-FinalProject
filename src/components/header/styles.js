import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
  },
  text:{
    fontFamily:"MartinMono-Bold",
    fontSize:20,
    color:COLORS.white
  },
  logoContainer:{
    flexDirection:"row",
    alignItems:"center",
  },
  logoText:{
    fontFamily:"MartinMono-Bold",
    color:COLORS.white,
    fontSize:13,
    paddingRight:5,
  },
  image:{
    width: 40,
    height: 40,
    borderRadius:50
  },
})