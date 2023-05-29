import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { Button } from 'native-base';
import { SCREEN_NAME } from '../../Utils';

const CUREENT_WEEK = [
  {
    id: '1',
    title: '2 May',
    active: true,
  },
  {
    id: '2',
    title: '3 May',
    active: false,
  },
  {
    id: '3',
    title: '4 May',
    active: false,
  },
  {
    id: '4',
    title: '5 May',
    active: false,
  },
  {
    id: '5',
    title: '6 May',
    active: false,
  },
];
const AVAILABLE_SLOTS = {
  MORNING_SLOTS: [
    {
      slotId: '01',
      slotTime: '08:00 AM',
    },
    {
      slotId: '02',
      slotTime: '08:30 AM',
    },
    {
      slotId: '03',
      slotTime: '09:00 AM',
    },
    {
      slotId: '04',
      slotTime: '09:30 AM',
    },
    {
      slotId: '05',
      slotTime: '10:00 AM',
    },
    {
      slotId: '06',
      slotTime: '10:30 AM',
    },
    {
      slotId: '07',
      slotTime: '11:00 AM',
    },
    {
      slotId: '08',
      slotTime: '11:30 AM',
    },
  ],
  AFTERNOON_SLOTS: [
    {
      slotId: '001',
      slotTime: '12:00 PM',
    },
    {
      slotId: '002',
      slotTime: '12:30 PM',
    },
    {
      slotId: '003',
      slotTime: '01:00 PM',
    },
    {
      slotId: '004',
      slotTime: '01:30 PM',
    },
    {
      slotId: '005',
      slotTime: '02:00 PM',
    },
    {
      slotId: '006',
      slotTime: '02:30 PM',
    },
    {
      slotId: '007',
      slotTime: '03:00 PM',
    },
    {
      slotId: '008',
      slotTime: '03:30 PM',
    },
  ],
  EVENING_SLOTS: [
    {
      slotId: '0001',
      slotTime: '04:00 PM',
    },
    {
      slotId: '0002',
      slotTime: '04:30 PM',
    },
    {
      slotId: '0003',
      slotTime: '05:00 PM',
    },
    {
      slotId: '0004',
      slotTime: '05:30 PM',
    },
    {
      slotId: '0005',
      slotTime: '06:00 PM',
    },
    {
      slotId: '0006',
      slotTime: '06:30 PM',
    },
    {
      slotId: '0007',
      slotTime: '07:00 PM',
    },
    {
      slotId: '0008',
      slotTime: '07:30 PM',
    },
  ],
};

export default function BookAppointment({ navigation }: { navigation: any }) {
  return (
    <ScrollView>
      <View className='px-2 py-3'>
        <View className='flex-row py-4'>
          <View className='basis-1/1 px-2 py-3'>
            <View className='rounded-full bg-gray-400 w-14 h-14 justify-center items-center'>
              <Text className='text-2xl text-white font-bold'>GS</Text>
            </View>
          </View>
          <View className='basis-1/2'>
            <Text className='text-xl font-medium'>Dr. Girish Sawant</Text>
            <Text className='text-base'>Gynaecologist</Text>
          </View>
          <View className='flex-row-reverse basis-1/4 mr-4'>
            <Text
              className='text-l font-bold'
              style={{ color: '#0ea5e9' }}
              onPress={() => navigation.navigate(SCREEN_NAME.SETTING)}
            >
              View Profile
            </Text>
          </View>
        </View>
        <View className='bg-blue-950 rounded-md'>
          <Text className='text-xl text-center text-white bg-slate-500 rounded'>
            Video consultation is also available with the doctor
          </Text>
        </View>
        <View className='flex flex-row mt-2'>
          {CUREENT_WEEK.map((item, index) => {
            return (
              <Pressable
                onPress={(item) => {
                  CUREENT_WEEK.map((fitem, findex) => {
                    if (findex === index) {
                      fitem.active = true;
                    } else {
                      fitem.active = false;
                    }
                  });
                }}
                key={item.id}
              >
                <View
                  className={item.active ? 'border-b-4 border-b-sky-500' : ''}
                >
                  <Button className='bg-transparent'>
                    <Text className='text-base font-medium text-slate-500'>
                      {item.title}
                    </Text>
                  </Button>
                </View>
              </Pressable>
            );
          })}
          <View>
            <Image
              className='h-6 w-6 mt-3 ml-2'
              source={require('../../Assets/images/calendar.png')}
            />
          </View>
        </View>
        <View className='border border-solid border-gray-300'></View>
        <View className='flex flex-row py-4'>
          <View className='basis-1/1'>
            <Image
              className='h-8 w-8 '
              source={require('../../Assets/images/sun.png')}
            />
          </View>
          <Text className='text-xl font-bold text-gray-700 px-2 py-0'>
            Morning, Video Consult
          </Text>
          <Image
            className='h-6 w-6 ml-1'
            source={require('../../Assets/images/video-call.png')}
          />
        </View>
        <View className='flex flex-row flex-wrap gap-2'>
          {AVAILABLE_SLOTS.MORNING_SLOTS.map((items) => {
            return (
              <View key={items.slotId} className='w-13 h-13'>
                <Button
                  onPress={() =>
                    navigation.navigate(SCREEN_NAME.APPOINTMENT_SUMMARY)
                  }
                  className='border-solid border border-gray-500 bg-transparent rounded-xl'
                >
                  <Text className='text-sm font-medium text-sky-500'>
                    {items.slotTime}
                  </Text>
                </Button>
              </View>
            );
          })}
        </View>
        <View className='flex flex-row py-4'>
          <View className='basis-1/1'>
            <Image
              className='h-8 w-8'
              source={require('../../Assets/images/time.png')}
            />
          </View>
          <Text className='text-xl font-bold text-gray-700 px-2 py-0'>
            Afternoon, Video Consult
          </Text>
          <Image
            className='h-6 w-6 ml-1'
            source={require('../../Assets/images/video-call.png')}
          />
        </View>
        <View className='flex flex-row flex-wrap gap-2'>
          {AVAILABLE_SLOTS.AFTERNOON_SLOTS.map((items) => {
            return (
              <View key={items.slotId} className='w-13 h-13'>
                <Button
                  onPress={() =>
                    navigation.navigate(SCREEN_NAME.APPOINTMENT_SUMMARY)
                  }
                  className='border-solid border border-gray-500 bg-transparent rounded-xl'
                >
                  <Text className='text-sm font-medium text-sky-500'>
                    {items.slotTime}
                  </Text>
                </Button>
              </View>
            );
          })}
        </View>

        <View className='flex flex-row py-4'>
          <View className='basis-1/1'>
            <Image
              className='h-8 w-8 '
              source={require('../../Assets/images/sun.png')}
            />
          </View>
          <Text className='text-xl font-bold text-gray-700 px-2 py-0'>
            Evening, Video Consult
          </Text>
          <Image
            className='h-6 w-6 ml-1'
            source={require('../../Assets/images/video-call.png')}
          />
        </View>
        <View className='flex flex-row flex-wrap gap-2'>
          {AVAILABLE_SLOTS.EVENING_SLOTS.map((items) => {
            return (
              <View key={items.slotId} className='w-13 h-13'>
                <Button
                  onPress={() =>
                    navigation.navigate(SCREEN_NAME.APPOINTMENT_SUMMARY)
                  }
                  className='border-solid border border-gray-500 bg-transparent rounded-xl'
                >
                  <Text className='text-sm font-medium text-sky-500'>
                    {items.slotTime}
                  </Text>
                </Button>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
