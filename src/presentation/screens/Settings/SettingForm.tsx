import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Radio } from 'native-base';

export default function SettingForm() {
  const [gender, setGender] = useState('male');
  const value = 'one';

  return (
    <View className='m-3'>
      <View>
        <Text className='text-gray-500 font-medium mb-1'>Mobile Number</Text>
        <Text className='text-black-500 font-medium mb-5'>0987654321</Text>
      </View>
      <View className='flex flex-row items-center justify-between mb-3'>
        <View className='flex-1 mr-2'>
          <Text className='text-gray-500 font-small mb-1'>First Name*</Text>
          <TextInput
            className='border border-gray-300 rounded-lg p-2 h-8'
            maxLength={50}
          />
        </View>
        <View className='flex-1 ml-2'>
          <Text className='text-gray-500 font-medium mb-1'>Last Name*</Text>
          <TextInput
            className='border border-gray-300 rounded-lg p-2 h-8'
            maxLength={50}
          />
        </View>
      </View>
      <View className='flex flex-row items-center justify-between mb-3'>
        <View className='flex-1 mr-2'>
          <Text className='text-gray-500 font-small mb-1'>First Name*</Text>
          <View>
            <TextInput
              className='border border-gray-300 rounded-lg p-2 h-8'
              placeholder='DD/MM/YYYY'
              maxLength={50}
            />
          </View>
        </View>

        <View className='flex-1 ml-2'>
          <Text className='text-gray-500 font-small mb-1'>First Name*</Text>
          <Radio.Group
            className='flex flex-row'
            name='myRadioGroup'
            accessibilityLabel='favorite number'
            value={gender}
            onChange={(nextValue) => {
              setGender(nextValue);
            }}
          >
            <Radio value='Male' my={1}>
              One
            </Radio>
            <Radio className='ml-3' value='Female' my={1}>
              Two
            </Radio>
          </Radio.Group>
        </View>
      </View>
      <View className='flex flex-row items-center justify-between mb-3'>
        <View className='flex-1 mr-2'>
          <Text className='text-gray-500 font-medium mb-1'>Email Id</Text>
          <TextInput
            className='border border-gray-300 rounded-lg p-2 h-8'
            maxLength={100}
          />
        </View>
      </View>
      <View className='flex flex-row items-center justify-between mb-3'>
        <View className='flex-1 mr-2'>
          <Text className='text-gray-500 font-medium mb-1'>
            Address (House number and Building)
          </Text>
          <TextInput
            className='border border-gray-300 rounded-lg p-2 h-8'
            placeholder='e.g. A-19 Ashok complex'
            maxLength={200}
          />
        </View>
      </View>
      <View className='flex flex-row items-center justify-between mb-3'>
        <View className='flex-1 mr-2'>
          <Text className='text-gray-500 font-medium mb-1'>Street Name</Text>
          <TextInput
            className='border border-gray-300 rounded-lg p-2 h-8'
            placeholder='e.g. Sector-62, near durga park'
            maxLength={200}
          />
        </View>
      </View>
      <View className='flex flex-row items-center justify-between mb-3'>
        <View className='flex-1 mr-2'>
          <Text className='text-gray-500 font-medium mb-1'>Pin code</Text>
          <TextInput
            className='border border-gray-300 rounded-lg p-2 h-8'
            maxLength={50}
          />
        </View>
      </View>
      <View>
        <Button title='Save Details' />
      </View>
    </View>
  );
}
