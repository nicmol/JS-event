// Notice the import statements
import './general';
import apiCall from './services/api/apiCall';
import Chart from 'chart.js';

class Status {
  constructor() {
    /* Add instance variables to reference each of these UI elements
    this.$experienceTab = document.querySelector('#experienceTab');
    this.$professionTab = 
    this.$ageTab = 

    this.$ageCanvas = 
    this.$professionCanvas = 
    this.$experienceCanvas = 

    this.$loadingIndicator = 
    this.$tabArea = 
    this.$chartArea = 

    this.$errorMessage = 
    */

    this.statisticData;
    // call loadData
    // call addEventListeners
  }

  loadData() {
    /* Make an api call. Because it's a get request with no data,
       the only parameter is 'statistics'.
       When the Promise returns successfully
          set statisticsData to the data that's returned
          hide the loading indicator
          show the tab area and the chart area
          call loadExperience - it's the default chart
       When an error occurs
          hide the loading indicator
          show the error message
      */
  }

  addEventListeners() {
    // add a click event handler to the experienceTab.  Call loadExperience.  Bind the class.
    // add a click event handler to the professionTab.
    // add a click event handler to the ageTab
  }

  hideCharts() {
    this.$experienceTab.parentElement.classList.remove('active');
    this.$professionTab.parentElement.classList.remove('active');
    this.$ageTab.parentElement.classList.remove('active');
    this.$ageCanvas.classList.add('hidden');
    this.$professionCanvas.classList.add('hidden');
    this.$experienceCanvas.classList.add('hidden');
  }

  loadExperience(event = null) {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$experienceCanvas.classList.remove('hidden');
    this.$experienceTab.parentElement.classList.add('active');
    const data = {
        datasets: [{
            data: this.statisticData.experience,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
              'white',
              'white',
              'white',
            ]
        }],
        labels: [
            'Beginner',
            'Intermediate',
            'Advanced'
        ]
    };
    new Chart(this.$experienceCanvas,{
      type: 'pie',
      data,
    });
  }

  // finish this one.  It's just like the loadExperience but
  // there are 4 'slices' for 
  // 'School Students', 'College Students', 'Trainees', 'Employees'
  loadProfession(event = null) {
  }

  loadAge(event = null) {
  }

}

// add a window on load handler that creates a new instance of this class
