let url = 'https://api.covid19india.org/data.json';

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);

    let totalConfirmed = document.getElementById('confirmed');
    let totalAactive = document.getElementById('active');
    let totalRecovered = document.getElementById('recovered');
    let totalDeceased = document.getElementById('deceased');

    let state = [];
    let confirmed = [];
    let active = [];
    let recovered = [];
    let deaths = [];

    data.statewise.forEach(function (obj) {
      state.push(obj.state);
      confirmed.push(obj.confirmed);
      active.push(obj.active);
      recovered.push(obj.recovered);
      deaths.push(obj.deaths);
    });

    state.shift();
    confirmed.shift();
    active.shift();
    recovered.shift();
    deaths.shift();

    state.pop();
    confirmed.pop();
    active.pop();
    recovered.pop();
    deaths.pop();

    //console.log(state);

    totalConfirmed.append(data.statewise[0].confirmed);
    totalAactive.append(data.statewise[0].active);
    totalRecovered.append(data.statewise[0].recovered);
    totalDeceased.append(data.statewise[0].deaths);

    let myChart = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(myChart, {
      type: 'line',
      data: {
        labels: state,
        datasets: [
          {
            label: 'Confirmed Cases',
            data: confirmed,
            backgroundColor: '#f1c40f',
            minBarLength: 100,
          },
          {
            label: 'Active Cases',
            data: active,
            backgroundColor: '#0275d8',
            minBarLength: 100,
          },
          {
            label: 'Recovered Cases',
            data: recovered,
            backgroundColor: '#2ecc71',
            minBarLength: 100,
          },
          {
            label: 'Deceased Cases',
            data: deaths,
            backgroundColor: '#e74c3c',
            minBarLength: 100,
          },
        ],
      },
    });
  });
