import { useState, useEffect } from "react";

export default function Card(props) {
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

  // return (
  //   <div>
  //   {championData ? (
  //     <div>
  //       <h2>Champion Data</h2>
  //       <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_0.jpg`} />
  //       <p>
  //         {JSON.stringify(championData.data[props.name].name, null, 0).replace(/^"+|"+$/g, "") + ", "}
  //         {JSON.stringify(championData.data[props.name].title, null, 0).replace(/^"+|"+$/g, "")}
  //       </p>
  //     </div>
  //   ) : (
  //     <p>Loading...</p>
  //   )}
  // </div>
  // )
  return (
    <ul>
    {Object.keys(props.names).map((index) => {
      return (
        <li key={props.names[index]}>
          {championData ? (
            <div>
              <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.names[index]}_0.jpg`} />
              <p>
                {JSON.stringify(championData.data[props.names[index]].name, null, 0).replace(/^"+|"+$/g, "") + ", "}
                {JSON.stringify(championData.data[props.names[index]].title, null, 0).replace(/^"+|"+$/g, "")}
              </p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </li>
      )
    
    })}

    </ul>
  )

  


}



