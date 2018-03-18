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

      let cfok = $('.cfok').val();
      let cfok2 = parseInt(cfok);
      let cfok3 = numberWithCommas(cfok2);
      console.log(`401k: $${cfok3}`);

      let cst = $('.cst').val();
      let cst2 = parseInt(cst);
      let cst3 = numberWithCommas(cst2);
      console.log(`Stock: $${cst3}`);

      let fok = $('.fok').val();
      let fok2 = parseInt(fok);
      let fok3 = numberWithCommas(fok2);
      console.log(`401k Monthly: $${fok3}`);

      let st = $('.st').val();
      let st2 = parseInt(st);
      let st3 = numberWithCommas(st2);
      console.log(`Stock Monthly: $${st3}`);

      let mr = (pay2 * 24)/12;
      console.log(`Monthly Pay: $${mr}`);

      let tNetW = cfok2 + cst2 + sav2 + (pay2 * mon2) - (bil2 * mon2) + (fok2 * mon2) + (st2 * mon2);
      console.log(`Total Net Worth: $${numberWithCommas(tNetW)}`);

      //ms + cst + fok + st

      let ms = sav2;
      let me = sav2 + cst2;
      let mi = cfok2;
      let mnw = me + mi;
      let x = 0;
      let html = '<table class="table table-bordered"><tr><th>Month</th><th>Savings</th><th>Liquid Assets</th><th>Illiquid Assets</th><th>Net Worth</th></tr>';
      while (x < mon2) {
        ms += mr - bil2;
        me += (mr - bil2) + st2;
        mi += fok2;
        mnw += (mr - bil2) + st2 + fok2;
        html += `<tr><td>${x}</td><td>$${numberWithCommas(Math.round(ms))}</td><td>$${numberWithCommas(Math.round(me))}</td><td>$${numberWithCommas(Math.round(mi))}</td><td>$${numberWithCommas(Math.round(mnw))}</td></tr>`;
        x++;
      }
      if (x !=0) {
          $(".table").append(`<h3>Monthly Contribution: $${numberWithCommas(Math.round(mr - bil2))}</h3><h3>Total Net Worth: $${numberWithCommas(Math.round(mnw))}</h3>` + html + '</table>');
      }

      });

});
