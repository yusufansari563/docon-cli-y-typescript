import {Text, View} from 'react-native'
import React from 'react'

export default function Notifications() {
    return (
        <View>
            <Text className='text-xl font-bold mx-4 mt-1'>Notifications</Text>
            <View className=' flex justify-center items-center h-full' >
                <Text className='text-xl font-bold'>You dont't have any notifications</Text>
            </View>
        </View>
    )
}