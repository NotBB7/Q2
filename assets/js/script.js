$(document).ready(function() {
    $('#copyForm').submit(function(event) {
      event.preventDefault();
      var copyCount = parseInt($('#copyCount').val());
      var totalCost = calculateTotalCost(copyCount);
      $('#result').text('La facture est de ' + totalCost.toFixed(2) + ' €.');
    });

    function calculateTotalCost(copyCount) {
      var cost = 0;
      if (copyCount <= 10) {
        cost = copyCount * 0.10;
      } else if (copyCount <= 30) {
        cost = 10 * 0.10 + (copyCount - 10) * 0.09;
      } else {
        cost = 10 * 0.10 + 20 * 0.09 + (copyCount - 30) * 0.08;
      }
      return cost;
    }
  });