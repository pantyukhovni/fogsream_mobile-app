import { useStore } from 'effector-react';
import React, { useCallback, useRef } from 'react'
import type { KeyboardEvent } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Text, TextInput, View, StyleSheet, Dimensions, Pressable, Image, ScrollView, Animated } from 'react-native';
import { setText } from '../../models/catalog/init';
import { $form } from '../../models/catalog/store';
import { useForm, Controller } from "react-hook-form";
import { colors } from '../../common/styles';
import { CatalogImage } from '../../res/catalogIcon';
import SubmitButton from '../../common/components/SubmitButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './constants';
import ErrorText from '../../common/components/ErrorText';
import { useKeyboardOpen } from '../../common/hooks/useKeyboardOpen';
import TextInputMask from 'react-native-text-input-mask';

interface IStore {
  firstName: string;
  lastName: string;
  email: string;
  phone: string
}

const defaultValues = {
  firstName: '',
  fastName: ''
}

const rules = {
  required: true
}

const { width } = Dimensions.get('window');


const CatalogForm = () => {
  const cdf = useStore($form);

  const posY = useRef(new Animated.Value(0)).current;

  const {
    control,
    handleSubmit,
    formState: {
      errors,
      isValid,
      touchedFields,
      isValidating
    },
   } = useForm<IStore>(({
    resolver: yupResolver(schema)
  }));

  const keyboardWillShow = (keyboardEvent: KeyboardEvent) => {
    Animated.timing(posY, {
      toValue: keyboardEvent.endCoordinates.height,
      useNativeDriver: false,
      duration: keyboardEvent.duration
    }).start();
  }

  useKeyboardOpen({ keyboardWillShow });

  const onSubmit = (data: IStore) => {
    console.log('data', data);
  };

  console.log('isValid', isValid);
  console.log('errors', errors);

  const onPress = useCallback(() => handleSubmit(onSubmit), []);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={CatalogImage}
          resizeMode="stretch"
        />
      </View>
      <View style={[styles.inputsContainer]}>
        <View style={styles.inputContainer}>
          <Text style={styles.firstNameTitle}>Имя</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value }}) => (
              <TextInput
                placeholder='Введите текст'
                placeholderTextColor={colors.text.paleGrey}
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <ErrorText message={errors.firstName.message} />}
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.firstNameTitle}>Фамилия</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Введите фамилию"
                  placeholderTextColor={colors.text.paleGrey}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
              name="lastName"
            />
            {errors.lastName && <ErrorText message={errors.lastName.message} />}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.firstNameTitle}>Мобильный телефон</Text>
          <Controller
            control={control}
            render={({ field: { value, onBlur, onChange } }) => (
              <TextInputMask
                keyboardType='phone-pad'
                mask={'+7 ([000]) [000]-[00]-[00]'}
                style={styles.input}
                focusable
                value={value}
                onBlur={onBlur}
                onChangeText={(formatted, extracted) =>
                  onChange(extracted || '')
                }
              />
            )}
            name="phone"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.firstNameTitle}>Электронная почта</Text>
          <Controller
            control={control}
            render={({ field: {onBlur, onChange, value} }) => (
              <TextInput
                style={styles.input}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="email-address"
              />
            )}
            name="email"
          />
        </View>
      </View>
      <Pressable
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
      >
        {isValid ? (
          <Text style={styles.submitButtonText}>Отправить форму</Text>
        ) : (
          <Text>Задизайблин</Text>
        )}
      </Pressable>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    marginBottom: 50
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  image: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    marginTop: 30
  },
  firstNameTitle: {
    marginBottom: 5,
    fontSize: 14
  },
  container: {
    width,
    height: "100%",
    paddingHorizontal: 20,
    marginBottom: 20
  },
  input: {
    borderWidth: 2,
    borderColor: colors.icon.black,
    height: 50,
    width: '100%',
    backgroundColor: colors.icon.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: colors.button.primary,
    alignItems: 'center',
    justifyContent: 'center',
    // top: 300, // TODO: убрать
    borderRadius: 30
  },
  submitButtonText: {
    color: colors.basic.white
  }
});

export default CatalogForm;
