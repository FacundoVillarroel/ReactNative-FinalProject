import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  modalContainer:{
    flex:1,
  },
  container:{
    marginHorizontal:"10%",
    marginVertical:"50%",
    width:"80%",
    height:300,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:COLORS.white,
    borderWidth:2,
    borderColor:COLORS.primary,
    borderRadius:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  btnCloseContainer:{
    position:"absolute",
    top:10,
    right:10
  },
  btnCloseText:{
    fontFamily:"MartinMono-Bold",
  },
  title:{
    fontFamily:"MartinMono-Bold",
    paddingVertical:30,
  },
  btnContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",
  },
  touchableContainer:{
    justifyContent:"center",
    alignItems:"center",
  },
  btnText:{
    paddingVertical:5,
    fontFamily:"MartinMono-Light"
  },
})