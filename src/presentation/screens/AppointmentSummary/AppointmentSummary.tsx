import { Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { SCREEN_NAME } from '../../Utils';
import { Divider } from 'native-base';

export default function AppointmentSummary({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <ScrollView>
      <View className='mx-2 my-3 overflow-clip'>
        <View className='flex-row justify-between py-4 align-middle bg-white rounded'>
          <View className='px-2 py-3'>
            <View className='rounded-full bg-gray-400 w-14 h-14 justify-center items-center'>
              <Text className='text-2xl text-white font-bold'>GS</Text>
            </View>
          </View>
          <View className='basis-1/2 m-auto'>
            <Text className='text-xl font-medium'>Dr. Girish Sawant</Text>
            <Text className='text-base'>Gynaecologist</Text>
          </View>
          <View className='flex-row-reverse basis-1/4'>
            <Text
              className='text-l font-bold m-auto'
              style={{ color: '#0ea5e9' }}
              onPress={() => navigation.navigate(SCREEN_NAME.SETTING)}
            >
              View Profile
            </Text>
          </View>
        </View>
      </View>
      <View className=' overflow-clip '>
        <View className='mx-2 my-1 px-2 py-3 bg-white rounded '>
          <Text className=' text-gray-400 text-sm '>Appointment Date</Text>
          <View className='capsule flex-row justify-between mt-3 align-middle'>
            <View className='summary-btn-container flex flex-row'>
              <Pressable
                className='px-4 py-2 bg-slate-700 text-white font-bold rounded-none rounded-tl-lg rounded-bl-lg border-gray-400'
                onPress={() => {}}
              >
                <Text className='font-bold text-xs text-white'>APR 04</Text>
              </Pressable>
              <Pressable
                className='px-4 py-2 font-bold bg-white text-black border border-gray-300'
                onPress={() => {}}
              >
                <Text className='font-bold text-black'>THU</Text>
              </Pressable>
              <Pressable
                className='px-4 py-2 font-bold bg-white text-black rounded-none  border rounded-tr-lg rounded-br-lg border-gray-300'
                onPress={() => {}}
              >
                <Text className='font-bold text-black'>08:30 PM</Text>
              </Pressable>
            </View>
            <Pressable onPress={() => {}} className='basis-1/5'>
              <Text
                style={{ color: '#0ea5e9' }}
                className=' font-bold m-auto text-base'
              >
                Change
              </Text>
            </Pressable>
          </View>
        </View>

        <View className='description pt-2'>
          <View className='mx-2 my-1 px-2 py-3 bg-white rounded '>
            <Text className='text-gray-400'>Who this appointment is for?</Text>
            <Pressable
              onPress={() => {}}
              className=' border-2 rounded-lg border-gray-300 mt-3 w-5/6'
            >
              <Text
                style={{ color: '#0ea5e9' }}
                className='font-bold m-auto text-base px-2 py-4'
              >
                + Add Patient
              </Text>
            </Pressable>
          </View>

          <View className='mx-2 my-1 px-2 py-3 bg-white rounded  flex-row justify-between'>
            <Text className='font-bold text-base'> Video consultant</Text>
            <Text className='font-bold text-base'>₹800</Text>
          </View>

          <View className='note mt-24 mx-2 my-1 px-2 py-3 pb-12 bg-white rounded '>
            <Text className='text-blue-900 font-bold text-lg '>Note</Text>
            <Divider className='mt-1' />
            <View className='pt-1 list-disc text-lg text-slate-400'>
              <View className='flex-row pt-0.4'>
                {/* <Text className='pr-0.5 text-gray-400 text-base'>{`\u25CF`}</Text> */}
                <Text className='text-gray-500 text-base '>
                  You can cancel the appointment before 30 minutes from the
                  appointment time & get 100% refund.{' '}
                </Text>
              </View>
              <View className='flex-row pt-0.4'>
                {/* <Text className='pr-0.5 text-gray-400 text-base'>{`\u25CF`}</Text> */}
                <Text className='text-gray-500 text-base'>
                  In case of cancellation by doctor you can get 100% refund.
                </Text>
              </View>
              <View className='flex-row pt-0.4'>
                {/* <Text className='pr-0.5 text-gray-400 text-base'>{`\u25CF`}</Text> */}
                <Text className='text-gray-500 text-base'>
                  You can reschedule the appointment free of cost.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
