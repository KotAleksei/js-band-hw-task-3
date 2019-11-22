const costForm = `
  <form class="create costOfDelivery">
    <span class="aWarning">*all fields are required</span>
    <h2>Create Cost Of Delivery</h2>
    <span>Model Of Transport</span>
    <select class="modelOfTransport" required>
      <option disabled selected></option>
      <option value="Ship">Ship</option>
      <option value="Truck">Truck</option>
    </select>
    <label >
      Cost (by 1kg of cargo):
      <input type="number" class="costBykg" required min="0">
    </label>
    <label >
        Cost (by 1 km of distance)
      <input type="number" class="costBykm" required min="0">
    </label>
    <div class="btnGreate">
    <button class="cancelAdd" type="button">Cancel</button>
    <button class="saveNewTransport" type="submit" >Save</button>
    </div>
  </form>
`;

export default costForm ;