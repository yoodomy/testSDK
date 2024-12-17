import React from 'react';
import { Platform } from 'react-native';
import { Plane } from './icons';

const ModuleContainers = new Map([
  [
    'policy-street',
    {
      id: 'policy-street',
      url: `http://localhost:9101/${Platform.OS}/[name][ext]`,
      displayName: 'Policy Street',
      displayKey: 'policyStreet',
      icon: () => <Plane width="44px" />,
      // iconImg: require('./assets/miniapp-icons/policy-street.png'),
      port: '9101', // need to specific the port for the container
    },
  ],
  // [
  //   'invalid',
  //   {
  //     url: 'http://invalid-url.com',
  //     displayName: 'Invalid',
  //     displayKey: 'invalid',
  //     iconImg: require('./assets/miniapp-icons/policy-street.png'),
  //   },
  // ],
]);

export default ModuleContainers;
