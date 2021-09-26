import React from 'react';
import {Node} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  logo: {
    resizeMode: 'contain',
    width: 80,
    height: 60,
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

const Header = () => {
  return (
    <View style={styles.header}>
      {/* <View style={styles.imgContainer}> */}
      <Image style={styles.logo} source={require('./parcel.png')} />
      {/*  </View> */}
      <View style={styles.headerTitle}>
        <Text style={styles.title}>TRACKCEL </Text>
        <Text style={styles.subtitle}>Your package tracker</Text>
      </View>
    </View>
  );
};

export default Header;
