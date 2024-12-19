import React from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StatusBar,
  Text,
  VStack,
} from "native-base";
import { Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Arrowleft } from "../icons";
import Footer from "../components/Footer";
import { withNativeBase } from "src/utils/withNativeBase";

const MiniApp = ({
  name,
  displayName,
  banner,
  footerLogo,
  footerText,
  quickLinksTitle,
  quickLinks,
  productsTitle,
  products,
  isAuthorized,
}) => {
  const navigation = useNavigation<any>();
  const inset = useSafeAreaInsets();

  const onPressQuickLink = (link) => {
    if (isAuthorized) {
      navigation.navigate(link.navigateTo);
    } else {
      navigation.navigate("Authorisation", {
        name,
        displayName,
        navigateTo: link.navigateTo,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, height: "100%", backgroundColor: "#CCE0F8" }}
    >
      <StatusBar
        backgroundColor={"#CCE0F8"}
        barStyle="dark-content"
        animated={true}
      />
      <>
        <Image
          source={banner}
          alt={displayName}
          style={{
            width: "100%",
            resizeMode: "contain",
          }}
        />
        <Pressable
          onPress={() => navigation.goBack()}
          bg="white"
          pt="2"
          pl="1.5"
          rounded="full"
          width="40px"
          height="40px"
          style={{
            position: "absolute",
            top: inset.top + 10,
            left: 16,
            zIndex: 100,
          }}
        >
          <Arrowleft width="28px" color={"#000000"} />
        </Pressable>
      </>
      <Box
        bg="white"
        roundedTop="24"
        width="100%"
        style={{
          flex: 1,
          marginTop: -34,
        }}
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 24,
            paddingHorizontal: 16,
          }}
          keyboardShouldPersistTaps={"always"}
        >
          {/* Quick Links */}
          <Box>
            <Text variant="h4">{quickLinksTitle}</Text>
            <HStack space={1} alignItems="center" mt="4">
              {quickLinks.map((link, index) => (
                <Pressable
                  style={{ flex: 1 }}
                  key={index}
                  onPress={() => onPressQuickLink(link)}
                >
                  <Box alignItems="center" style={{ flex: 1 }}>
                    <Avatar
                      width="62px"
                      height="62px"
                      variant="circle"
                      backgroundColor="primary.25"
                    >
                      {link.icon()}
                    </Avatar>
                    <Text mt={1} variant="h8">
                      {link.displayName}
                    </Text>
                  </Box>
                </Pressable>
              ))}
            </HStack>
          </Box>
          {/* Products */}
          <Box mt="8" pb="4">
            <Text variant="h4">{productsTitle}</Text>
            {products.map((product, index) => (
              <Box
                key={index}
                bg="white"
                rounded="12px"
                mt="4"
                style={{
                  shadowColor: "#101828",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 2,
                  elevation: 2,
                  backgroundColor: "#F9FAFB",
                }}
              >
                <Image
                  source={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: undefined,
                    aspectRatio: 16 / 9,
                    resizeMode: "cover",
                  }}
                />
                <Box pt="4" pl="3" pr="3" pb="5">
                  <Text variant="h5">{product.title}</Text>
                  <Text color="gray.500">{product.description}</Text>
                  <HStack
                    mt="4"
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    <VStack>
                      {product.showFrom && <Text color="gray.500">From</Text>}
                      <HStack alignItems="flex-end" mb="3px">
                        <Text variant="h3" style={{ lineHeight: 1 }}>
                          {product.price}
                        </Text>
                        <Text>/{product.periodity}</Text>
                      </HStack>
                    </VStack>
                    <Button
                      onPress={() => navigation.navigate("ProductDetail")}
                      height="34px"
                      py={2}
                      px={3.5}
                      _text={{
                        fontSize: "14px",
                        lineHeight: "14px",
                      }}
                    >
                      {product.buttonText}
                    </Button>
                  </HStack>
                </Box>
              </Box>
            ))}
          </Box>
          <Footer
            logo={footerLogo}
            displayName={displayName}
            logoWidth={91}
            logoHeight={31}
            description={footerText}
          />
        </ScrollView>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default withNativeBase(MiniApp);
