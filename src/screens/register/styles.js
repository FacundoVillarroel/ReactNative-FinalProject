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
  inputsContainer:{
    flex:1,
    marginTop:30,
    justifyContent:"center"
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
    marginVertical:10,
  },
  buttonText:{
    fontFamily:"MartinMono-Medium",
    fontSize:15,
    color:COLORS.white
  },
  promptContainer:{
    flex:.9,
  },
  promptText:{
    alignSelf:"center",
    paddingTop:40,
    color:COLORS.white,
  },
  forgotContainer:{
    marginTop:20,
  },
  forgotText:{
    color:COLORS.white,
    fontFamily:"MartinMono-Light",
    fontSize:12,
    paddingVertical:10,
    alignSelf:"center",
  },
})