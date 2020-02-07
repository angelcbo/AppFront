/* eslint-disable */

/* Hex to RGBA */
function qpHexToRgbA(hex, alpha){
  var r = parseInt(hex.slice(1, 3), 16),
  g = parseInt(hex.slice(3, 5), 16),
  b = parseInt(hex.slice(5, 7), 16);

  if(alpha){
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  }else{
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

const waitForFinalEvent = (() => {
  const timers = {};
  return (callback, ms, uniqueId) => {
    if (!uniqueId) {
      uniqueId = 'unique id';
    }
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

/* Window Resize Timer Function */
const uniqueTimeStamp = new Date().getTime();

export function qpChartSizes(chartID) {
  // Card Chart Sizes
  let chartWidth = '';
  let chartHeight = '';

  chartWidth = $(chartID).parent().width();


  // Get the chart preset data-height.
  // If not present, then use the height of closest parent of .card-chart
  // If .card-body is smaller than the data-height (responsive fix), then use the height of .card-body
  if (typeof ($(chartID).closest('.card-chart').data('chart-height')) === 'undefined') {
    chartHeight = 281;
  } else {
    if (chartWidth < 300) {
      chartHeight = 281;
    } else {
      chartHeight = $(chartID).closest('.card-chart').data('chart-height');
    }
  }

  const chartSizes = [chartWidth, chartHeight];

  return chartSizes;
}

export function qpMapChart(chartID, maxHeight) {
  function loadChart() {
    const chartSizes = qpChartSizes(chartID);
    const chartWidth = chartSizes[0];
    let chartHeight = chartSizes[1];

    if (typeof (maxWidth) === 'undefined') {
      maxHeight = chartHeight;
    }
    if (maxHeight != chartHeight) {
      chartHeight = maxHeight;
    }

    const canvasParent = $(chartID).closest('.card-chart');
    const colorSelected = canvasParent.data('chart-color-selected');

    // Note: We have to set the size of the chartID to the chartWidth & chartHeight, since chartjs fills the entire parent container when this option is used
    // First remove it...
    $(chartID).remove();

    // Then create it again, and set its dimensions
    $('<div>').attr({
      id: chartID.substring(1)
    }).css({
      width: `${chartWidth}px`,
      height: `${chartHeight}px`
    }).appendTo(canvasParent);

    $(chartID).vectorMap({
      map: 'usa_en',
      backgroundColor: '#FFFFFF',
      hoverOpacity: 0.5,
      enableZoom: true,
      showTooltip: true,
      selectedColor: null,
      hoverColor: null,
      colors: {
        mo: colorSelected,
        fl: colorSelected,
        tx: colorSelected,
        or: colorSelected
      },
      onRegionClick: (event, code, region) => {
        event.preventDefault();
      }
    });
  }

  if ($(chartID).length) {
    // Loads the actual map function
    loadChart();

    // Reloads the map function on window resize
    $(window).resize(() => {
      waitForFinalEvent(() => {
        // functions here...
        loadChart();
      }, 500, uniqueTimeStamp + 15);
    });
  }
}

/**
 * @chartID {string}
 * @maxHeight {int}(optional)
 */
export function qpLineChart(chartID, maxHeight) {
  if ($(chartID).length) {
    const chartSizes = qpChartSizes(chartID);
    let chartWidth = chartSizes[0];
    let chartHeight = chartSizes[1];

    if (typeof (maxHeight) === 'undefined') {
      maxHeight = chartHeight;
    }
    if (maxHeight != chartHeight) {
      chartHeight = maxHeight;
    }

    // If there is a date/range dropdown, then enable a click event
    // If not, use another trigger
    let clickedElement = $(chartID).closest('.card').find('.header-btn-block .data-range.dropdown .dropdown-item');
    let triggeredEvent = 'click';

    if (!clickedElement.length) {
      clickedElement = $(chartID);
      triggeredEvent = 'load';
    }

    clickedElement.on(triggeredEvent, (e) => {
      e.preventDefault();

      let range;
      // If default range is not set, then get the range from the clicked element
      if (triggeredEvent != 'load') {
        range = $(e.target).attr('href');
      } else {
        // B5B Documentation:
        // Set the default range if no data/range dropdown is present
        range = 'year';
      }

      // Highlight clicked item as active
      $(e.target).siblings().removeClass('active');
      $(e.target).addClass('active');

      /* DEMO DATA - START */
      switch (range) {
        case 'today':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
          var xAxisLabels = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"];
          var dataSet1 = [0, 0, 0, 0, 0, 0, 0, 0, 3, 9, 7, 9, 5, 0, 5, 3, 9, 7, 9, 5, 0, 5, 7, 2];
          var dataSet2 = [0, 0, 3, 5, 0, 2, 7, 0, 9, 5, 0, 5, 3, 0, 2, 7, 0, 9, 5, 0, 5, 0, 5, 3];

          // Load the chart after all the data has been set
          loadChart(range, xAxisLabels, dataSet1, dataSet2);
          break;

        case 'week':
          // B5B Documentation:
          // Use Ajax to pull your own data from the database
          var xAxisLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
          var dataSet1 = [40, 38, 97, 19, 85, 90, 50];
          var dataSet2 = [30, 45, 20, 52, 70, 20, 90];

        // Load the chart after all the data has been set
        loadChart(range, xAxisLabels, dataSet1, dataSet2);
        break;

        case 'month':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var xAxisLabels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
        var dataSet1 = [2, 1, 3, 3, 4, 0, 0, 0, 6, 4, 3, 0, 0, 0, 0, 1, 8, 5, 1, 2, 4, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0];
        var dataSet2 = [3, 4, 2, 2, 7, 0, 0, 0, 5, 2, 1, 3, 3, 4, 0, 0, 0, 6, 9, 2, 0, 0, 5, 2, 5, 7, 2, 9, 3, 3, 7];

        // Load the chart after all the data has been set
        loadChart(range, xAxisLabels, dataSet1, dataSet2);
        break;

        default:
        case 'year':
          // B5B Documentation:
          // Use Ajax to pull your own data from the database
          var xAxisLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          var dataSet1 = [2025, 1460, 1492, 1794, 1384, 2122, 2880, 2545, 3908, 4935, 3907, 4937];
          var dataSet2 = [821, 730, 622, 897, 923, 1200, 1402, 1212, 1534, 2100, 1503, 1899];

          // Load the chart after all the data has been set
          loadChart(range, xAxisLabels, dataSet1, dataSet2);
          break;
      }
      /* DEMO DATA - END */
    });

    if (triggeredEvent == 'load') {
      clickedElement.trigger(triggeredEvent);
    } else {
      $(chartID).closest('.card').find('.header-btn-block .data-range.dropdown .dropdown-item.active').trigger(triggeredEvent);
    }

    function loadChart(range, xAxisLabels, dataSet1, dataSet2){
      var canvasParent = $(chartID).closest('.card-chart');
      var color1 = canvasParent.data('chart-color-1');
      var color2 = canvasParent.data('chart-color-2');

      var legendLine1 = canvasParent.data('chart-legend-1');
      var legendLine2 = canvasParent.data('chart-legend-2');

      // B5B Documentation:
      // Use these settings if it's called from a '.card-sm'
      // Add more card classes as you wish
      if(canvasParent.closest('.card').hasClass('card-sm')){
        color1 = qpHexToRgbA(color1, 0.7);
        color2 = qpHexToRgbA(color2, 0.7);
        var borderWidth = 0;
        var pointRadius = 0;
        var fillLineArea = true;
        var displayLegend = false;
        var hoverInterset = false;
        var xAxisLabelShow = false;
        var yAxisLabelShow = false;

        chartHeight = 82;
        canvasParent.closest('.card-body').css({'padding-left' : '0', 'padding-right' : '0'});

        if(!canvasParent.closest('.card-body').next().length && !canvasParent.next().length){
          canvasParent.closest('.card-body').css({'padding-bottom' : '0', 'position' : 'relative'});
          canvasParent.css({'position' : 'absolute', 'bottom' : '0'});
          chartWidth = canvasParent.closest('.card-body').width();
        }
      }else{
        var borderWidth = 2;
        var pointRadius = 2;
        var fillLineArea = false;
        var displayLegend = true;
        var hoverInterset = true;
        var xAxisLabelShow = true;
        var yAxisLabelShow = true;
      }

      // First remove old chart, then create new one
      canvasParent.empty();

      $('<canvas>').attr({
        id: chartID.substring(1)
      }).css({
        width: chartWidth + 'px',
        height: chartHeight + 'px'
      }).appendTo(canvasParent);

      var ctx = $(chartID);

      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: xAxisLabels,
          datasets: [{
            label: legendLine1,
            backgroundColor: color1,
            borderColor: color1,
            borderWidth: borderWidth,
            pointRadius: pointRadius,
            data: dataSet1,
            fill: fillLineArea
          }, {
            label: legendLine2,
            backgroundColor: color2,
            borderColor: color2,
            borderWidth: borderWidth,
            pointRadius: pointRadius,
            data:  dataSet2,
            fill: fillLineArea
          }]
        },
        options: {
          responsive: true,
          // maintainAspectRatio: false,
          title:{
            display: false
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          hover: {
            mode: 'nearest',
            intersect: hoverInterset
          },
          legend: {
            display: displayLegend
          },
          scales: {
            xAxes: [{
              display: xAxisLabelShow,
              scaleLabel: {
                display: true,
                labelString: 'Timeframe (' + range + ')'
              }
            }],
            yAxes: [{
              display: yAxisLabelShow,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }]
          }
        }
      });
    }
  }
}

export function qpDoughnutPieChart(chartID, chartType, maxWidth){

  // chartType accepts values: 'doughnut' or 'pie'

  if($(chartID).length){
    var chartSizes = qpChartSizes(chartID);
    var chartWidth = chartSizes[0];
    var chartHeight = chartSizes[1];

    if(typeof(chartType) === 'undefined'){
      chartType = 'doughnut';
    }

    if(typeof(maxWidth) === 'undefined'){
      maxWidth = chartWidth;
    }
    if(maxWidth != chartWidth){
      chartWidth = maxWidth;
    }

    // This makes sure that the canvas always uses the size of the smaller value (width or height)
    if(chartWidth <= chartHeight){
      chartHeight = chartWidth;
    }else{
      chartWidth = chartHeight;
    }

    // Make width 80% of original size
    chartWidth = chartWidth * 0.8;
    chartHeight = chartHeight * 0.8;

    // If there is a date/range dropdown, then enable a click event
    // If not, use another trigger
    var clickedElement = $(chartID).closest('.card').find('.header-btn-block .data-range.dropdown .dropdown-item');
    var triggeredEvent = 'click';

    if(!clickedElement.length){
      var clickedElement = $(chartID);
      var triggeredEvent = 'load';
      // B5B Documentation:
      // Set the default range if no data/range dropdown is present
      var range = 'year';
    }

    clickedElement.on(triggeredEvent, function(e){
      e.preventDefault();

      // If default range is not set, then get the range from the clicked element
      if(triggeredEvent != "load"){
        var range = $(this).attr('href');
      }

      // Highlight clicked item as active
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      /* DEMO DATA - START */
      switch(range){
        case 'today':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var dataSet = [21, 21, 17, 5, 6];

        // Load the chart after all the data has been set
        loadChart(range, dataSet);
        break;

        case 'week':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var dataSet = [75, 34, 33, 63, 38];

        // Load the chart after all the data has been set
        loadChart(range, dataSet);
        break;

        case 'month':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var dataSet = [398, 925, 241, 127, 463];

        // Load the chart after all the data has been set
        loadChart(range, dataSet);
        break;

        default:
        case 'year':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var dataSet = [2241, 1217, 5525, 4363, 3998];

        // Load the chart after all the data has been set
        loadChart(range, dataSet);
        break;
      }
      /* DEMO DATA - END */
    });

    if(triggeredEvent == 'load'){
      clickedElement.trigger(triggeredEvent);
    }else{
      $(chartID).closest('.card').find('.header-btn-block .data-range.dropdown .dropdown-item.active').trigger(triggeredEvent);
    }

    function loadChart(range, dataSet){

      if(chartType == 'doughnut'){
        var cutoutPercentage = 88;
      }else if(chartType == 'polarArea'){
        var cutoutPercentage = 0;
        var areaOpacity = 0.7;
      }else{
        var cutoutPercentage = 0;
      }

      var canvasParent = $(chartID).closest('.card-chart');
      var color1 = qpHexToRgbA(canvasParent.data('chart-color-1'), areaOpacity);
      var color2 = qpHexToRgbA(canvasParent.data('chart-color-2'), areaOpacity);
      var color3 = qpHexToRgbA(canvasParent.data('chart-color-3'), areaOpacity);
      var color4 = qpHexToRgbA(canvasParent.data('chart-color-4'), areaOpacity);
      var color5 = qpHexToRgbA(canvasParent.data('chart-color-5'), areaOpacity);

      // Note: Because chartjs 'responsive' option is set, then we have to set the size of the parent container to the chartWidth & chartHeight, since chartjs fills the entire parent container when this option is used
      canvasParent.css({'width' : chartWidth + 'px', 'height' : chartHeight + 'px'});

      // First remove old chart, then create new one
      canvasParent.empty();

      $('<canvas>').attr({
        id: chartID.substring(1),
        width: chartWidth + 'px',
        height: chartHeight + 'px'
      }).appendTo(canvasParent);

      var ctx = $(chartID);

      var myDoughnutChart = new Chart(ctx, {
        type: chartType,
        data: {
          datasets: [{
            data: dataSet,
            backgroundColor: [color1, color2, color3, color4, color5],
            label: 'Traffic Sources'
          }],
          labels: ["Google - Organic", "Google - Paid", "Facebook", "Twitter", "LinkedIn"]
        },
        options: {
          cutoutPercentage: cutoutPercentage,
          responsive: true,
          legend: {
            display: false
          },
          title: {
            display: false
          }
        }
      });
    }
  }
}

export function qpBarChart(chartID, chartType, isStacked, maxHeight){
  if($(chartID).length){
    var chartSizes = qpChartSizes(chartID);
    var chartWidth = chartSizes[0];
    var chartHeight = chartSizes[1];

    if(typeof(maxHeight) === 'undefined'){
      maxHeight = chartHeight;
    }
    if(maxHeight != chartHeight){
      chartHeight = maxHeight;
    }

    if(typeof(chartType) === 'undefined'){
      chartType = 'bar';
    }
    if(typeof(stacked) === 'undefined'){
      isStacked = false;
    }

    // If there is a date/range dropdown, then enable a click event
    // If not, use another trigger
    var clickedElement = $(chartID).closest('.card').find('.header-btn-block .data-range.dropdown .dropdown-item');
    var triggeredEvent = 'click';

    if(!clickedElement.length){
      var clickedElement = $(chartID);
      var triggeredEvent = 'load';
    }

    clickedElement.on(triggeredEvent, function(e){
      e.preventDefault();

      // If default range is not set, then get the range from the clicked element
      if(triggeredEvent != "load"){
        var range = $(this).attr('href');
      }else{
        // B5B Documentation:
        // Set the default range if no data/range dropdown is present
        var range = 'year';
      }

      // Highlight clicked item as active
      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      /* DEMO DATA - START */
      switch(range){
        case 'today':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var xAxisLabels = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"];
        var dataSet1 = [0, 0, 0, 0, 0, 0, 0, 0, 3, 9, 7, 9, 5, 0, 5, 3, 9, 7, 9, 5, 0, 5, 7, 2];
        var dataSet2 = [0, 0, 3, 5, 0, 2, 7, 0, 9, 5, 0, 5, 3, 0, 2, 7, 0, 9, 5, 0, 5, 0, 5, 3];

        // Load the chart after all the data has been set
        loadChart(range, xAxisLabels, dataSet1, dataSet2);
        break;

        case 'week':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var xAxisLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var dataSet1 = [40, 38, 97, 19, 85, 90, 50];
        var dataSet2 = [30, 45, 20, 52, 70, 20, 90];

        // Load the chart after all the data has been set
        loadChart(range, xAxisLabels, dataSet1, dataSet2);
        break;

        case 'month':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var xAxisLabels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
        var dataSet1 = [2, 1, 3, 3, 4, 0, 0, 0, 6, 4, 3, 0, 0, 0, 0, 1, 8, 5, 1, 2, 4, 0, 0, 0, 3, 5, 0, 0, 0, 0, 0];
        var dataSet2 = [3, 4, 2, 2, 7, 0, 0, 0, 5, 2, 1, 3, 3, 4, 0, 0, 0, 6, 9, 2, 0, 0, 5, 2, 5, 7, 2, 9, 3, 3, 7];

        // Load the chart after all the data has been set
        loadChart(range, xAxisLabels, dataSet1, dataSet2);
        break;

        default:
        case 'year':
        // B5B Documentation:
        // Use Ajax to pull your own data from the database
        var xAxisLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June"];
        var dataSet1 = [2025, 1460, 1492, -1794, -1384, -2122, 2880, 2545, 2108, 2935, -2907, -2937, 821, 730, 622, -897, -923, -1200, 1402, 1212, 1534, -2100, -1503, -1899];
        var dataSet2 = [821, 730, 622, -897, -923, -1200, 1402, 1212, 1534, 2100, -1503, -1899, 2937, 821, 730, -622, -1492, -1794];

        // Load the chart after all the data has been set
        loadChart(range, xAxisLabels, dataSet1, dataSet2);
        break;
      }
      /* DEMO DATA - END */
    });

    if(triggeredEvent == 'load'){
      clickedElement.trigger(triggeredEvent);
    }else{
      $(chartID).closest('.card').find('.header-btn-block .data-range.dropdown .dropdown-item.active').trigger(triggeredEvent);
    }

    function loadChart(range, xAxisLabels, dataSet1, dataSet2){

      var canvasParent = $(chartID).closest('.card-chart');
      var color1 = canvasParent.data('chart-color-1');
      var color2 = canvasParent.data('chart-color-2');

      var legendLine1 = canvasParent.data('chart-legend-1');
      var legendLine2 = canvasParent.data('chart-legend-2');

      // B5B Documentation:
      // Use these settings if it's called from a '.card-sm'
      // Add more card classes as you wish
      if(canvasParent.closest('.card').hasClass('card-sm')){
        var displayLegend = false;
        var hoverInterset = false;
        var xAxisLabelShow = false;
        var yAxisLabelShow = false;

        chartHeight = 112;
        canvasParent.closest('.card-body').css({'padding-left' : '0', 'padding-right' : '0'});
      }else{
        var displayLegend = true;
        var hoverInterset = true;
        var xAxisLabelShow = true;
        var yAxisLabelShow = true;
      }

      // First remove old chart, then create new one
      canvasParent.empty();

      $('<canvas>').attr({
        id: chartID.substring(1),
        width: chartWidth + 'px',
        height: chartHeight + 'px'
      }).appendTo(canvasParent);

      var ctx = $(chartID);

      var myChart = new Chart(ctx, {
        type: chartType,
        data: {
          labels: xAxisLabels,
          datasets: [{
            label: legendLine1,
            backgroundColor: color1,
            borderColor: color1,
            borderWidth: 2,
            pointRadius: 2,
            data: dataSet1,
            fill: false
          }, {
            label: legendLine2,
            backgroundColor: color2,
            borderColor: color2,
            borderWidth: 2,
            pointRadius: 2,
            data:  dataSet2,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          title:{
            display: false
          },
          tooltips: {
            mode: 'index',
            intersect: true,
          },
          hover: {
            mode: 'nearest',
            intersect: hoverInterset
          },
          legend: {
            display: displayLegend
          },
          scales: {
            xAxes: [{
              display: xAxisLabelShow,
              scaleLabel: {
                display: true,
                labelString: 'Timeframe (' + range + ')'
              },
              stacked: isStacked
            }],
            yAxes: [{
              display: yAxisLabelShow,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              },
              stacked: isStacked
            }]
          }
        }
      });
    }
  }
}

export function qpDialChart(chartID){

  if($(chartID).length){
    var color1 = $(chartID).data("chart-color-1");
    var color2 = $(chartID).data("chart-color-2");
    var color3 = $(chartID).data("chart-color-3");
    var color4 = $(chartID).data("chart-color-4");

    var chartSize = $(chartID).height();

    // Set the width of the Chart chartID
    $(chartID).width(chartSize);

    // Set inner text line-height
    $(chartID).find(".percent").css({"line-height": chartSize + "px"});

    $(chartID).easyPieChart({
      barColor: function(percent){
        if(color2 === undefined){
          return color1;
        }else{
          if(percent < 25){
            return color4;
          }else if((percent >= 25) && (percent < 50)){
            return color3;
          }else if((percent >= 50) && (percent < 75)){
            return color2;
          }else{
            return color1;
          }
        }
      },
      size: chartSize,
      lineCap: "round",
      lineWidth: 3,
      scaleColor: "#7A7A7A",
      trackColor: "#E8E8E8",
      animate: 1000,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });

    var chart = window.chart = $(chartID).data('easyPieChart');
    $(chartID).siblings('.chart-controls').find('#update-dial-chart').on('click', function(e) {
      chart.update(Math.random() * (90 - 8) + 8);
      e.preventDefault();
    });
  }
}

/* Resize certain elements on window resize */
// Copy the functions loaded above and paste them below. Only works for certain functions
$(window).resize(function () {
  waitForFinalEvent(function(){
    // functions here...
    qpLineChart('#sales-overview');
    qpLineChart('#database-load');

    qpBarChart('#profit-loss');
  }, 500, 'thisstringisuniquedemo');
});