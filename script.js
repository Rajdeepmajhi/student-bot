const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

const students = {
  "24CSEAIML236": { 
    name: "Rajdeep Majhi", 
    rollno: "24CSEAIML236",
    regdno: "24UG010731",
    mobileno: "937064979",
    sec: "D",
    branch: "CSE(AIML)",
    mail: "rajdeepmajhi077@gmail.com",
    photo:"RAJ.jpg"
  },
  "24CSEAIML228": { 
    name: "Swayamjit Sasmal", 
    rollno: "24CSEAIML228",
    regdno: "24UG010723",
    mobileno: "9123456780",
    sec: "D",
    branch: "CSE(AIML)",
    mail: "swayamjitsasmal055@gmail.com",
    photo: "SWAYAM.JPJ"
  },
  "24CSEAIML229": { 
    name: "Manas ku.mohanta", 
    rollno: "24CSEAIML229",
    regdno: "24UG010724",
    mobileno: "9123456780",
    sec: "E",
    branch: "CSE(AIML)",
    mail: "24cseaiml229.manaskumarmohanta@giet.edu",
    photo: "images/swayamjit.jpg"
  },  
  "24CSEAIML216": { 
    name: "Surya sarathi sahoo", 
    rollno: "24CSEAIML216",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "C",
    branch: "CSE(AIML)",
    mail: "24cseaiml216.suryasarathisahoo@giet.edu",
    photo: "SURYA.jpg"
  },
  "24CSEAIML235": { 
    name: "Shobhagya ranjan jena", 
    rollno: "24CSEAIML235",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "C",
    branch: "CSE(AIML)",
    mail: "24cseaiml216.suryasarathisahoo@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24CSEAIML177": { 
    name: "Mohit prashad", 
    rollno: "24CSEAIML177",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "e",
    branch: "CSE(AIML)",
    mail: "24cseaiml177.mohitprashad@giet.edu",
    photo: "MOHIT.jpg"
  },
  "24CSEAIML179": { 
    name: "Amandeep kumar", 
    rollno: "24CSEAIML179",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "B",
    branch: "CSE(AIML)",
    mail: "24cseaiml179.amandeepkumar@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24CSEAIML185": { 
    name: "Manish kumar bhediya", 
    rollno: "24CSEAIML185",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "D",
    branch: "CSE(AIML)",
    mail: "24cseaiml185.manishkumarbhediya@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24CSEAIML181": { 
    name: "Sashi ranjan", 
    rollno: "24CSEAIML181",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "D",
    branch: "CSE(AIML)",
    mail: "24cseaiml181.sashiranjan@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24CSEAIML225": { 
    name: "Rabula Adhiraj", 
    rollno: "24CSEAIML225",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "B",
    branch: "CSE(AIML)",
    mail: "24cseaiml216.rabulaadhiraj@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24ECEVLSI034": { 
    name: "Anmol Biswal", 
    rollno: "24ECEVLSI034",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "A",
    branch: "ECE(VLSI)",
    mail: "24ecevlsi034.anmolbiswal@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24EEE007": { 
    name: "Chandan sahoo", 
    rollno: "24EEE007",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "A",
    branch: "EEE",
    mail: "24eee007.chandansahoo@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24CSEAIML281": { 
    name: "Rudraksh kumar", 
    rollno: "24CSEAIML281",
    regdno: "24UG010665",
    mobileno: "912xxxxx",
    sec: "D",
    branch: "CSE(AIML)",
    mail: "24cseaiml281.rudrakshkumar@giet.edu",
    photo: "images/swayamjit.jpg"
  },
  "24CSE092": { 
    name: "Suraj panda", 
    rollno: "24CSE092",
    regdno: "24UG010723",
    mobileno: "9123456780",
    sec: "A",
    branch: "CSE",
    mail: "24cseaiml092.surajpanda@giet.edu",
    photo: "suraj.jpj.jpg"
  },
};

function appendMessage(sender, text) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight; 
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  appendMessage("user", text);

  setTimeout(() => {
    if (students[text]) {
      const s = students[text];

      const card = document.createElement("div");
      card.classList.add("student-card");

      const img = document.createElement("img");
      img.src = s.photo;
      img.alt = s.name;
      img.classList.add("student-photo");

      const info = document.createElement("div");
      info.classList.add("student-info");
      info.innerHTML = `
        ✅ <b>Student Found:</b><br><br>
        👤 <b>Name:</b> ${s.name}<br>
        🆔 <b>Roll No:</b> ${s.rollno}<br>
        📄 <b>Regd No:</b> ${s.regdno}<br>
        📱 <b>Mobile No:</b> ${s.mobileno}<br>
        📚 <b>Section:</b> ${s.sec}<br>
        🏫 <b>Branch:</b> ${s.branch}<br>
        📧 <b>Email:</b> ${s.mail}
      `;

      card.appendChild(img);
      card.appendChild(info);
      chatBox.appendChild(card);

      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      appendMessage("bot", "❌ Roll No not found. Please try again.");
    }
  }, 500);

  userInput.value = "";
}

userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
