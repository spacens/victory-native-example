import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import AppNavigator from '../../navigation/AppNavigator';

storiesOf('AppNavigator', module)
  .add('default view', () => (
    <AppNavigator />
  ));