import React, {FC} from 'react';
import {
  ButtonFormSubmit,
  CardKeyValue,
  Header,
  InputChoice,
  InputRadio,
} from '@components';
import {
  color,
  dimens,
  master_pilihanles,
  master_siswa,
  PilihanLesType,
} from '@constants';
import {Controller, useForm} from 'react-hook-form';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Button, Text, TextInput, RadioButton, Card} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type FormDataType = {
  pilihanles: string;
  preferensiTutor: '' | 'laki-laki' | 'perempuan' | 'bebas';
  siswa: string;
  jadwalLes: {waktu: number}[];
};
type ScreenProps = StackScreenProps<AppStackParamList>;
export const AddLes: FC<ScreenProps> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({mode: 'onChange'});

  const onSubmit = async (data: object) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Tambah Les Baru" />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: dimens.standard}}>
          {/* Siswa */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <InputChoice
                label="Siswa yang Mengikuti Les"
                value={value}
                error={!!errors.siswa}
                errorMessage="Harap pilih siswa yang mengikuti les"
                onSelect={item => onChange(item.nama)}
                listData={master_siswa}
                keyMenuTitle="nama"
                keyMenuDescription="jenjangKelas"
              />
            )}
            name="siswa"
            defaultValue={''}
          />

          {/* Pilihan les */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <InputChoice
                label="Pilihan Les"
                value={value}
                error={!!errors.pilihanles}
                errorMessage="Harap pilih les yang akan diikuti"
                onSelect={item => onChange(item.nama)}
                listData={master_pilihanles}
                keyMenuTitle="nama"
                keyMenuDescription="harga"
              />
            )}
            name="pilihanles"
            defaultValue={''}
          />

          {/* Jadwal Les Rutin */}
          {/* <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <InputChoice
                label="Jadwal Les Rutin"
                value="Pilih jadwal les rutin"
                error={!!errors.pilihanles}
                errorMessage="Harap pilih les yang akan diikuti"
                onSelect={item => onChange(item.nama)}
                listData={master_pilihanles}
                keyMenuTitle="nama"
                keyMenuDescription="harga"
              />
            )}
            name="pilihanles"
            defaultValue={''}
          /> */}

          {/* Jenis kelamin tutor */}
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <InputRadio
                label="Preferensi Jenis Kelamin Tutor"
                value={value}
                onChange={onChange}
                radioItems={[
                  {text: 'Laki-laki', value: 'laki-laki'},
                  {text: 'Perempuan', value: 'perempuan'},
                  {text: 'Bebas', value: 'bebas'},
                ]}
                error={!!errors.preferensiTutor}
                errorMessage="Harap pilih prefrensi tutor"
              />
            )}
            name="preferensiTutor"
            defaultValue={''}
          />

          {/* Total Price */}
          <TotalPrice
            hargaLes="Rp 200.000"
            hargaDaftar="Rp 150.000"
            total="Rp 350.000"
          />
        </View>
      </ScrollView>

      {/* Submit button */}
      <ButtonFormSubmit text="Kirim" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
};

type TotalPriceType = {
  hargaLes: string;
  hargaDaftar?: string;
  total: string;
};

const TotalPrice: FC<TotalPriceType> = ({hargaLes, hargaDaftar, total}) => {
  return (
    <Card style={{marginTop: dimens.standard}}>
      <Card.Title title={`Total: ${total}`} />

      <Card.Content style={{marginTop: dimens.small}}>
        <CardKeyValue keyName="Biaya Les" value={hargaLes} />
        {hargaDaftar && (
          <CardKeyValue keyName="Pendaftaran" value={hargaDaftar} />
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
