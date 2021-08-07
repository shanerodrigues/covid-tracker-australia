/* Demo code
fetch(url)
.then(res => res.json())
.then((out) =>{
    document.getElementById("confirmed").innerHTML = out.confirmed.value;
}).catch(err => console.error(err));
*/

//Fetches country info

let x = 0;
let y;

// async function getCountryInfo(url) {
//   await fetch(url)
//     .then((res) => res.json())
//     .then((out) => {
//       document.getElementById("confirmed").innerHTML = out.confirmed.value;
//       document.getElementById("recovered").innerHTML = out.recovered.value;
//       document.getElementById("deaths").innerHTML = out.deaths.value;
//     })
//     .catch((err) => console.error(err));
// }

async function getCountryInfo(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((out) => {
      document.getElementById("confirmed").innerHTML =
        out.Countries[8].TotalConfirmed;
      document.getElementById("recovered").innerHTML =
        out.Countries[8].TotalRecovered;
      document.getElementById("deaths").innerHTML =
        out.Countries[8].TotalDeaths;

      if (Number(out.Countries[8].NewConfirmed) > 0) {
        document.getElementById(
          "new-confirmed"
        ).innerHTML = `${out.Countries[8].NewConfirmed}&nbsp;`;
        document.getElementById("new-confirmed").style.color = "orange";
        document.getElementById("positive").innerHTML = "+";
        document.getElementById("update-confirmed").innerHTML =
          "in the past day";
        document.getElementById("no-new-confirmed").remove();
      }
      if (Number(out.Countries[8].NewConfirmed) <= 0) {
        document.getElementById("new-confirmed").remove();
        document.getElementById("positive").remove();
        document.getElementById("update-confirmed").remove();
        document.getElementById("no-new-confirmed").innerHTML =
          "No new cases in the past day";
      }
      if (Number(out.Countries[8].NewRecovered) > 0) {
        document.getElementById(
          "new-recovered"
        ).innerHTML = `${out.Countries[8].NewRecovered}&nbsp;`;
        document.getElementById("new-recovered").style.color = "green";
        document.getElementById("positiveR").innerHTML = "+";
        document.getElementById("update-recovered").innerHTML =
          "in the past day";
        document.getElementById("no-new-recovered").remove();
      }
      if (Number(out.Countries[8].NewRecovered) <= 0) {
        document.getElementById("new-recovered").remove();
        document.getElementById("positiveR").remove();
        document.getElementById("update-recovered").remove();
        document.getElementById("no-new-recovered").innerHTML =
          "No recoveries in the past day";
      }
      if (Number(out.Countries[8].NewDeaths) > 0) {
        document.getElementById(
          "new-deaths"
        ).innerHTML = `${out.Countries[8].NewDeaths}&nbsp;`;
        document.getElementById("new-deaths").style.color = "red";
        document.getElementById("positiveD").innerHTML = "+";
        document.getElementById("update-deaths").innerHTML = "in the past day";
        document.getElementById("no-new-deaths").remove();
      }
      if (Number(out.Countries[8].NewDeaths) <= 0) {
        document.getElementById("new-deaths").remove();
        document.getElementById("positiveD").remove();
        document.getElementById("update-deaths").remove();
        document.getElementById("no-new-deaths").innerHTML =
          "No new cases in the past day";
      }
      // document.getElementById(
      //   "new-confirmed"
      // ).innerHTML = `+${out.Countries[8].NewConfirmed} in the past day`;
      // if (Number(out.Countries[8].NewRecovered) === 0) {
      //   document.getElementById("new-recovered").innerHTML =
      //     "No new recovered cases";
      // } else if (Number(out.Countries[8].NewRecovered) > 0) {
      //   document.getElementById(
      //     "new-recovered"
      //   ).innerHTML = `+${out.Countries[8].NewRecovered} in the past day`;
      // }
      // document.getElementById(
      //   "new-deaths"
      // ).innerHTML = `+${out.Countries[8].NewDeaths} in the past day`;
      // document.getElementById(
      //   "new-deaths"
      // ).innerHTML = `+${out.Countries[8].NewDeaths} in the past day`;
    })
    .catch((err) => console.error(err));
}

async function getStateInfo(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((out) => {
      let states = out;
      return states.map(function (state) {
        if (state.Province == "Australian Capital Territory") {
          document.getElementById("act").innerHTML = state.Province;
          document.getElementById("act-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("act-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("act-recovered").innerHTML =
              state.Recovered;
          }
          document.getElementById("act-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "New South Wales") {
          document.getElementById("nsw").innerHTML = state.Province;
          document.getElementById("nsw-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("nsw-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("nsw-recovered").innerHTML =
              state.Recovered;
          }
          document.getElementById("nsw-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "Northern Territory") {
          document.getElementById("nt").innerHTML = state.Province;
          document.getElementById("nt-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("nt-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("nt-recovered").innerHTML = state.Recovered;
          }
          document.getElementById("nt-deaths").innerHTML = state.Deaths;
        }

        if (state.Province == "Queensland") {
          document.getElementById("qld").innerHTML = state.Province;
          document.getElementById("qld-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("qld-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("qld-recovered").innerHTML =
              state.Recovered;
          }
          document.getElementById("qld-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "South Australia") {
          document.getElementById("sa").innerHTML = state.Province;
          document.getElementById("sa-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("sa-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("sa-recovered").innerHTML = state.Recovered;
          }
          document.getElementById("sa-deaths").innerHTML = state.Deaths;
        }

        if (state.Province == "Tasmania") {
          document.getElementById("tas").innerHTML = state.Province;
          document.getElementById("tas-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("tas-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("tas-recovered").innerHTML =
              state.Recovered;
          }
          document.getElementById("tas-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "Victoria") {
          document.getElementById("vic").innerHTML = state.Province;
          document.getElementById("vic-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("vic-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("vic-recovered").innerHTML =
              state.Recovered;
          }
          document.getElementById("vic-deaths").innerHTML = state.Deaths;
        }
        if (state.Province == "Western Australia") {
          document.getElementById("wa").innerHTML = state.Province;
          document.getElementById("wa-confirmed").innerHTML = state.Confirmed;
          if (state.Recovered === 0) {
            document.getElementById("wa-recovered").innerHTML =
              "data is being updated";
          } else {
            document.getElementById("wa-recovered").innerHTML = state.Recovered;
          }
          document.getElementById("wa-deaths").innerHTML = state.Deaths;
        }
      });
    })
    .catch((err) => console.error(err));
}

let previousDay = new Date();
previousDay.setDate(previousDay.getDate() - 1);
previousDay = previousDay.toISOString().split("T")[0];

// let url = "https://covid19.mathdro.id/api/countries/Australia/confirmed";
// let countryDetails = "https://covid19.mathdro.id/api/countries/Australia";

let countryDetails = "https://api.covid19api.com/summary";
let stateDetails = `https://api.covid19api.com/live/country/australia/status/confirmed/date/${previousDay}`;
console.log(stateDetails);

document.addEventListener("DOMContentLoaded", function () {
  getCountryInfo(countryDetails);
  getStateInfo(stateDetails);
});

// IMPORTANT
// Getting data from here https://documenter.getpostman.com/view/10808728/SzS8rjbc#7934d316-f751-4914-9909-39f1901caeb8
// For country info, use the Summary link
// https://api.covid19api.com/summary
// and access 8th it will look like this
//   ID : "70ffb3ed-6b3b-42a4-af06-d4c0648aeda0"
//   Country : "Australia"
//   CountryCode : "AU"
//   Slug : "australia"
//   NewConfirmed : 302
//   TotalConfirmed : 35391
//   NewDeaths : 5
//   TotalDeaths : 932
//   NewRecovered : 31
//   TotalRecovered : 24203
//   Date : "2021-08-06T02:18:21.683Z"
// For state info use the live by country and status
// https://api.covid19api.com/live/country/australia/status/confirmed/date/2021-08-5
// But make sure you put in the date one day before to not access a lot of data
