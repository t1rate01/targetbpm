import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

// VIIKKO 1 Tavoitesyketehtävä Tero Rantanen TVT22KMO
// Kertasin conditional renderöintiä ja ternary operaattoria omaksi ilokseni

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
    if(ageNum === 0){
      setAge('');
      setMin(0);
      setMax(0);
      return;
    }
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
        placeholder='Enter age here:' 
        keyboardType='numeric'
        value={age}
        style={{textAlign: 'center',
         padding: 5,
        fontWeight: age === '' ? 'normal' : 'bold'}}
        onChangeText={text => 
          calculate(text)
        }
        
        />
      <Text style={styles.field}>{
        min === 0 && max === 0 ? '' : 'Heart rate limits:'
        }</Text>
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
