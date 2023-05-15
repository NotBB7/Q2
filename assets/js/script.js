$(document).ready(function() {
    // Lorsque le document est prêt
  
    $('#copyForm').submit(function(event) {
      // Lorsque le formulaire est soumis
  
      event.preventDefault();
      // Empêche le comportement par défaut du formulaire
  
      var copyCount = parseInt($('#copyCount').val());
      // Récupère la valeur du champ de saisie du nombre de photocopies et la convertit en entier
  
      var totalCost = calculateTotalCost(copyCount);
      // Appelle la fonction calculateTotalCost pour obtenir le coût total
  
      $('#result').text('La facture est de ' + totalCost.toFixed(2) + ' €.');
      // Affiche le résultat sur la page
    });
  
    function calculateTotalCost(copyCount) {
      // Fonction pour calculer le coût total en fonction du nombre de photocopies
  
      var cost = 0;
  
      if (copyCount <= 10) {
        // Si le nombre de photocopies est inférieur ou égal à 10
  
        cost = copyCount * 0.10;
        // Applique le tarif de 0,10 € par photocopies
      } else if (copyCount <= 30) {
        // Sinon, si le nombre de photocopies est inférieur ou égal à 30
  
        cost = 10 * 0.10 + (copyCount - 10) * 0.09;
        // Applique le tarif de 0,10 € pour les 10 premières photocopies, puis le tarif de 0,09 € pour les photocopies supplémentaires
      } else {
        // Sinon (nombre de photocopies supérieur à 30)
  
        cost = 10 * 0.10 + 20 * 0.09 + (copyCount - 30) * 0.08;
        // Applique le tarif de 0,10 € pour les 10 premières photocopies, puis le tarif de 0,09 € pour les 20 photocopies suivantes, et enfin le tarif de 0,08 € pour les photocopies supplémentaires
      }
  
      return cost;
      // Retourne le coût total calculé
    }
  });
  