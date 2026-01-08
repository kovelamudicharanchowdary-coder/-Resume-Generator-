function addEducation() {

  const q = document.getElementById("eq").value;
  const i = document.getElementById("ei").value;
  const b = document.getElementById("eb").value;
  const y = document.getElementById("ey").value;
  const p = document.getElementById("ep").value;

  if (q === "" || i === "") {
    alert("Fill Qualification and Institution");
    return;
  }

  const table = document.getElementById("eduTable");
  const row = table.insertRow();

  row.insertCell(0).innerText = q;
  row.insertCell(1).innerText = i;
  row.insertCell(2).innerText = b;
  row.insertCell(3).innerText = y;
  row.insertCell(4).innerText = p;

  ["eq","ei","eb","ey","ep"].forEach(id =>
    document.getElementById(id).value = ""
  );
}

function generateResume() {

  const get = id => document.getElementById(id);

  if (get("name").value.trim() === "") {
    alert("Please enter name");
    return;
  }

  get("resume").style.display = "block";

  get("rname").innerText = get("name").value;
  get("raddress").innerText = get("address").value;
  get("rphone").innerText = get("phone").value;
  get("remail").innerText = get("email").value;
  get("rlinkedin").innerText = get("linkedin").value;
  get("robjective").innerText = get("objective").value;
  get("rskills").innerText = get("skills").value;

  // Photo
  const photo = get("photo");
  if (photo.files.length > 0) {
    const reader = new FileReader();
    reader.onload = () => get("rphoto").src = reader.result;
    reader.readAsDataURL(photo.files[0]);
  }

  // Project
  get("rprojectTitle").innerText = get("projectTitle").value;
  get("rprojectDesc").innerText = get("projectDesc").value;

  // Internship
  get("rinternCompany").innerText = get("internCompany").value;
  get("rinternRole").innerText = get("internRole").value;
  get("rinternDesc").innerText = get("internDesc").value;

  // Achievements
  get("rachievements").innerHTML = "";
  get("achievements").value.split("\n").forEach(a => {
    if (a.trim()) {
      const li = document.createElement("li");
      li.innerText = a;
      get("rachievements").appendChild(li);
    }
  });

  // Activities
  get("ractivities").innerHTML = "";
  get("activities").value.split("\n").forEach(a => {
    if (a.trim()) {
      const li = document.createElement("li");
      li.innerText = a;
      get("ractivities").appendChild(li);
    }
  });

  // Personal
  get("rfather").innerText = get("father").value;
  get("rdob").innerText = get("dob").value;
  get("rsex").innerText = get("sex").value;
  get("rmarital").innerText = get("marital").value;
  get("rnationality").innerText = get("nationality").value;
  get("rlanguages").innerText = get("languages").value;
  get("rstrengths").innerText = get("strengths").value;
  get("rplace").innerText = get("place").value;
  get("rdate").innerText = get("date").value;
  get("rsign").innerText = get("signature").value;
}

