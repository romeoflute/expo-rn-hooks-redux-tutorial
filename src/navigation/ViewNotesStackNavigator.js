import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewNotes from '../screens/ViewNotes';
import AddNote from '../screens/AddNote';


const Stack = createStackNavigator();

function ViewNotesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ViewNotes" 
        component={ViewNotes} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AddNote" 
        component={AddNote} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ViewNotesStackNavigator;

