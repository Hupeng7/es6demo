var req = require("request");
// req.post( "http://61.129.57.157:7891/mt", {
//   form: {
//         un: "400107",
//         pw: "uisdfus107",
//         dc: "15",
//         rd: "1",
//         tf: "3",
//         da: "16602154182",
//         sm: "%e3%80%90%e6%b5%a6%e5%8f%91%e9%93%b6%e8%a1%8c%e3%80%91%e4%bd%a0%e5%a5%bd%ef%bc%8c%e4%bd%a0%e7%9a%84%e9%aa%8c%e8%af%81%e7%a0%81%e6%98%af1422%ef%bc%8c%e9%80%80%e8%ae%a2%e5%9b%9eT%e3%80%82"
//     }
//   }, 
//   function(err, resp, body) {
//     console.log(body);
//   });


req.get("http://61.129.57.157:7891/mt?un=400107&pw=uisdfus107&da=13515102036&sm=%e3%80%90%e6%b5%a6%e5%8f%91%e9%93%b6%e8%a1%8c%e3%80%91%e4%bd%a0%e5%a5%bd%ef%bc%8c%e4%bd%a0%e7%9a%84%e9%aa%8c%e8%af%81%e7%a0%81%e6%98%af1422%ef%bc%8c%e9%80%80%e8%ae%a2%e5%9b%9eT%e3%80%82&dc=15&rd=1&tf=3",
    function (err, resp, body) {
        console.log(body);
    });




  /**
   * http://61.129.57.157:7891/mt?
   * un=400107
   * &pw=uisdfus107
   * &da=16602154182
   * &sm=%e3%80%90%e6%b5%a6%e5%8f%91%e9%93%b6%e8%a1%8c%e3%80%91%e4%bd%a0%e5%a5%bd%ef%bc%8c%e4%bd%a0%e7%9a%84%e9%aa%8c%e8%af%81%e7%a0%81%e6%98%af1422%ef%bc%8c%e9%80%80%e8%ae%a2%e5%9b%9eT%e3%80%82
   * &dc=15&rd =1&rf=2&tf=3
   */