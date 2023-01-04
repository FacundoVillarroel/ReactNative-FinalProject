import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:COLORS.dark
  },
  container:{
    flex:1,
    width:"80%",
    justifyContent:"space-evenly",
  },
  titleContainer:{
    flex:.9,
    justifyContent:"center",
    alignItems:"center",
  },
  logo:{
    height:120,
    width:120,
  },
  title:{
    fontSize:26,
    color:COLORS.primary,
    fontFamily:"MartinMono-Bold",
  },
  subTitle:{
    color:COLORS.primary,
    fontFamily:"MartinMono-Medium",
    fontSize:13,
  },
  inputsContainer:{
    flex:.5,
    marginTop:30,
    justifyContent:"space-around",
  },
  icon:{
    paddingLeft:15
  },
  textInput:{
    paddingLeft:20
  },
  buttonContainer:{
    backgroundColor:COLORS.primary,
    padding:20,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderRadius:10,
  },
  buttonText:{
    fontFamily:"MartinMono-Medium",
    fontSize:15,
    color:COLORS.white
  },
  promptContainer:{
    marginTop:50,
    flex:.9,
  },
  promptText:{
    marginBottom:20,
    alignSelf:"center",
    paddingTop:40,
    color:COLORS.white,
  },
})