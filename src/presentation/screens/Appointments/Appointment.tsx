import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'native-base';
import { Image } from 'react-native';
import { SCREEN_NAME } from '../../Utils';

export default function Appointment({ navigation }: { navigation: any }) {
  return (
    <>
      <View className='h-full flex items-center justify-center'>
        <Image
          className=' h-20 w-20 mb-4 '
          source={require('../../Assets/images/fast-time.png')}
        />
        <Text className='text-xl font-bold mb-5'>No Appointments Booked</Text>
        <Text className='text-base mb-6 w-1/2 text-center'>
          Please Book your first appointmant of Video or physical consultation
          as per your convenience
        </Text>
        <Button
          onPress={() => navigation.navigate(SCREEN_NAME.BOOK_APPOINTMENT)}
          className='bg-blue-500 rounded-none'
        >
          Book Now
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
