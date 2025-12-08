$("h1").addClass("big-title margin-50")
$("button").html("<em>Hey</em>")

$("a").attr("href", "https://www.yahoo.com")

$("h2").click(function(){
  $("h2").css("color", "purple")
})


// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple"
//   })
// }


// $("button").click(function(){
//   $("h1").css("color", "red")
// })


// $("button").click(function(){
//   $("h1").toggle()
// })

// $("button").click(function(){
//   $("h1").fadeOut()
// })

// $("button").click(function(){
//   $("h1").slideUp()
// })


// $("button").click(function(){
//   $("h1").animate({
//     opacity: 0.5
//   })
// })

$("button").click(function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5})
})

$("input").keydown(function(event){
  console.log(event.key);
  
})

$(document).keydown(function(event){
  $('h1').text(event.key)
})


$("h1").on("mouseover", function(){
  $("h1").css("color", "blue")
})

// $("h1").before("<button>Before</button>")
// $("h1").after("<button>After</button>")
// $("h1").prepend("<button>Prepend</button>")
// $("h1").remove()