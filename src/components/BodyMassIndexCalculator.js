import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from './FormikTextInputComponent';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputs: {
    flex: 1,
    color: "white",
    marginTop: 4,
    borderStyle: 'solid',
    borderColor: 'gray',
    backgroundColor: 'pink',

  },
  textCalculate: {
    flex: 4,
    color: 'white',
    height: 5,
    borderColor: 'gray',
    backgroundColor: 'green',
  }
})

const initialValues = {
  mass: '200',
  height: '',
};

const getBodyMassIndex = (mass, height) => {
  return Math.round(mass / Math.pow(height, 2));
};

const BodyMassIndexForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name="mass" placeholder="Weight (kg)" />
      <FormikTextInput name="height" placeholder="Height (kg)" />
      <Pressable style={styles.textCalculate} onPress={onSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  );
};

const BodyMassIndexCalculator = () => {
  const onSubmit = values => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);

    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {( {handleSubmit }) => <BodyMassIndexForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default BodyMassIndexCalculator;
