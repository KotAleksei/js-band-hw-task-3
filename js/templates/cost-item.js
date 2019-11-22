export default (item) => {
  const {
    id,
    model,
    costBykg,
    costBykm
  } = item;
  
  return `
    <li class="listItem show cost">
      <h3>Cost Of Delivery</h3>
      <p>id: ${id}</p>
      <p>Transport model: ${model}</p>
      <p>Cost By Kg: ${costBykg} </p>
      <p>Cost by km: ${costBykm} </p>
    </li>
  `;
};