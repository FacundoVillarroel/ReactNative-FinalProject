import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    minHeight:75
  },
  flexContainer:{
    width:"100%",
    flexDirection:"row",
    alignItems:"center",
    borderBottomWidth:1,
    marginVertical:5,
  },
  inputContainer:{
    color:COLORS.white,
    paddingVertical:10,
    flex:1,
  },
  textInput:{
    fontSize:12,
    fontFamily:"MartinMono-Bold",
    color:COLORS.white
  },
  messageContainer:{
  },
  message:{
    color:COLORS.danger,
    fontWeight:"600"
  },
});
