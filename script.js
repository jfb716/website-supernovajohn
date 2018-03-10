$(document).ready(function(){

  $(".clear").click(function(){
    $(".sav, .bil, .mon, .pay").val('');
  });

  $(".forecast").click(function(){

      $(".table").empty();

      function numberWithCommas(number) {
        let parts = number.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }

      let pay = $(".pay").val();
      let pay2 = parseInt(pay);
      let pay3 = numberWithCommas(pay2);
      console.log(`Pay: $${pay3}`);

      let sav = $(".sav").val();
      let sav2 = parseInt(sav);
      let sav3 = numberWithCommas(sav2);
      console.log(`Savings: $${sav3}`);

      let bil = $(".bil").val();
      let bil2 = parseInt(bil);
      let bil3 = numberWithCommas(bil2);
      console.log(`Bills: $${bil3}`);

      let mon = $(".mon").val();
      let mon2 = parseInt(mon);
      let mon3 = numberWithCommas(mon2);
      console.log(`Months: ${mon3}`);

      let mr = (pay2 * 24)/12;
      console.log(`Monthly Pay: $${mr}`);

      let ms = sav2;
      let x = 0;
      let html = '<table class="table table-bordered"><tr><th>Month</th><th>Savings</th></tr>';
      while (x < mon2) {
        ms += mr - bil2;
        console.log(`Month ${x} Savings: $${numberWithCommas(Math.round(ms))}`);
        html += `<tr><td>${x}</td><td>$${numberWithCommas(Math.round(ms))}</td></tr>`;
        x++;
      }
      if (x !=0) {
          $(".table").append(`<h3>Monthly Contribution: $${numberWithCommas(Math.round(mr - bil2))}</h3>` + html + '</table>');
      }

      });

});
