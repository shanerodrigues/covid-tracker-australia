/* Demo code
fetch(url)
.then(res => res.json())
.then((out) =>{
    document.getElementById("confirmed").innerHTML = out.confirmed.value;
}).catch(err => console.error(err));
*/

//Fetches info of Australia as a whole including new confirmed, recovered and number of deaths

async function getCountryInfo(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((out) => {
      console.log(out);
      document.getElementById("confirmed").innerHTML = out.cases;
      document.getElementById("recovered").innerHTML = out.recovered;
      document.getElementById("deaths").innerHTML = out.deaths;

      if (Number(out.todayCases) > 0) {
        document.getElementById(
          "new-confirmed"
        ).innerHTML = `${out.todayCases}&nbsp;`;
        document.getElementById("new-confirmed").style.color = "orange";
        document.getElementById("positive").innerHTML = "+";
        document.getElementById("update-confirmed").innerHTML =
          "in the past day";
        document.getElementById("no-new-confirmed").remove();
      }
      if (Number(out.todayCases) <= 0) {
        document.getElementById("new-confirmed").remove();
        document.getElementById("positive").remove();
        document.getElementById("update-confirmed").remove();
        document.getElementById("no-new-confirmed").innerHTML =
          "No new cases in the past day";
      }
      if (Number(out.todayRecovered) > 0) {
        document.getElementById(
          "new-recovered"
        ).innerHTML = `${out.todayRecovered}&nbsp;`;
        document.getElementById("new-recovered").style.color = "green";
        document.getElementById("positiveR").innerHTML = "+";
        document.getElementById("update-recovered").innerHTML =
          "in the past day";
        document.getElementById("no-new-recovered").remove();
      }
      if (Number(out.todayRecovered) <= 0) {
        document.getElementById("new-recovered").remove();
        document.getElementById("positiveR").remove();
        document.getElementById("update-recovered").remove();
        document.getElementById("no-new-recovered").innerHTML =
          "No recoveries in the past day";
      }
      if (Number(out.todayDeaths) > 0) {
        document.getElementById(
          "new-deaths"
        ).innerHTML = `${out.todayDeaths}&nbsp;`;
        document.getElementById("new-deaths").style.color = "red";
        document.getElementById("positiveD").innerHTML = "+";
        document.getElementById("update-deaths").innerHTML = "in the past day";
        document.getElementById("no-new-deaths").remove();
      }
      if (Number(out.todayDeaths) <= 0) {
        document.getElementById("new-deaths").remove();
        document.getElementById("positiveD").remove();
        document.getElementById("update-deaths").remove();
        document.getElementById("no-new-deaths").innerHTML =
          "No deaths in the past day";
      }
    })
    .catch((err) => console.error(err));
}

// async function getCountryInfo(url) {
//   await fetch(url)
//     .then((res) => res.json())
//     .then((out) => {
//       document.getElementById("confirmed").innerHTML =
//         out.Countries[8].TotalConfirmed;
//       document.getElementById("recovered").innerHTML =
//         out.Countries[8].TotalRecovered;
//       document.getElementById("deaths").innerHTML =
//         out.Countries[8].TotalDeaths;

//       if (Number(out.Countries[8].NewConfirmed) > 0) {
//         document.getElementById(
//           "new-confirmed"
//         ).innerHTML = `${out.Countries[8].NewConfirmed}&nbsp;`;
//         document.getElementById("new-confirmed").style.color = "orange";
//         document.getElementById("positive").innerHTML = "+";
//         document.getElementById("update-confirmed").innerHTML =
//           "in the past day";
//         document.getElementById("no-new-confirmed").remove();
//       }
//       if (Number(out.Countries[8].NewConfirmed) <= 0) {
//         document.getElementById("new-confirmed").remove();
//         document.getElementById("positive").remove();
//         document.getElementById("update-confirmed").remove();
//         document.getElementById("no-new-confirmed").innerHTML =
//           "No new cases in the past day";
//       }
//       if (Number(out.Countries[8].NewRecovered) > 0) {
//         document.getElementById(
//           "new-recovered"
//         ).innerHTML = `${out.Countries[8].NewRecovered}&nbsp;`;
//         document.getElementById("new-recovered").style.color = "green";
//         document.getElementById("positiveR").innerHTML = "+";
//         document.getElementById("update-recovered").innerHTML =
//           "in the past day";
//         document.getElementById("no-new-recovered").remove();
//       }
//       if (Number(out.Countries[8].NewRecovered) <= 0) {
//         document.getElementById("new-recovered").remove();
//         document.getElementById("positiveR").remove();
//         document.getElementById("update-recovered").remove();
//         document.getElementById("no-new-recovered").innerHTML =
//           "No recoveries in the past day";
//       }
//       if (Number(out.Countries[8].NewDeaths) > 0) {
//         document.getElementById(
//           "new-deaths"
//         ).innerHTML = `${out.Countries[8].NewDeaths}&nbsp;`;
//         document.getElementById("new-deaths").style.color = "red";
//         document.getElementById("positiveD").innerHTML = "+";
//         document.getElementById("update-deaths").innerHTML = "in the past day";
//         document.getElementById("no-new-deaths").remove();
//       }
//       if (Number(out.Countries[8].NewDeaths) <= 0) {
//         document.getElementById("new-deaths").remove();
//         document.getElementById("positiveD").remove();
//         document.getElementById("update-deaths").remove();
//         document.getElementById("no-new-deaths").innerHTML =
//           "No new cases in the past day";
//       }
//     })
//     .catch((err) => console.error(err));
// }

//Fetches info of each state of Australia

async function getStateInfo(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((out) => {
      let states = out;
      return states.map(function (state) {
        if (state.Province == "Australian Capital Territory") {
          document.getElementById("act").innerHTML = state.Province;
          document.getElementById("act-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("act-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("act-recovered").innerHTML =
          //     state.Recovered;
          // }
          document.getElementById("act-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "New South Wales") {
          document.getElementById("nsw").innerHTML = state.Province;
          document.getElementById("nsw-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("nsw-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("nsw-recovered").innerHTML =
          //     state.Recovered;
          // }
          document.getElementById("nsw-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "Northern Territory") {
          document.getElementById("nt").innerHTML = state.Province;
          document.getElementById("nt-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("nt-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("nt-recovered").innerHTML = state.Recovered;
          // }
          document.getElementById("nt-deaths").innerHTML = state.Deaths;
        }

        if (state.Province == "Queensland") {
          document.getElementById("qld").innerHTML = state.Province;
          document.getElementById("qld-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("qld-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("qld-recovered").innerHTML =
          //     state.Recovered;
          // }
          document.getElementById("qld-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "South Australia") {
          document.getElementById("sa").innerHTML = state.Province;
          document.getElementById("sa-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("sa-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("sa-recovered").innerHTML = state.Recovered;
          // }
          document.getElementById("sa-deaths").innerHTML = state.Deaths;
        }

        if (state.Province == "Tasmania") {
          document.getElementById("tas").innerHTML = state.Province;
          document.getElementById("tas-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("tas-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("tas-recovered").innerHTML =
          //     state.Recovered;
          // }
          document.getElementById("tas-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "Victoria") {
          document.getElementById("vic").innerHTML = state.Province;
          document.getElementById("vic-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("vic-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("vic-recovered").innerHTML =
          //     state.Recovered;
          // }
          document.getElementById("vic-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "Western Australia") {
          document.getElementById("wa").innerHTML = state.Province;
          document.getElementById("wa-confirmed").innerHTML = state.Confirmed;
          // if (state.Recovered === 0) {
          //   document.getElementById("wa-recovered").innerHTML =
          //     "data is being updated";
          // } else {
          //   document.getElementById("wa-recovered").innerHTML = state.Recovered;
          // }
          document.getElementById("wa-deaths").innerHTML = state.Deaths;
        }
      });
    })
    .catch((err) => console.error(err));
}

let previousDay = new Date();
previousDay.setDate(previousDay.getDate() - 1);
previousDay = previousDay.toISOString().split("T")[0];

//API URLs
// let countryDetails = "https://api.covid19api.com/summary";
let countryDetails =
  "https://corona.lmao.ninja/v3/covid-19/countries/Australia";
let stateDetails = `https://api.covid19api.com/live/country/australia/status/confirmed/date/${previousDay}`;
let sDetails = "https://corona.lmao.ninja/v3/covid-19/jhucsse";
// use let url = "https://covid19.mathdro.id/api/countries/Australia/confirmed"; for state
console.log(stateDetails);

//Set last updated
let lastUpdt = document.getElementById("last-updated");
let theDate = document.createElement("span");
let lastUpdtText = document.createElement("span");
let prevDay = new Date();
prevDay.setDate(prevDay.getDate() - 1);
let text = prevDay.toDateString();
lastUpdtText.textContent = "Last updated: ";
theDate.style.fontWeight = "bold";
theDate.textContent = `${text}`;
lastUpdt.appendChild(lastUpdtText);
lastUpdt.appendChild(theDate);

document.addEventListener("DOMContentLoaded", function () {
  getCountryInfo(countryDetails);
  getStateInfo(stateDetails);
});
