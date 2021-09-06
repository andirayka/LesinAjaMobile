import React, {FC, useEffect, useState} from 'react';
import {
  CardKeyValue,
  EmptyData,
  FABList,
  Gap,
  Header,
  OneLineInfo,
  SkeletonLoading,
  StandardDialog,
} from '@components';
import {color, dimens, StudentType} from '@constants';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList} from '@routes/RouteTypes';
import {apiDelete, apiGet} from '@utils';
import {useIsFocused} from '@react-navigation/core';

type ScreenProps = StackScreenProps<AppStackParamList, 'ListStudents'>;
export const ListStudents: FC<ScreenProps> = ({navigation: {navigate}}) => {
  const [listData, setListData] = useState<StudentType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({
    id: 0,
    nama: '',
  });
  const isFocus = useIsFocused();

  useEffect(() => {
    let isActive = true;

    const getInitialData = async () => {
      const {data}: {data: StudentType[]} = await apiGet({
        url: 'siswa/my',
        params: {
          page: 1,
          siswa: '',
          orderBy: 'siswa',
          sort: 'ASC',
        },
      });
      if (isActive) {
        setListData(data);
        setIsLoading(false);
        setIsRefreshing(false);
      }
    };

    if (isRefreshing || isLoading || isFocus) {
      getInitialData();
    }

    return () => {
      isActive = false;
    };
  }, [isFocus, isLoading, isRefreshing]);

  // delete siswa
  const deleteData = async (id: number) => {
    const {success} = await apiDelete({
      url: `siswa/${id}`,
    });
    if (success) {
      setIsRefreshing(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} barStyle="dark-content" />

      <Header title="Daftar Siswa Anda" />

      {/* Choose role */}
      <StandardDialog
        visible={!!selectedStudent.nama}
        title={`Apakah Anda yakin akan menghapus siswa ${selectedStudent.nama}?`}
        description="Data dihapus tidak bisa dikembalikan"
        action1Text="batal"
        onPressAction1={() => {
          setSelectedStudent({id: 0, nama: ''});
        }}
        action2Text="yakin"
        onPressAction2={() => {
          deleteData(selectedStudent.id);
          setSelectedStudent({id: 0, nama: ''});
        }}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{flex: 1, padding: dimens.standard, paddingTop: dimens.small}}>
          {isLoading || isRefreshing ? (
            <SkeletonLoading />
          ) : listData.length < 1 ? (
            <EmptyData />
          ) : (
            <>
              <OneLineInfo info="Klik item untuk mengubah data" />

              {listData.map(item => {
                return (
                  <StudentItem
                    item={item}
                    onPress={() => {
                      navigate('EditStudent', {item});
                    }}
                    onDelete={() => {
                      setSelectedStudent({id: item.idsiswa, nama: item.siswa});
                    }}
                    key={item.idsiswa}
                  />
                );
              })}
            </>
          )}
        </View>

        <Gap y={72} />
      </ScrollView>

      {/* Add button */}
      <FABList
        label="Tambah Siswa Baru"
        onPress={() => {
          navigate('EditStudent');
        }}
      />
    </SafeAreaView>
  );
};

const StudentItem: FC<{
  item: StudentType;
  onPress: () => void;
  onDelete: (id: number) => void;
}> = ({item, onPress, onDelete}) => {
  const showKelasJenjang = () => {
    if (item.jenjang == 'TK') {
      return item.kelas;
    }
    return `${item.kelas} ${item.jenjang}`;
  };

  return (
    <Card style={{marginTop: dimens.standard}} onPress={onPress}>
      <Card.Title title={item.siswa} />
      <Card.Content>
        <CardKeyValue keyName="Jenis Kelamin" value={item.jeniskelamin} />
        <CardKeyValue keyName="Jenjang Kelas" value={showKelasJenjang()} />
        {/* <CardKeyValue keyName="Sekolah" value={item.} /> */}
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={() => {
            onDelete(item.idsiswa);
          }}
          labelStyle={{color: '#DC2626'}}>
          Hapus siswa
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.bg_grey,
    flex: 1,
  },
});
