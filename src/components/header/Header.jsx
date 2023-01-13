import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import mipetLogo from "../../../assets/mipetLogoWhite.png";

import { styles } from './styles';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.logoContainer} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.logoText}>Mipet</Text>
        <Image
          style={styles.image}
          source={mipetLogo}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header