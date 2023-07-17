function displayMealPlan() {
        const mealTable = document.getElementById('mealTable');
        const rows = mealTable.querySelectorAll('tr');
      
        const mealData = [];
      
        // No header 
        for (let i = 1; i < rows.length; i++) {
          const cells = rows[i].querySelectorAll('td');
          const day = cells[0].textContent;
          const breakfast = cells[1].querySelector('input').value;
          const snack = cells[2].querySelector('input').value;
          const lunch = cells[3].querySelector('input').value;
          const snack2 = cells[4].querySelector('input').value;
          const dinner = cells[5].querySelector('input').value;
      
          mealData.push({ day, breakfast, snack, lunch, snack2, dinner });
        }
      
        console.log(mealData);   

}

