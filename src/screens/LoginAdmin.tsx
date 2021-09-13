import React, {FC, useContext} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {dimens} from '@constants';
import {apiPost} from '@utils';
import {ButtonFormSubmit, Gap, InputText} from '@components';
import {Subheading, TextInput, Title} from 'react-native-paper';
import {AuthContext} from '@context/AuthContext';

type FormDataType = {
  email: string;
  password: string;
};
// Login screen for Admin only
export const LoginAdmin: FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
    setValue,
  } = useForm<FormDataType>({mode: 'onChange'});
  const {setUserRole} = useContext(AuthContext);

  const onSubmit: SubmitHandler<FormDataType> = async data => {
    // const {success} = await apiPost({url: 'auth/admin/login', payload: data});
    // if (success) {
    //   alert('Login admin sukses');
    // }
    setUserRole('admin', true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{flex: 1, padding: dimens.standard}}>
        <Gap y={50} />

        <Title style={{marginTop: dimens.medium, textAlign: 'center'}}>
          Masuk halaman Admin
        </Title>
        <Subheading style={{marginTop: dimens.small, textAlign: 'center'}}>
          Masukkan email dan password untuk melanjutkan.
        </Subheading>

        <Gap y={80} />

        {/* Email */}
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <InputText
              keyboardType="email-address"
              placeholder="Masukkan email Admin"
              label="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.email}
              errorMessage="Email harus diisi"
            />
          )}
          name="email"
          defaultValue={''}
        />
        {/* Password */}
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <InputText
              passwordMode
              placeholder="Masukkan kata sandi"
              label="Kata sandi"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.password}
              errorMessage="Kata sandi harus diisi"
            />
          )}
          name="password"
          defaultValue={''}
        />
      </View>
      {/* Submit button */}
      <ButtonFormSubmit
        isLoading={isSubmitting}
        text="Masuk"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
