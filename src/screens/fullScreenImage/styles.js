import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:COLORS.black
  },
  image:{
    width:"100%",
    height:500,
  },
  btnClose:{
    position:"absolute",
    right:15,
    top:15,
  },
  btnCloseText:{
    color:COLORS.white,
    fontSize:16,
  },
})