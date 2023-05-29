import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '../screens/Details/Details';
import Home from '../screens/Home/Home';
import Notifications from '../screens/Notifications/Notifications';
import Drawer from './Drawer';
import { SCREEN_NAME } from '../Utils';
import Settings from '../screens/Settings/Settings';
import AuthenticationScreen from '../screens/Authentication/AuthenticationScreen';
import InputOTPScreen from '../screens/Authentication/InputOTPScreen';
import BookAppointment from '../screens/BookAppointment/BookAppointment';
import SearchScreen from '../screens/Search/SearchScreen';
import AppointmentSummary from '../screens/AppointmentSummary/AppointmentSummary';

const Stack = createStackNavigator();
export function stack() {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAME.AUTHENTICATION}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={SCREEN_NAME.DRAWER}
        options={
          {
            headerTitle: 'Hello, patient',
          }
        }
        component={Drawer}
      />
      <Stack.Screen
        name={SCREEN_NAME.AUTHENTICATION}
        component={AuthenticationScreen}
      />
      <Stack.Screen name={SCREEN_NAME.OTPSCREEN} component={InputOTPScreen} />
      <Stack.Screen name={SCREEN_NAME.NOTIFICATION} component={Notifications} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Book an Appointment',
        }}
        name={SCREEN_NAME.BOOK_APPOINTMENT}
        component={BookAppointment}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Search',
        }}
        name={SCREEN_NAME.SEARCH}
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Appointment Summary',
        }}
        name={SCREEN_NAME.APPOINTMENT_SUMMARY}
        component={AppointmentSummary}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Settings',
        }}
        name={SCREEN_NAME.SETTING}
        component={Settings}
      />
    </Stack.Navigator>
  );
}
