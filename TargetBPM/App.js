import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

// VIIKKO 1 Tavoitesyketehtävä Tero Rantanen TVT22KMO

export default function App() {
  const [age, setAge] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const calculate = (text) => {
    if (text === '') { // jotta voi tyhjentää kentän, resettaus
      setAge('');
      setMin(0);
      setMax(0);
      return;
    }

    const ageNum = parseFloat(text);
    if(!isNaN(ageNum)) {  // NaN virhekäsittely
      setAge(text);
      setMin(Math.round((220 - ageNum) * 0.65));
      setMax(Math.round((220 - ageNum) * 0.85));
  }
}


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Calculate your heart rate limits!</Text>
      <TextInput 
        placeholder='Your age:' 
        keyboardType='numeric'
        value={age}
        onChangeText={text => 
          calculate(text)
        }
        style={styles.field}
        />
      <Text style={styles.field}>Heart rate limits:</Text>
      <Text style={styles.field}>
        {min === 0 && max === 0 ? '' : `${min} - ${max}`}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field : {
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
