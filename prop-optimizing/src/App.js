
// const Title=({title})=>{
//   return(
//     <h1>{title}</h1>
//   )
// }
// const Description=({description,extra})=>{
//   return(
//     <p>{description}.{extra}</p>
//   )
// }
// const Greeting=({subject,...other})=>{
//   return(
//     <>
//     <Title title={`welcome to ${subject}`}/>
//     <Description {...other}/>
//     </>
//   )
// }


const CarDetails=({name,engine,gearBox,type,bph,torque})=>{
  return(
    <>
    <h1>Car Details</h1>
    <p>name:{name}</p>
    <p>engine:{engine}</p>
    <p>gearBox:{gearBox}</p>
    <p>type:{type}</p>
    <p>bph:{bph}</p>
    <p>torque:{torque}</p>
    </>
    

  )
}

const Car=({spearWheel,seatingCapacity,...other})=>{
  const ignoredProperties=[spearWheel,seatingCapacity]
  console.log(`Ignored Properties are: spearWheel: ${ignoredProperties[0]},seatingCapacity: ${ignoredProperties[1]}`);
  return(
<div>
    <CarDetails {...other}/>
</div>
  )
}
function App() {
  // const greeting={
  //   subject:'React',
  //   description:'This is the description of react',
  //   extra:'This is also included in other'
  // }
  const car={
    name:'mercedes-maybach exelero',
    engine:' Twin-turbocharged V12',
    gearBox:'5-speed Automatic',
    type:'Sports Car',
    spearWheel:'12,582.00 INR',
    seatingCapacity:2,
    bph:700,
    torque:' 752 ft⋅lb (1,020 N⋅m) of torque at 2500 rpm'
  }
  return (
    <div>
      {/* <Greeting {...greeting}/> */}
      <Car {...car}/>
    </div>
  );
}

export default App;
