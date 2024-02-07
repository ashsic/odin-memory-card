import { useState, useEffect } from "react";

export default function Card(props) {
  const [championData, setChampionData] = useState(null);
  const [memory, setMemory] = useState(
    {
      count: 0,
      memoryArray: []
    }
  );

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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  let bestScore = 0;

  

  const memoryGame = (event) => {
    let newMemory = event.target.parentElement.parentElement.getAttribute('class');

    if (memory.memoryArray.includes(newMemory)) {
      setMemory({
        count: 0,
        memoryArray: []
      })
    } else {
      setMemory({
        count: memory.count + 1,
        memoryArray: [...memory.memoryArray, newMemory]
      })
    }
    

  };

  return (
    <>
      <div>
        Current Score: {memory.count} Best Score: {memory.count}
        
      </div>
      <ul>
        {shuffleArray(Object.keys(props.names)).map((index) => {
          return (
            <li className={props.names[index]} onClick={memoryGame} key={props.names[index]}>
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
    </>
  )

}
