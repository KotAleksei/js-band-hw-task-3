export default (name) => {
  return `
    <form class="create transport ${name}" >
      <span class="aWarning">*all fields are required</span>
      <h2>Create ${name}</h2>
      <label >
        Model:
        <input type="text" required class="model ${name}" >
      </label>
      <label >
        ${name === 'Ship' ? 'Serial Number/Name:' : 'Licence Plate'}
        <input type="text" required class="nameOfTransport ${name}">
      </label>
      <label >
        Produced Year:
        <input type="number" required class="producedYear ${name}" min="0" >
      </label>
      <label >
        Capacity:
        <input type="number" required class="capacity ${name}" min="0">
      </label>
      <label >
        Average speed:
        <input type="number" required class="averageSpeed ${name}" min="0">
      </label>
      <label >
        ${name === 'Ship' ? 'Count of Team:' : 'Type of gas'}
        <input type="text" required class="countOrGas ${name}">
      </label>
      <div class="btnGreate">
        <button class="cancelAdd ${name}" type="button">Cancel</button>
        <button class="saveNewTransport" type="submit" >Save</button>
      </div>
    </form>
  `;
};