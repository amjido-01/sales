import { View, Text, StyleSheet, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const auth = getAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.replace('/login'); // redirect to login after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Your Dashboard</Text>
      <Text style={styles.subText}>Here you can manage your daily sales and track profits.</Text>

      {/* Add more components here like Sales Summary, Recent Sales, etc. */}

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    marginBottom: 20,
  },
});
