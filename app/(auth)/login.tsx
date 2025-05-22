import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { auth } from '@/firebaseConfig';
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Text } from 'react-native';
import { Pressable } from "@/components/ui/pressable";
import { FirebaseError } from "firebase/app";
import { firebaseErrorMessages } from "@/utils/firebaseErrors";



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
      <Box className="w-full p-6 border border-gray-200 rounded-xl">
        <VStack className="pb-4 space-y-1">
          <Heading className="text-2xl">Login</Heading>
          <Text className="text-gray-500 text-sm">
            Welcome back! Enter your credentials to continue.
          </Text>
        </VStack>
        <VStack space="xl" className="py-2">
          <Input>
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              className="py-2"
            />
          </Input>
          <Input>
            <InputField
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              className="py-2"
            />
          </Input>
        </VStack>
        <VStack space="lg" className="pt-4">
            {errorMessage ? (
    <Text className="text-red-500 text-sm">
      {errorMessage}
    </Text>
  ) : null}
          <Button size="sm" onPress={handleLogin}>
            <ButtonText>Login</ButtonText>
          </Button>
                 <Pressable onPress={() => router.push('/register')}>
                  <Text>
                    Dont have an account? <Text>Register</Text>
                  </Text>
                </Pressable>
        </VStack>
      </Box>
    </Center>
  );
}
