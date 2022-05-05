import axios from "axios";

const url = 'http://127.0.0.1:5000/';

export async function testGetRequest(){
    await axios.get(url)
        .then(response => {
            // console.log(response.data);
            return 'okay';
        });
}

export async function getDF(callback){
    await axios.get(url + 'getDF')
    .then(response => {
        callback(response.data);
    });
}

export async function postClustersKeyWords(num, callback){
    await axios.post(url + 'getClustersKeyWords', {
        clusterNum: num,
      })
      .then(function (response) {
        callback(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export async function postPCAbyGroupAmount(num, callback){
    await axios.post(url + 'getPCAbyGroupAmount', {
        clusterNum: num,
      })
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export async function postTSENbyGroupAmount(num, callback){
  await axios.post(url + 'getTSENbyGroupAmount', {
      clusterNum: num,
    })
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function postClustering(num, callback){
  await axios.post(url + 'getClustering', {
      clusterNum: num,
    })
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function getVader(callback){
  await axios.get(url + 'getVader')
  .then(response => {
    callback(response.data);
  });
}

export async function getVaderSentence(callback){
  await axios.get(url + 'getVaderSentence')
  .then(response => {
    callback(response.data);
  });
}

