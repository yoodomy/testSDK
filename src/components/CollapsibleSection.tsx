// src/components/CollapsibleSection/index.tsx
import React, { useState, useRef } from 'react';
import { Animated, Easing, LayoutChangeEvent } from 'react-native';
import { Box, Text, Pressable, HStack } from 'native-base';
import { ChevronDown, ChevronUp } from '../icons';

interface CollapsibleSectionProps {
  constainerStyle?: any; // Optional
  title: string;
  titleStyle?: any; // Optional
  description1?: string; // Optional
  description2?: string; // Optional
  children?: React.ReactNode;
}

const CollapsibleSection = ({
  constainerStyle,
  title,
  titleStyle,
  description1,
  description2,
  children,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const onLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    setContentHeight(height);
  };

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    Animated.timing(animatedHeight, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  return (
    <Box
      borderWidth={1}
      borderColor="gray.200"
      rounded={'16px'}
      overflow="hidden"
      {...constainerStyle}
    >
      <Pressable onPress={toggleCollapse}>
        <HStack p={4} alignItems="center" justifyContent="space-between">
          <Box pr={4} style={{ flex: 1 }}>
            <Text variant="h5" {...titleStyle}>
              {title}
            </Text>
            {description1 ||
              (description2 && (
                <Text color={'gray.500'}>
                  {isOpen ? description2 : description1}
                </Text>
              ))}
          </Box>
          {isOpen ? (
            <ChevronUp color="#667085" width={12} />
          ) : (
            <ChevronDown color="#667085" width={12} />
          )}
        </HStack>
      </Pressable>

      <Animated.View
        style={{
          height: animatedHeight.interpolate({
            inputRange: [0, 1],
            outputRange: [0, contentHeight],
          }),
          overflow: 'hidden',
        }}
      >
        <Box p={4} pt={0} onLayout={onLayout}>
          <Box borderTopWidth={1} borderColor="gray.200">
            {children}
          </Box>
        </Box>
      </Animated.View>
    </Box>
  );
};

export default CollapsibleSection;
