import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'native-base';
import SearchBar from '../../components/SearchBar/SearchBar';
import { SCREEN_NAME } from '../../Utils';

export default function SearchScreen() {
  const navigation: any = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Find Your Doctor</Text>
          <Pressable
            style={styles.press}
            onPress={() => navigation.navigate(SCREEN_NAME.HOME)}
          >
            <Text style={styles.cancel}>Cancel</Text>
          </Pressable>
        </View>
        <SearchBar />
      </View>
      <View style={styles.content}>
        <Avatar
          style={styles.avatar}
          bg='white'
          alignSelf='center'
          size='xl'
          source={{ uri: 'https://i.postimg.cc/PrR5WgVP/tth-lg-fav.png' }}
        >
          AJ
        </Avatar>
        <Text style={styles.title}>Find Your Doctor</Text>
        <Text style={styles.titleText}>
          Search by your doctor's first name, last name,
        </Text>
        <Text style={styles.titleText}>or Docon Id to book appointment</Text>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <Text style={styles.text1}>
            Visit our{' '}
            <Text style={{ color: 'blue', fontWeight: '700' }}>
              FAQ section
            </Text>{' '}
            in case of any queries or write
          </Text>
          <Text style={styles.text2}>
            to us{' '}
            <Text style={{ color: 'blue', fontWeight: '700' }}>
              hello@docon.co.in
            </Text>{' '}
            for more assistance
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  press: {
    marginLeft: 'auto',
  },
  cancel: {
    fontSize: 16,
    color: 'blue',
  },

  content: {
    height: '75%',
    alignItems: 'center',
  },
  footerContainer: {
    height: '100%',
    backgroundColor: 'white',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#8c8c8c',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  text1: {
    marginTop: 14,
    fontSize: 15,
    color: '#808080',
  },
  text2: {
    fontSize: 15,
    color: '#808080',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  titleText: {
    fontSize: 16,
    color: 'black',
  },
  avatar: {
    marginTop: '25%',
  },
});
