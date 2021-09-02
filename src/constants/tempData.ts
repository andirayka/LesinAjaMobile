import {PilihanLesType, SiswaType} from './dataTypes';

export const master_pilihanles: PilihanLesType[] = [
  {nama: 'Matematika 1 SD - 4 Pertemuan', harga: 'Rp 200.000'},
  {nama: 'Matematika 2 SD - 4 Pertemuan', harga: 'Rp 200.000'},
  {nama: 'Matematika 3 SD - 4 Pertemuan', harga: 'Rp 175.000'},
  {nama: 'Matematika 4 SD - 4 Pertemuan', harga: 'Rp 200.000'},
  {nama: 'Matematika 5 SD - 4 Pertemuan', harga: 'Rp 100.000'},
  {nama: 'Matematika 6 SD - 4 Pertemuan', harga: 'Rp 200.000'},
];

export const master_siswa: SiswaType[] = [
  {nama: 'Fiqri Akbar', jenjangKelas: '1 SD'},
];

export const coursePresenceList = [
  {
    tanggal: 'Kamis, 02 September 2021',
    waktu: '07:00',
    tutor: 'Nico Akbar',
    status: 'selesai',
  },
  {
    tanggal: 'Jumat, 03 September 2021',
    waktu: '07:00',
    tutor: 'Nico Akbar',
    status: 'selesai',
  },
  {
    tanggal: 'Sabtu, 04 September 2021',
    waktu: '07:00',
    tutor: 'Nico Akbar',
  },
  {
    tanggal: 'Minggu, 06 September 2021',
    waktu: '07:00',
    tutor: 'Nico Akbar',
  },
];

export const listApplyingTutor = [
  {
    nama: 'Fahrul Firdaus',
    perguruanTinggi: 'Politeknik Elektronika Negeri Surabaya',
  },
  {
    nama: 'Nico Aidin',
    perguruanTinggi: 'Universitas Negeri Surabaya',
  },
  {
    nama: 'Fiqri Akbar',
    perguruanTinggi: 'Universitas Jember',
  },
];
