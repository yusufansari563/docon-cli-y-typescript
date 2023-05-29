import { Text, View, Image } from 'react-native';

import React from 'react';

import { Button } from 'native-base';
import { SCREEN_NAME } from '../../Utils';

export default function Record({navigation}:{navigation:any}) {
  return (
    <>
      <View className='h-full flex items-center justify-center'>
        <Image
          className=' h-20 w-20 mb-4 '
          source={require('../../Assets/images/FolderAdd.png')}
        />
        <Text className='text-xl font-bold mb-5'>No Patient History</Text>
        <Text className='text-base mb-6 w-1/2 text-center'>
          Please book your first appointment of Video or Physical consultationas
          per your convenience
        </Text>
        <Button onPress={()=>navigation.navigate(SCREEN_NAME.SEARCH)} className='bg-blue-500 rounded-none'>Book Now</Button>
      </View>
    </>
  );
}
