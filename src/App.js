import React, { useEffect } from 'react';
import Framework from './components/Framework';
import { 
  testGetRequest,
  postPCAbyGroupAmount,
  postTSENbyGroupAmount,
  postClustersKeyWords,
  postClustering,
  getVader,
  getVaderSentence} from "./api/Api";

function App() {
  const [clusterNum, setClusterNum] = React.useState(3);
  const [pca, setPCA] = React.useState(null);
  const [tsne, setTsne] = React.useState(null);
  const [clustersKeyWords, setClusterKeyWords] = React.useState(null);
  const [clusters, setClusters] = React.useState(null);
  const [vader, setVader] = React.useState(null);
  const [vaderSentence, setVaderSentence] = React.useState(null);
  const [polarityScore, setPolarityScore] = React.useState(0);

  useEffect(() => {
    testGetRequest();
    postPCAbyGroupAmount(clusterNum, setPCA);
    postTSENbyGroupAmount(clusterNum, setTsne);
    postClustersKeyWords(clusterNum, setClusterKeyWords);
    postClustering(clusterNum, setClusters);
    getVader(setVader);
    getVaderSentence(setVaderSentence);
  }, [clusterNum]);

  return (
    <div className="App">
      {vaderSentence && 
        <Framework
          clustersKeyWords={clustersKeyWords}
          pca={pca} 
          tsne={tsne}
          clusters={clusters}
          clusterNum={clusterNum}
          setClusterNum={setClusterNum}
          vader={vader}
          vaderSentence={vaderSentence}
          polarityScore={polarityScore}
          setPolarityScore={setPolarityScore}>
        </Framework>}
    </div>
  );
}

export default App;
