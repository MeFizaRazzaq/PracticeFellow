import React from 'react'

export default function Addpatientform(props) {
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Submitted Data:", data);}

  const expandField = (label,e)=>{
    const parentDiv = e.target.closest('.col-md-6'); // Find the closest col-md-4 div
    if (!parentDiv) return;
    const newDiv = document.createElement("div");
  newDiv.className = "col-md-12 mt-2"; // Bootstrap classes
  newDiv.innerHTML = `
    <label class="form-label">${label} 2</label>
    <input type="text" name="${label.toLowerCase()}2" class="form-control" placeholder="${label}" required />
  `;

  parentDiv.appendChild(newDiv); // Append the new div
  }

    const addNewPayer = () => {
      // Find the payer section
      const payerSection = document.getElementById("payerSection");
      const payerContainer = document.getElementById("payerContainer");
      //checking length
      if (payerContainer.children.length > 2) {
        alert("You are exceeding the maximum number of payers");
        return;
      }
      if (!payerSection) return;
  
      // Clone the entire payer section
      const newPayerSection = payerSection.cloneNode(true);
  
      // Clear input values in the cloned section
      newPayerSection.querySelectorAll("input").forEach(input => {
        if (input.type === "file") {
          input.value = "";
        } else {
          input.value = "";
        }
      });
      // Append cloned section to the form
    document.getElementById("payerContainer").appendChild(newPayerSection);
    newPayerSection.querySelector(".btn-primary").addEventListener("click",addNewPayer);
    }

  return (
    <form onSubmit={handleSubmit} className="ptform p-1 m-2">
    <div className="row m-5">
      <h3>
        <b>Patient Information</b>
      </h3>
      <h5>Patient Information</h5>
      {/* Primary Policy Holder */}
      
        <div className="col-xl-12 mb-3">
        <div className="row">
          <label className="form-label mb-1">Primary Policy Holder</label>
          <div className="col-lg-3">
            <input className="form-check-input" type="radio" name="policyHolder" value="Client" id="client" onClick={()=>{props.setformState("Client") }} />
            <label className="form-check-label" htmlFor="client" >Client</label>
          </div>
          <div className="col-lg-3">
            <input className="form-check-input" type="radio" name="policyHolder" value="Client Spouse" id="clientSpouse" onClick={()=>{props.setformState("Other") }} />
            <label className="form-check-label" htmlFor="clientSpouse">Client's Spouse</label>
          </div>
          <div className="col-lg-3">
            <input className="form-check-input" type="radio" name="policyHolder" value="Client Parent" id="clientParent" onClick={()=>{props.setformState("Other") }} />
            <label className="form-check-label" htmlFor="clientParent">Client's Parent</label>
          </div>
          <div className="col-lg-3">
            <input className="form-check-input" type="radio" name="policyHolder" value="Other" id="otherPolicy" onClick={()=>{props.setformState("Other") }} />
            <label className="form-check-label" htmlFor="otherPolicy">Other</label>
          </div>
        </div>
      </div>
      
      
    {props.formState !== "Client" &&(
      <div className='row'>
        
      {/* Personal Information */}
      <div className="col-md-4 mb-3">
        <label className="form-label">First Name</label>
        <input type="text" name="firstName" className="form-control" placeholder="First name" required />
      </div>
      <div className="col-md-4 mb-3">
        <label className="form-label">Middle Name</label>
        <input type="text" name="middleName" className="form-control" placeholder="Middle name" />
      </div>
      <div className="col-md-4 mb-3">
        <label className="form-label">Last Name</label>
        <input type="text" name="lastName" className="form-control" placeholder="Last name" required />
      </div>
      <div className='col-md-8'>
        <div className='row'>
          {/* Gender and DOB */}
      <div className="col-md-6 mb-3">
        <label className="form-label">Gender</label>
        <select name="gender" className="form-select">
          <option value="" disabled selected>none selected</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="col-md-6 mb-3">
        <label className="form-label">Date of Birth</label>
        <input type="date" name="dob" className="form-control" required />
      </div>
      {/* Contact Information */}
      <div className="col-md-6 mb-3">
        <label className="form-label " id='email'>Email</label>
        <div className='input-group'>
          <input type="email" name="email" className="form-control" placeholder="Email" required />
          <span className='input-group-text' id='expand' onClick={(e)=>{expandField("Email",e);e.target.setAttribute("disabled", "true"); // Disable the span after click
    e.target.style.pointerEvents = "none"; // Prevent further clicks
    e.target.style.opacity = "0.5";}}>+</span>
          </div>
      </div>
      <div className="col-md-6 mb-3">
        <label className="form-label">Contact Number</label>
        <div className='input-group'>
        <input type="tel" name="contactNumber" className="form-control" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        <span className='input-group-text' id='expand' onClick={(e)=>{expandField("Contact Number ",e);e.target.setAttribute("disabled", "true"); // Disable the span after click
    e.target.style.pointerEvents = "none"; // Prevent further clicks
    e.target.style.opacity = "0.5"; }}>+</span>
        </div>
      </div>
        </div>
      </div>
      <div className="col-md-4 mb-3 mt-1">
      <div className="row mt-4">
          <label className="form-label mb-3 ">Marital Status</label>
          <div className="col-md-12">
            <input className="form-check-input" type="radio" name="maritalStatus" value="Client" id="client" />
            <label className="form-check-label mb-2" htmlFor="Single">Single</label>
          </div>
          <div className="col-md-12">
            <input className="form-check-input" type="radio" name="maritalStatus" value="Client Spouse" id="clientSpouse" />
            <label className="form-check-label mb-2" htmlFor="Married">Married</label>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-md-6'>
      <div className='row'>
      <div className="col-md-12 mb-2">
        <label className="form-label"> Home Adress</label>
        <input type="text" name="adress" className="form-control" placeholder="Adress" required />
      </div>
      <div className="col-lg-4">
        <label className="form-label">City</label>
        <input type="text" name="city" className="form-control" placeholder="City " required />
      </div>
      <div className="col-lg-4 mb-3">
        <label className="form-label">State</label>
        <select name="state" className="form-select">
          <option value="" disabled selected>none selected</option>
          <option value="p1">s1</option>
          <option value="p2">s2</option>
          <option value="p3">s3</option>
        </select>
      </div>
      <div className="col-lg-4 mb-3">
        <label className="form-label">Zip Code</label>
        <input type="number" name="zipcode" className="form-control" placeholder="0000" required />
      </div>
      </div>
      </div>
      <div className='col-md-6'>
      <div className='row'>
      <div className="col-md-12 mb-2">
        <label className="form-label"> Other Adress (Optional)</label>
        <input type="text" name="otheradress" className="form-control" placeholder="Adress"  />
      </div>
      <div className="col-lg-4">
        <label className="form-label">City</label>
        <input type="text" name="City2" className="form-control" placeholder="City "  />
      </div>
      <div className="col-lg-4 mb-3">
        <label className="form-label">State</label>
        <select name="state2" className="form-select">
          <option value="" disabled selected>none selected</option>
          <option value="p1">s1</option>
          <option value="p2">s2</option>
          <option value="p3">s3</option>
        </select>
      </div>
      <div className="col-lg-4 mb-3">
        <label className="form-label">Zip Code</label>
        <input type="number" name="zipcode2" className="form-control" placeholder="0000" required />
      </div>
      </div>
      </div>
      </div>
      </div>
    )} 
      <div id='payerContainer'>
      <div className='row payer-section mt-2 mb-3 me-2 p-4' id='payerSection'>
              {/* Payer */}
      <div className="col-md-12 mb-3 " >
        <h5><b>Payer Information</b></h5>
        <label className="form-label">Payer</label>
        <select name="payer" className="form-select">
          <option value="" disabled selected>none selected</option>
          <option value="p1">Payer1</option>
          <option value="p2">Payer2</option>
          <option value="p3">Payer3</option>
        </select>
      </div>

      {/* Insurance Details */}
      <div className="col-md-4 mb-3">
        <label className="form-label">Member ID</label>
        <input type="text" name="memberId" className="form-control" required />
      </div>
      <div className="col-md-4 mb-3">
        <label className="form-label">Plan ID</label>
        <input type="text" name="planId" className="form-control" required />
      </div>
      <div className="col-md-4 mb-3">
        <label className="form-label">Group ID</label>
        <input type="text" name="groupId" className="form-control" required />
      </div>

      {/* Copay and Deductible */}
      <div className="col-md-4 col-lg-2 mb-3">
        <label className="form-label">Copay</label>
        <div className='input-group'>
        <span className='input-group-text'>$</span>
        <input type="number" name="copay" className="form-control" min="0" required />
        </div>
      </div>
      <div className="col-md-4 col-lg-2 mb-3">
        <label className="form-label">Coinsurance</label>
        <div className='input-group'>
        <input type="number" name="coinsurance" className="form-control" min="0" max="100" required />
        <span className='input-group-text'>%</span>
        </div>
      </div>
      <div className="col-md-4 col-lg-2 mb-3">
        <label className="form-label">Deductible </label>
        <div className='input-group'>
        <span className='input-group-text'>$</span>
        <input type="number" name="deductible" className="form-control" min="0" required />

        </div>
      </div>
      
      <div className="col-md-6 col-lg-2 mb-3">
        <label className="form-label">Effective Start Dtae</label>
        <input type="date" name="effectiveStartDate" className="form-control" required />
      </div>
      <div className="col-md-6 col-lg-2 mb-3">
        <label className="form-label">Effective End Dtae</label>
        <input type="date" name="effectiveEndDate" className="form-control" required />
      </div>
      <div className="col-md-6 col-lg-4 mb-3">
        <label className="form-label">Payer Contact Number</label>
        <div className='input-group'>
        <input type="tel" name="contactNumber" className="form-control" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-3">
        <label className="form-label">Payer Fax Number</label>
        <div className='input-group'>
        <input type="tel" name="contactNumber" className="form-control" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
      </div>
      {/* Insurance Card Upload */}
      <div className="col-6 col-md-6 mb-3">
        <label className="form-label">Insurance Card</label>
        <input type="file" name="insuranceCard" className="form-control" accept="image/*" required />
      </div>
      <div className="col-2 col-md-2 mb-2">
      </div>
      <div className="col-4 col-md-4">
        <button type="button" className="btn btn-primary b2" id='addPayer' onClick={addNewPayer}>Add New Payer</button>
      </div>
      </div>
      </div>

      {/* Submit Button */}
      <div className="col-md-12">
        <button type="submit" className="btn btn-primary">Add Patient</button>
      </div>
    </div>
  </form>
  );
}