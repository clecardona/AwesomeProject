import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('./assets/icns/parcel.png')} />

      <View style={styles.headerTitle}>
        <Text style={styles.title}>TRACKCEL </Text>
        <Text style={styles.subtitle}>Your package tracker</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  logo: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 60,
    margin: 10,
    padding: 5,
  },
  headerTitle: {
    display: 'flex',
    width: '100%',
    marginVertical: 12,
  },
  title: {
    marginBottom: -8,
    color: 'white',
    fontSize: 40,
  },
  subtitle: {
    marginTop: 0,

    color: 'white',
    fontSize: 20,
  },
});
