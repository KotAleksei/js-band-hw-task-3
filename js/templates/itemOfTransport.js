export default (item) => {
  const { 
    id, 
    model,   
    producedYear, 
    capacity, 
    averageSpeed, 
  } = item;
  let countOrGas, name;
  
  if(item.countOfTeam) {
    countOrGas = item.countOfTeam;
    name = item.name;
  } else {
    countOrGas = item.typeOfGas;
    name = item.licensePlate;
  }
  return `
    <li class="listItem show transport">
      <h3>Transport - ${item.countOfTeam ? "Ship" : 'Truck' }</h3>
      <p>id: ${id}</p>
      <p>model: ${model}</p>
      <p>${item.countOfTeam ? "Name" : 'License plate' }: ${name}</p>
      <p>Produced Year: ${producedYear}</p>
      <p>Capacity: ${capacity} kg</p>
      <p>Avareage Speed: ${averageSpeed} ${item.countOfTeam ? "nm" : "km"}</p>
      <p> ${item.countOfTeam ? "Count Of Team" : "Type Of Gas"}: ${countOrGas}</p>
    </li>
  `;
}
