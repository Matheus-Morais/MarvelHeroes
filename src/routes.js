import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Heroes from './pages/Heroes';

export default () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Heroes"
                    component={Heroes}
                    options={{
                        headerShown: false
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}
