import firebase from 'firebase';

const fetchDataArray = async refString => {
  let data = await firebase
    .database()
    .ref(`/swapi/${refString}`)
    .once('value');
  return data.val().map((rawData, dbIndex) => {
    const normalizedData = rawData.fields;
    normalizedData.uid = dbIndex;
    return normalizedData;
  });
};

const fetchDataById = async (refString, id) => {
  let data = await firebase
    .database()
    .ref(`/swapi/${refString}/${id}`)
    .once('value');
  return data.val().fields;
};

export { fetchDataArray, fetchDataById };
