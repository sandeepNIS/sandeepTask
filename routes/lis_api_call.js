// let url = `http://localhost:3000/account/list`;
// (async () => {
//     const res = await fetch(url, {
//       headers: { Accept: 'application/json' },
//     });
//     const json = await res.json();
//     Object.entries(json).forEach(([key, value]) => {
//       console.log(`${key}: ${value}`);
//     });
//   })()

// fetch(url).then((res) => {
//   res.json().then((data) => {
//     if (data.length > 0) {
//       var temp = "";
//       data.forEach((itemData)=>{
//           temp += `<tr>`;
//           temp += `<td > ${itemData.username} </td>`;
//           temp += `<td> ${itemData.email} </td>`;
//           temp += "</tr>";
//       });
//       document.getElementById("data").innerHTML = temp;
//     }
//   });
// }); 
//http://localhost:3000/account/list

// fetch(`${__dirname}/details_folder/account.json`)
//         .then(response => response.json())
//         .then(
//             response => response.map(id => document.write(`<li> ${id.name} </li>`))
//         );