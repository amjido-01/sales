import { Box } from "@/components/ui/box";
import { Button, ButtonText, ButtonSpinner } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputSlot, InputIcon } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, MailIcon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { auth } from '@/firebaseConfig';
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Text } from 'react-native';
import { Pressable } from "@/components/ui/pressable";
import { FirebaseError } from "firebase/app";
import { firebaseErrorMessages } from "@/utils/firebaseErrors";
import colors from "tailwindcss/colors"


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


    const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }

  const handleLogin = async () => {
     if (!email || !password) return;
    setLoading(true);
    setErrorMessage('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/dashboard');
      } catch (error: any) {
        if (error instanceof FirebaseError) {
    const message =
      firebaseErrorMessages[error.code as keyof typeof firebaseErrorMessages] ||
      "An unexpected error occurred.";
    setErrorMessage(message);
    }
    } finally { 
    setLoading(false);
  }
  };

  return (
    <Center className="flex-1 bg-white px-4">

       <VStack className="pb-4 space-y-1">
  <Heading className="text-[32px] leading-[48px] font-bold text-[#000000FF] text-center">Access Account</Heading>
  <Text className="text-center text-[17px] leading-[26px] font-normal text-[#000000FF] ">
    Log in to access your sales data
  </Text>
</VStack>

      <Box className="w-full p-6">
        <VStack space="xl" className="py-2">
          <Input className="h-[44px] border-b">
            <InputSlot className="pl-3"><InputIcon color="#171A1FFF" className="h-[20px] w-[20px]" as={MailIcon} /></InputSlot>
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              className="py-2 text-[16px] leading-[26px] font-normal rounded-[6px] h-[44px]"
            />
          </Input>
         <Input className="text-center h-[44px]">
                     <InputSlot className="pl-3" onPress={handleState}>
              <InputIcon className="h-[20px] w-[20px]" color="#171A1FFF" as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
            <InputField
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              className="py-2 text-[16px] leading-[26px] font-normal rounded-[6px] h-[44px]" type={showPassword ? "text" : "password"} />
           
          </Input>
        </VStack>
        <VStack space="lg" className="pt-4">
            {errorMessage ? (
    <Text className="text-red-500 text-sm">
      {errorMessage}
    </Text>
  ) : null}
         <Button size="md" style={{
    backgroundColor: email && password ? '#636AE8FF' : '#AEB2F5',
    borderRadius: 6,
    paddingHorizontal: 16,  opacity: loading ? 0.8 : 1,
  }} className="rounded-[6px] text-[16px] leading-[26px] font-normal px-[16px]" onPress={handleLogin}>
            <ButtonText> {loading ? (
        <>
          <ButtonSpinner className="mt-4 mr-2" color={colors.gray[100]} />
          <ButtonText className="ml-4 text-[16px] leading-[26px] font-normal">Please wait...</ButtonText>
        </>
      ) : (
        <ButtonText className="text-[16px] leading-[26px] font-normal">Log In</ButtonText>
      )}</ButtonText>
          </Button>
                 <Pressable className="mt-[20px]" onPress={() => router.push('/register')}>
                  <Text className="text-[14px] leading-[22px] font-normal text-[#000000ff]">
                    Dont have an account? <Text className="text-[#636ae8ff]">Register</Text>
                  </Text>
                </Pressable>
        </VStack>
      </Box>
    </Center>
  );
}
