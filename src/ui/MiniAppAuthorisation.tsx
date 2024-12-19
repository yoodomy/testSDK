import React, { useRef, useState } from "react";
import {
  Box,
  Text,
  Switch,
  HStack,
  Image,
  Pressable,
  VStack,
  Checkbox,
} from "native-base";
import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  SwitchHorizontal,
} from "../icons";
import { Animated, Easing, LayoutChangeEvent, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CollapsibleSection } from "../components";
import { withNativeBase } from "src/utils/withNativeBase";

const defaultInformations = [
  {
    title: "Full Name",
    description: "As per your NRIC",
  },
  {
    title: "NRIC Number",
    description: "Your NRIC number",
  },
  {
    title: "Phone Number",
    description: "Your phone number",
  },
  {
    title: "Email",
    description: "Your email address",
  },
];

const Skeleton = ({ headerTitle, isFooter, buttonOption, children }) => {
  return <View>{children}</View>;
};

function MiniAppAuthorisation({
  appName,
  displayName,
  informations = defaultInformations,
  onPress,
}) {
  const navigation = useNavigation();
  const [isAgreed, setIsAgreed] = useState(false);
  const { t } = useTranslation();

  const toggleCheckbox = () => {
    setIsAgreed(!isAgreed);
  };

  return (
    <Box flex={1} bg="white">
      <Skeleton
        headerTitle={"Authorisation"}
        isFooter={true}
        buttonOption={{
          buttonTitle: "Agree",
          buttonDisabled: !isAgreed,
          onPressButton: () => onPress(),
        }}
      >
        <VStack flex={1}>
          <Box mx={4} flex={1}>
            <HStack alignItems="center" justifyContent="center" py={8}>
              <Image
                source={require("../assets/appIcon.png")}
                style={{ width: 80, height: 80 }}
                alt="Celcomdigi"
                rounded="16px"
              />
              <Box px={2}>
                <SwitchHorizontal />
              </Box>
              <Image
                source={require(`../assets/miniapp-icons/${appName}.png`)}
                style={{ width: 80, height: 80 }}
                alt={displayName}
                rounded="16px"
              />
            </HStack>
            <Box mb={6}>
              <Text variant="h5" textAlign="center">
                {displayName}
              </Text>
              <Text textAlign="center">
                Partner would like to get to know you better:
              </Text>
            </Box>

            <CollapsibleSection
              title="Personal data"
              description1="Your information will be used to provide you with a better and more personalised experience."
              description2="Your information will be used for an eligibility check"
            >
              {informations.map((info, index) => (
                <HStack
                  key={index}
                  py={5}
                  alignItems="center"
                  justifyContent="space-between"
                  borderBottomWidth={1}
                  borderColor="gray.200"
                >
                  <CheckCircle color="#0064DC" width={24} />
                  <VStack pl={2} style={{ flex: 1 }}>
                    <Text variant="body1">{info.title || "-"}</Text>
                    <Text color="gray.500">{info.description || "-"}</Text>
                  </VStack>
                </HStack>
              ))}
            </CollapsibleSection>
          </Box>

          <Box m={4} mb={28}>
            <HStack justifyContent="space-between">
              <Checkbox
                aria-label="Agree T&C"
                value="agreed"
                isChecked={isAgreed}
                onChange={toggleCheckbox}
                borderRadius="full"
                mt={1}
              />
              <Box ml={2}>
                <Text>
                  <Text>
                    By clicking the ‘Agree’ buttong below, you hereby expressly
                    consent to the sharing of your Personal Data above with the
                    Partner subject to the following
                  </Text>
                  <Text fontWeight="500" color={"primary.600"}>
                    T&C
                  </Text>
                  <Text>.</Text>
                </Text>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Skeleton>
    </Box>
  );
}

export default withNativeBase(MiniAppAuthorisation);
