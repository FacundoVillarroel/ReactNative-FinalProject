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
  },
  inputContainer:{
    color:COLORS.white,
    flex:1,
  },
  textInput:{
    fontSize:12,
    fontFamily:"MartinMono-Bold",
    color:COLORS.white
  },
  message:{
    color:COLORS.danger,
    fontWeight:"600"
  },
});
