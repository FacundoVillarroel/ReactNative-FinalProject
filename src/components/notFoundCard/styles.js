import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
  },
  title:{
    fontSize:20,
    alignSelf:"center",
    fontFamily:"MartinMono-Medium",
    paddingVertical:30,
  },
  image:{
    width:"85%",
    height:250,
  },
  message:{
    fontFamily:"MartinMono-Regular",
    marginVertical:30
  },
  subMessage:{
    fontFamily:"MartinMono-Regular",
    fontSize:12,
    marginVertical:30
  }
})