import React, {FC} from 'react';
import {ButtonFormSubmit, CardLabelValue, Gap, Header} from '@components';
import {color, dimens} from '@constants';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Avatar, Card, Divider, Subheading, Title} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';

type ScreenProps = StackScreenProps<AppStackParamList, 'DetailTutor'>;
export const DetailTutor: FC<ScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Detail Tutor" />

      <ScrollView
        contentContainerStyle={{flexGrow: 1, padding: dimens.standard}}>
        <Card style={styles.contentContainer}>
          {/* Profile Photo */}
          <Avatar.Image
            size={160}
            source={{uri: 'http://placekitten.com/200/200'}}
            style={{alignSelf: 'center'}}
          />
          <Title style={{textAlign: 'center'}}>Abdul Malik, S.Kom.</Title>
          <Subheading style={{textAlign: 'center'}}>
            Bahasa Arab, Matematika, IPA
          </Subheading>
          <Gap y={dimens.tiny} />
          <Divider />
          <Gap y={dimens.tiny} />

          {/* More data */}
          <CardLabelValue
            label="Perguruan Tinggi"
            value="Universitas Teknologi Sepuluh November"
          />
          <CardLabelValue label="Jurusan" value="Teknik Informatika" />
          <CardLabelValue
            label="Alamat"
            value="Jl.Kenari No 37, RT 004, RW 036, Desa Arjosari, Kecamatan Kalipare, Kabupaten Malang, Provinsi Jawa Timur"
          />
          <CardLabelValue
            label="Pengalaman Mengajar"
            value="Banyak sekali pengalaman yang sangat berharga saat mengajar di kelas I Sekolah Dasar. Salah satunya adalah latar belakang siswa yang berbeda, ada yang cerdas namun pemalu atau kurang percaya diri, ada yang hiperaktif tapi dalam akademik saat diberikan tugas ia kurang menyukainya, dan ada pula yang selalu cari perhatian dan keinginannya harus selalu dituruti.\nDengan berbagai perasaan yang bercampur aduk saya ditempatkan di kelas 2. Karena pada saat itu, mereka guru-guru senior disana melihat latar belakang saya adalah seorang yang berpengalaman karena sudah pernah mengajar di TK."
          />
          <CardLabelValue
            label="Video Microteaching"
            value="https://www.youtube.com/channel/UCamTWDXkcyEquLV-aBzKqFA"
            isValueLink
          />
        </Card>
      </ScrollView>
      {/* Submit button */}
      <ButtonFormSubmit text="Pilih Tutor" onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: dimens.standard,
  },
});
