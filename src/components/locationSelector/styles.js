import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  mapContainer:{
    width:"100%",   
    height:204,
    borderWidth:2,
    borderColor:COLORS.primary
  },
  btn:{
    borderWidth:1,
    alignItems:"center",
    padding:10,
    borderRadius:10,
    backgroundColor:COLORS.primary,
    position:"absolute",
    left:"33%",
    top:"42%",
  },
  touchableText:{
    color:COLORS.white,
  },
  mapPreview:{

  },
})