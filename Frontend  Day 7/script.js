const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
  ];

  
const tbBody = document.querySelector("#tbBody");

employees.forEach(elem => {
    let tr = document.createElement("tr")
    for (let key in elem) {
        let td = document.createElement("td")
        if (typeof elem[key] == "object" && !Array.isArray(elem[key])){
            for (let el in elem[key]){
                let td2 = document.createElement("td")
                td2.innerText = elem[key][el];
                tr.append(td2);
            }
        } else {
            td.innerText = elem[key]
            tr.append(td);
        }
        
    }
    tbBody.append(tr);
}) 
