$('.sidebar-link').click(function(){
    $(this).next('.sub-menu').slideToggle(500);
})
$('.menu ').click(function(){
    $('.pro-menu').slideToggle(500);
})
//dark

$(".moon").click(function(){
    $(".moon").hide() ;
    $(".sun").show() ;
    $("body").addClass("dark");
})
$(".sun").click(function(){
    $(".moon").show ();
    $(".sun").hide() ;
    $("body").removeClass("dark");
})

//chart1
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 19];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});
//chart2
const zValues = [50,60,70,80,90,100,110,120,130,140,150];
const sValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: zValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: sValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

