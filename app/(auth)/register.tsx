import { useState } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { router } from 'expo-router';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace('/(app)/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Create Account" onPress={handleSignup} />

       <Pressable onPress={() => router.push('/(auth)/login')}>
        <Text>
          Already have an account? <Text>Login</Text>
        </Text>
      </Pressable>
    </View>
  );
}
