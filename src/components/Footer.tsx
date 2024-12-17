import { Box, Image, Text } from 'native-base';
import React from 'react';

const Footer = ({
  logo,
  logoWidth,
  logoHeight,
  displayName,
  description,
}) => (
  <Box mt="2.5" mb="10" alignItems="center">
    <Image
      source={logo}
      alt={displayName}
      style={{
        width: logoWidth,
        height: logoHeight,
      }}
    />
    <Text fontSize={10} mt="4" textAlign="center" color="gray.500">
      {description}
    </Text>
  </Box>
);

export default Footer;
