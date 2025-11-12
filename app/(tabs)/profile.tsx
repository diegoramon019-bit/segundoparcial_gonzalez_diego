import { Image, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/*foto de perfil*/}
      <Image
        source={require('@/assets/images/perfil.jpg')} // 👉 cambia esta ruta a tu imagen
        style={styles.profileImage}
      />

      <Text style={styles.title}>Mi Perfil - Diego Ramon Gonzalez Sosa</Text>
      <Text style={styles.info}>Email: diego.ggonzalez@uaa.edu.py</Text>
      <Text style={styles.info}>Carrera: Ingeniería en Informática</Text>
      <Text style={styles.info}>Énfasis en sistemas informáticos y redes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 130, 
    height: 130,
    borderRadius: 65, 
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
});
