import React from 'react';
import { View } from 'react-native';

function Container({ children }: { children: any }) {
  return <View className='container mx-auto px-4'>{children}</View>;
}

export default Container;
