import React from 'react';
import {StyleSheet, Text, Image, View, Button} from 'react-native';
import parcels from './assets/api_mockup.json';

const ParcelsContainer = () => {
  const Parcels = parcels.map(item => {
    return (
      <View style={styles.card}>
        <View style={styles.wrapper}>
          <Text style={styles.h2}>#{item.parcel_id}</Text>
          <Button style={styles.btn} title="More info" />
        </View>

        <View style={styles.item}>
          <Text style={styles.h4}>Status:</Text>
          <Text style={styles.p}>{item.status}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.h4}>Location:</Text>
          <Text style={styles.p}>{item.location_name}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.h4}>Estimated Arrival:</Text>
          <Text style={styles.p}>{item.eta}</Text>
        </View>
      </View>
    );
  });

  return <View style={styles.container}>{Parcels}</View>;
};

export default ParcelsContainer;

const styles = StyleSheet.create({
  container: {},
  card: {
    display: 'flex',
    flexDirection: 'column',

    backgroundColor: 'rgba(0,0,0,0.05)',
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 12,
    borderRadius: 12,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    //backgroundColor: 'white',
    //width: '90%',
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
  },
  h4: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  p: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'right',
  },
  highlight: {
    fontWeight: '700',
  },
  btn: {
    alignSelf: 'flex-end',
    backgroundColor: 'orange',
    width: 140,
  },
});
