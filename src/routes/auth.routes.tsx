import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Signin } from '../screens/Signin';

const { Navigator, Screen } = createNativeStackNavigator();


export function AuthRoutes() {
    return (
            <Navigator
                
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <Screen name="Signin" component={Signin} />
                <Screen name="Home" component={Home} />
            </Navigator>
    )
}