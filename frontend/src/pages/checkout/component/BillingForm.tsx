const BillingForm = () => {
  return (
    <div className="billing-form">
      <h1>Billing details</h1>
      <div className="billing-name">
        <li>
          <label htmlFor="">First Name</label>
          <input type="text" />
        </li>
        <li>
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </li>
      </div>
      <li>
        <label htmlFor="">Company Name (Optional)</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="">Country / Region</label>
        <select name="" id=""></select>
      </li>
      <li>
        <label htmlFor="">Street Adress</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="">Town / City</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="">Province</label>
        <select name="" id=""></select>
      </li>
      <li>
        <label htmlFor="">ZIP code</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="">Phone</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor="">Email Adress</label>
        <input type="text" />
      </li>
      <li>
        <label htmlFor=""></label>
        <input type="text" placeholder="Additional information"/>
      </li>
    </div>
  );
};
export default BillingForm;
