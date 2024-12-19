import { Arrowleft, Close, Edit03, Search } from "../icons";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Pressable,
  Spinner,
  Text,
} from "native-base";
import React, { memo, Ref, useEffect, useRef, useState } from "react";
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  StatusBar,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SkeletonProps {
  scrollViewRef?: Ref<ScrollView>;
  children?: React.ReactNode;
  bgColor?: string;
  headerTitle?: string | null;
  isWebviewHeader?: boolean;
  isHeader?: boolean;
  localImage?: boolean;
  headerBg?: string;
  headerCollapse?: boolean;
  isFooter?: boolean;
  isAmount?: boolean;
  amountTitle?: string;
  isEdit?: boolean;
  footerPrice?: string;
  showBackButton?: boolean;
  showRightButton?: React.ReactNode | null;
  rightButtonText?: string;
  showTextButton?: string;
  textButtonDisabled?: boolean;
  onPressTextButton?: (() => void) | null;
  customFooter?: object | null;
  onPressRightButton?: (() => void) | null;
  buttonOption?: {
    buttonTitle?: string;
    buttonVariant?: string;
    onPressButton?: () => void;
    buttonDisabled?: boolean;
  };
  onPressEdit?: (() => void) | null;
  onPressBackButton?: (() => void) | null;
  overlay?: boolean;
  isLoading?: boolean;
  refreshOption?: {
    isEnable?: boolean;
    onRefresh?: () => void;
    refreshing?: boolean;
    tintColor?: string;
  };
  titleColor?: string;
  testIDScreenName?: string;
  testIDName?: string;
  testIDCategory?: string;
  testIDErrorTitle?: string;
  testIDErrorDescription?: string;
  testIDErrorButton?: string;
  showInputField?: boolean;
  showCrossIcon?: boolean;
  autoFocus?: boolean;
  InputFiledOption?: {
    onTouchStart?: () => void;
    handleResult: (value: string) => void;
    handleIconTap: () => any;
    value?: string;
    label?: string;
    placeholder?: string;
    InputRightElement?: string;
  };
}

const Skeleton = ({
  scrollViewRef = null,
  children,
  bgColor,
  isWebviewHeader = false,
  isHeader,
  localImage = false,
  headerBg,
  headerTitle = null,
  headerCollapse = false,
  footerPrice,
  showBackButton = true,
  showRightButton,
  rightButtonText,
  showTextButton,
  textButtonDisabled,
  onPressTextButton = null,
  onPressRightButton = null,
  isFooter = false,
  isAmount = false,
  amountTitle = "Total Payment",
  customFooter = null,
  isEdit = false,
  buttonOption = {},
  onPressEdit = null,
  onPressBackButton = null,
  overlay = false,
  isLoading = false,
  testIDScreenName = "",
  testIDName = "",
  testIDCategory = "",
  testIDErrorTitle = "",
  testIDErrorDescription = "",
  testIDErrorButton = "",
  refreshOption = {
    isEnable: false,
    onRefresh: () => {
      return;
    },
    refreshing: false,
    tintColor: null,
  },
  titleColor,
  showInputField = false,
  showCrossIcon = false,
  autoFocus = false,
  InputFiledOption = {
    onTouchStart: () => {
      return;
    },
    handleResult: (value: string) => {
      return value;
    },
    value: "",
    label: "",
    handleIconTap: () => null,
  },
}: SkeletonProps) => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<any>();

  const routesLength = useNavigationState((state) => state.routes.length);

  const { buttonTitle, buttonVariant, onPressButton, buttonDisabled } =
    buttonOption;

  const { onTouchStart, handleResult, value, label, handleIconTap } =
    InputFiledOption;
  const checkBackButton = async () => {
    navigation.goBack();
  };

  const onRefresh = React.useCallback(async () => {
    if (refreshOption.onRefresh) {
      refreshOption.onRefresh();
    }
  }, []);

  // Navbar onScroll animation
  const [scrollCollapsed, setScrollCollapsed] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  const collapsedOpacity = useRef(new Animated.Value(1)).current;
  const uncollapsedOpacity = useRef(new Animated.Value(1)).current;

  // Default navbar collapse
  const isScrollCollapsed = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const threshold = 26;

    const scrollBounce =
      yOffset < 0 ||
      yOffset >
        event.nativeEvent.contentSize.height -
          event.nativeEvent.layoutMeasurement.height;

    if (!scrollBounce) {
      setScrollCollapsed(yOffset > threshold);
    }
  };

  useEffect(() => {
    Animated.timing(collapsedOpacity, {
      toValue: scrollCollapsed ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [scrollCollapsed, collapsedOpacity]);

  useEffect(() => {
    Animated.timing(uncollapsedOpacity, {
      toValue: scrollCollapsed ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [scrollCollapsed, uncollapsedOpacity]);

  // Navbar with bgHeader collapse
  const isScrollHeader = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const threshold = 150;

    setScrollHeader(yOffset > threshold);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, height: "100%" }}
    >
      <StatusBar
        animated={true}
        barStyle={bgColor ? "light-content" : "dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />

      {/* Header background */}
      {isHeader && localImage ? (
        <>
          <Image
            source={typeof headerBg === "string" ? { uri: headerBg } : headerBg}
            alt="bg"
            flex="1"
            width="110%"
            height="300px"
            position="absolute"
            resizeMode="cover"
          />
          <Text
            position="absolute"
            variant="h2"
            color="white"
            mt="180px"
            ml="4"
            shadow="6"
          >
            {headerTitle}
          </Text>
        </>
      ) : null}
      {isHeader && !localImage ? (
        <>
          <Image
            source={typeof headerBg === "string" ? { uri: headerBg } : headerBg}
            alt="bg"
            flex="1"
            width="110%"
            height="300px"
            position="absolute"
            resizeMode="cover"
          />
          <Text
            position="absolute"
            variant="h2"
            color="white"
            mt="180px"
            ml="4"
            shadow="6"
          >
            {headerTitle}
          </Text>
        </>
      ) : null}

      {/* Top navbar */}
      <Box
        bg={
          scrollHeader || (scrollCollapsed && !titleColor) ? "white" : bgColor
        }
        pt={!scrollCollapsed && !showBackButton ? "74px" : "50px"}
        px="4"
        pb="3"
        _ios={{ shadow: scrollHeader || scrollCollapsed ? 2 : "none" }}
        _android={{ shadow: scrollHeader || scrollCollapsed ? 2 : "none" }}
        style={{ zIndex: 2, shadowOpacity: 0.15 }}
      >
        <HStack
          justifyContent={
            !showBackButton && !showRightButton ? "center" : "space-between"
          }
          alignContent="center"
          alignItems="center"
        >
          {(navigation.canGoBack() ||
            onPressBackButton ||
            routesLength === 1) &&
          showBackButton ? (
            <Pressable
              onPress={checkBackButton}
              isDisabled={isLoading}
              bg="gray.50"
              pt="2"
              pl="1.5"
              rounded="full"
              width="40px"
              height="40px"
            >
              <Arrowleft
                width="28px"
                color={isLoading ? "#667085" : "#000000"}
              />
            </Pressable>
          ) : (
            <Box mt="2"></Box>
          )}

          {/* Collapse header title */}
          {scrollCollapsed || headerCollapse ? (
            <Animated.View
              style={{ opacity: scrollCollapsed ? collapsedOpacity : 1 }}
            >
              <Text variant="h4" color={titleColor} mt="4px">
                {headerTitle}
              </Text>
            </Animated.View>
          ) : null}

          {showRightButton ? (
            <Pressable
              onPress={onPressRightButton}
              isDisabled={isLoading}
              bg="gray.50"
              pt="2"
              rounded="full"
              minWidth="40px"
              height="40px"
            >
              {rightButtonText && !scrollCollapsed ? (
                <HStack alignItems="center" mx={rightButtonText ? 4 : 0}>
                  {showRightButton}
                  <Text
                    variant="body1"
                    color="black"
                    ml="2"
                  >
                    {rightButtonText}
                  </Text>
                </HStack>
              ) : (
                <Box ml="2">{showRightButton}</Box>
              )}
            </Pressable>
          ) : (!showRightButton && !showBackButton) || showTextButton ? null : (
            <Box width="40px"></Box>
          )}

          {showTextButton ? (
            <Pressable
              isDisabled={textButtonDisabled}
              onPress={onPressTextButton}
            >
              <Text
                variant="body1"
                color={textButtonDisabled ? "gray.300" : "primary.600"}
              >
                {showTextButton}
              </Text>
            </Pressable>
          ) : null}

          {showInputField && (
            <Box ml={-8} mr={1.5} flexGrow={1}>
              <Input
                width="100%"
                height={10}
                onTouchStart={onTouchStart}
                onChangeText={(value: string) => handleResult(value)}
                value={value}
                autoFocus={autoFocus}
                placeholder={label}
                InputRightElement={
                  <Pressable onPress={handleIconTap}>
                    {showCrossIcon ? (
                      <Close color={"#667085"} width="30px" height="20px" />
                    ) : (
                      <Search color={"#667085"} width="30px" height="20px" />
                    )}
                  </Pressable>
                }
              />
            </Box>
          )}
        </HStack>
      </Box>

      {/* Content with header image */}
      {isHeader ? (
        <Box flex={1}>
          <Animated.ScrollView
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onScroll={isScrollHeader}
            scrollEventThrottle={16}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps={"always"}
          >
            {children}
          </Animated.ScrollView>
        </Box>
      ) : (
        // Default Content
        <Box flex={1} h={"full"}>
          <Animated.ScrollView
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onScroll={isScrollCollapsed}
            scrollEventThrottle={16}
            keyboardShouldPersistTaps={"always"}
            refreshControl={
              refreshOption.isEnable ? (
                <RefreshControl
                  refreshing={refreshOption.refreshing ?? false}
                  onRefresh={onRefresh}
                  tintColor={refreshOption.tintColor}
                />
              ) : undefined
            }
            contentContainerStyle={{
              flexGrow: 1,
              minHeight: scrollCollapsed ? "110%" : "auto",
            }}
          >
            {headerTitle && !headerCollapse ? (
              <Text
                fontWeight="800"
                variant="h2"
                mt="0"
                mb="3"
                mx="4"
                color={titleColor}
              >
                {headerTitle}
              </Text>
            ) : null}
            {children}
          </Animated.ScrollView>
        </Box>
      )}

      {/* Footer */}
      {isFooter && (
        <Box
          bg={bgColor ?? "white"}
          p="4"
          pb={insets.bottom + 2}
          _ios={{ shadow: 4 }}
          _android={{ shadow: 9 }}
        >
          {isAmount && !customFooter ? (
            <HStack justifyContent="space-between" alignItems="center">
              <Pressable
                onPress={
                  isEdit
                    ? onPressEdit
                    : () => {
                        void 0;
                      }
                }
              >
                <Box>
                  <Text
                    variant="body"
                    color="gray.500"
                  >
                    {amountTitle}
                  </Text>
                  <HStack>
                    <Text
                      variant="h4"
                      mr="1"
                    >
                      {footerPrice}
                    </Text>
                    {isEdit ? (
                      <Box mt="2px">
                        <Edit03 width="22px" color="#0064DC" />
                      </Box>
                    ) : null}
                  </HStack>
                </Box>
              </Pressable>
              <Button
                width={isAmount ? "50%" : "100%"}
                variant={buttonVariant}
                onPress={onPressButton}
                isDisabled={buttonDisabled}
              >
                {isLoading ? <Spinner color="white" /> : buttonTitle}
              </Button>
            </HStack>
          ) : (
            customFooter ?? (
              <Button
                variant={buttonVariant}
                onPress={onPressButton}
                isDisabled={buttonDisabled}
              >
                {isLoading ? <Spinner color="white" /> : buttonTitle}
              </Button>
            )
          )}
        </Box>
      )}
    </KeyboardAvoidingView>
  );
};

export default memo(Skeleton);
