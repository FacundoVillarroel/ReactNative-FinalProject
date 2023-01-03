import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.background,
  },
  flatList:{
    flex:1,
    backgroundColor:COLORS.background
  },
  activityContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
})