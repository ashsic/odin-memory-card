export default function (props) {

  console.log(props)


  return (
    <div>
    {data ? (
      <div>
        <h2>Champion Data</h2>
        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_0.jpg`} />
        <p>
          {props.data.name.replace(/^"+|"+$/g, "") + ", "}
          {props.data.title.replace(/^"+|"+$/g, "")}
        </p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}