import { useState, useEffect } from "react";

export default function Imagefetch(props) {
  const [championData, setChampionData] = useState(null);

  const version = '14.2.1'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setChampionData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  





  return (
    <div>
    {championData ? (
      <div>
        <h2>Champion Data</h2>
        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_0.jpg`} />
        <pre>{JSON.stringify(championData.data[props.name], null, 1)}</pre>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

