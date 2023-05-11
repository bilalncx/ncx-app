// import React from "react";
// import 'jquery';

// function calculateTimeLeft() {
//   const year = new Date().getFullYear();
//   const difference = +new Date(`${year}-06-1`) - +new Date();
//   let timeLeft = {};

//   if (difference > 0) {
//     timeLeft = {
//       Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       Mins: Math.floor((difference / 1000 / 60) % 60),
//       Seconds: Math.floor((difference / 1000) % 60)
//     };
//   }

//   return timeLeft;
// }

// export default function App() {
//   const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

//   React.useEffect(() => {
//     const id = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => {
//       clearTimeout(id);
//     };
//   });

//   const timerComponents = Object.keys(timeLeft).map(interval => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     return (
//       <div className="timer">
//         <div className="sfd">
//             <span className="time">{timeLeft[interval]}</span>
//             <span className="tct">{interval}{" "}</span>
//         </div>
//         <span className="colon">:</span>
//       </div>
//     );
//   });

//   return (
//     <div className="token_timer">
//         <h1>Round 1 Starts in</h1>
//         <div className="countdown_timerjs">
//             {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//         </div>
//     </div>
//   );
// }


    // The data/time we want to countdown to
    var countDownDate = new Date("Jun 01, 2023 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);