import Axios from 'axios';
import AppConfig from '@/AppConfig';

const databaseUrl = AppConfig.endpoint.database;

const fetchDataArray = async refString => {
  return await Axios.get(databaseUrl + `${refString}.json`).then(({ data }) =>
    data.map((rawData, dbIndex) => {
      const normalizedData = rawData.fields;
      normalizedData.uid = dbIndex;
      return normalizedData;
    }),
  );
  // let data = await firebase
  //   .database()
  //   .ref(`/swapi/${refString}`)
  //   .once('value');
  // return data.val().map((rawData, dbIndex) => {
  //   const normalizedData = rawData.fields;
  //   normalizedData.uid = dbIndex;
  //   return normalizedData;
  // });
};

const fetchDataById = async (refString, id) => {
  return await Axios.get(databaseUrl + `${refString}/${id}`).then(
    ({ data }) => data.fields,
  );
  // let data = await firebase
  //   .database()
  //   .ref(`/swapi/${refString}/${id}`)
  //   .once('value');
  // return data.val().fields;
};

export { fetchDataArray, fetchDataById };
