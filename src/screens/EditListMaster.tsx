import React, {FC} from 'react';
import {ButtonFormSubmit, Header, InputChoice, InputText} from '@components';
import {color, dimens, listJenjangKelas} from '@constants';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type FormDataType = {
  item: string;
  jumlahPertemuan: string;
  biaya: string;
  wilayah: Array<string>;
};
type ScreenProps = StackScreenProps<AppStackParamList, 'EditListMaster'>;
export const EditListMaster: FC<ScreenProps> = ({
  route,
  navigation: {navigate},
}) => {
  const {detailType, data}: any = route.params;
  console.log(data);

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
    setValue,
  } = useForm<FormDataType>({mode: 'onChange'});

  const onSubmit: SubmitHandler<FormDataType> = async data => {
    const success = true;

    if (success) {
      navigate<any>('DetailListMaster', {detailType: detailType});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title={`${data ? 'Ubah' : 'Tambah'} Data ${detailType}`} />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}>
          {/* Item */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <InputText
                autoCapitalize="words"
                placeholder="Masukkan nama item"
                label="Item"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={!!errors.item}
                errorMessage="Item harus diisi"
              />
            )}
            name="item"
            defaultValue={data && data.item}
          />

          {/* Jumlah pertemuan */}
          {detailType == 'Paket' && (
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <InputText
                  autoCapitalize="words"
                  placeholder="Masukkan jumlah pertemuan"
                  label="Jumlah Pertemuan"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.jumlahPertemuan}
                  errorMessage="Jumlah pertemuan harus diisi"
                />
              )}
              name="jumlahPertemuan"
              defaultValue={data && data.jumlahPertemuan}
            />
          )}

          {/* Biaya */}
          {detailType == 'Wilayah' && (
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, onBlur, value}}) => (
                <InputText
                  autoCapitalize="words"
                  placeholder="Masukkan biaya"
                  label="Biaya"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={!!errors.biaya}
                  errorMessage="Biaya harus diisi"
                />
              )}
              name="biaya"
              defaultValue={data && data.biaya}
            />
          )}

          {/* Wilayah */}
        </View>
      </ScrollView>

      {/* Submit button */}
      <ButtonFormSubmit
        isLoading={isSubmitting}
        text="Simpan"
        onPress={handleSubmit(onSubmit)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
