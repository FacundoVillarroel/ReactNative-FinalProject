import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:COLORS.background,
  },
  activityContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  imageContainer:{
    flex:1,
  },
  btnRight:{
    left:"88%",
  },
  status:{
    position:"absolute",
    zIndex:100,
    bottom:10,
    left:10,
    backgroundColor:COLORS.dark,
    borderRadius:10,
    padding:5,
    fontFamily:"MartinMono-Regular",
    opacity:0.8,
    
  },
  image:{
    width:"100%",
    height:300
  },
  title:{
    color:COLORS.primary,
    fontFamily:"MartinMono-Bold",
    fontSize:25,
    padding:10
  },
  descriptionText:{
    fontFamily:"MartinMono-Regular",
    fontSize:15,
    paddingHorizontal:10,
    paddingBottom:30
  },
  detailContainer:{
    borderTopWidth:2,
    borderTopColor:COLORS.secondary,
    marginHorizontal:10
  },
  detailTitle:{
    paddingVertical:15,
    fontFamily:"MartinMono-Medium",
    fontSize:20
  },
  date:{
    borderTopWidth:2,
    borderTopColor:COLORS.secondary,
    fontFamily:"MartinMono-Light",
    fontSize:14,
    paddingTop:20
  },
  lossZoneContainer:{
    marginVertical:10,
    padding:10,

    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  lossZoneTitleContainer:{
    margin:5,
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  lossZoneTitle:{
    fontFamily:"MartinMono-Light",
    fontSize:9.5,
    paddingVertical:10
  },
  contact:{
    padding:10,
    fontFamily:"MartinMono-Regular",
    fontSize:18,
    backgroundColor:COLORS.secondary,
    marginTop:5
  },
})