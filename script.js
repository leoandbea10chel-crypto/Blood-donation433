let donors = [];

// ADD DONOR
function addDonor(){

  let name = document.getElementById("donorName").value;
  let phone = document.getElementById("donorPhone").value;
  let blood = document.getElementById("donorBlood").value;
  let location = document.getElementById("donorLocation").value;

  let donor = {
    name,
    phone,
    blood,
    location
  };

  donors.push(donor);

  alert("Donor Registered Successfully!");
}

// FIND MATCHING DONORS
function findDonors(){

  let bloodNeeded = document.getElementById("reqBlood").value;
  let hospital = document.getElementById("reqHospital").value;
  let location = document.getElementById("reqLocation").value;

  let results = document.getElementById("results");

  results.innerHTML = "<h3>Matching Donors:</h3>";

  let matches = donors.filter(d => d.blood === bloodNeeded);

  if(matches.length === 0){
    results.innerHTML += "<p>No donors found</p>";
    return;
  }

  matches.forEach(d => {
    results.innerHTML += `
      <div style="background:white; margin:10px; padding:10px;">
        <p><b>Name:</b> ${d.name}</p>
        <p><b>Phone:</b> ${d.phone}</p>
        <p><b>Blood:</b> ${d.blood}</p>
        <p><b>Location:</b> ${d.location}</p>
      </div>
    `;
  });

}