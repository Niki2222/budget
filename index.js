document.addEventListener('DOMContentLoaded', function(event) {

    const item = document.querySelector('#item');
    const quantity = document.querySelector('#amount');
    const item_expense = document.querySelector('#item_expense');
    const quantity_expense = document.querySelector('#amount_expense');

    let initialCashMonthElement = document.querySelector('.initial_second');
    initialCashMonthElement.addEventListener('keyup', function(event) {
        updateTotalIncomeJan();
        addTotalMonthJan();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeJan() {
        let parentRow = document.querySelector('.section_row');
            let rows = parentRow.querySelectorAll('.row');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.income_amount');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
        let initialCashMonthElement = document.querySelector('.initial_second');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_jan').innerText = total + initialCashMonth;
        document.querySelector('.income_total_jan').innerText = total + initialCashMonth;
    }

    document.querySelector('.form').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row').appendChild(addRow)
        addRow.children[0].innerText = item.value;
        addRow.children[1].innerText = quantity.value;
        addRow.children[2].innerText = 'Delete';

        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeJan();
            addTotalMonthJan();
            addTotalIncome();
            addFinalTotal();
        }   

        updateTotalIncomeJan();
        addTotalMonthJan();
        addTotalIncome();
        addFinalTotal();
    });

    document.querySelector('.form_expense').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense').appendChild(addRow); 
        addRow.children[0].innerText = item_expense.value;
        addRow.children[1].innerText = quantity_expense.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesJan();
            addTotalMonthJan();
            addTotalExpense();
            addFinalTotal();
        });

        function updateTotalExpensesJan() {
            let parentRow = document.querySelector('.section_row_expense');
            let rows = parentRow.querySelectorAll('.row_expense');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_jan').innerText = total;
            document.querySelector('.expenses_total_jan').innerText = total;
        }
        updateTotalExpensesJan();
        addTotalMonthJan();
        addTotalExpense();
        addFinalTotal();
    });
      
    function addTotalMonthJan() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_jan');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_jan');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_jan');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_jan').innerText = total;
        updateTotalIncomeJan();
    }
    addTotalMonthJan();

    // ********* FEBRUARY *********//
    const itemFeb = document.querySelector('#item_feb');
    const quantityFeb = document.querySelector('#amount_feb');
    const itemExpenseFeb = document.querySelector('#item_expense_feb');
    const quantityExpenseFeb = document.querySelector('#amount_expense_feb');

    let initialCashMonthElementFeb = document.querySelector('.initial_second_feb');
    initialCashMonthElementFeb.addEventListener('keyup', function(event) {
        updateTotalIncomeFeb();
        addTotalMonthFeb();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeFeb() {
        let parentRow = document.querySelector('.section_row_feb');
        let rows = parentRow.querySelectorAll('.row_feb');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_feb');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_feb');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_feb').innerText = total + initialCashMonth;
        document.querySelector('.income_total_feb').innerText = total + initialCashMonth;
    }

    document.querySelector('.form_feb').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_feb');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_feb').appendChild(addRow)
        addRow.children[0].innerText = itemFeb.value;
        addRow.children[1].innerText = quantityFeb.value;
        addRow.children[2].innerText = 'Delete';

        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeFeb();
            addTotalMonthFeb();
            addTotalIncome();
            addFinalTotal();
        }   
        
        updateTotalIncomeFeb();
        addTotalMonthFeb();
        addTotalIncome();
        addFinalTotal();
    });

    document.querySelector('.form_expense_feb').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_feb'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_feb').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseFeb.value;
        addRow.children[1].innerText = quantityExpenseFeb.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesFeb();
            addTotalMonthFeb();
            addTotalExpense();
            addFinalTotal();
        });

        function updateTotalExpensesFeb() {
            let parentRow = document.querySelector('.section_row_expense_feb');
            let rows = parentRow.querySelectorAll('.row_expense_feb');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_feb');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_feb').innerText = total;
            document.querySelector('.expenses_total_feb').innerText = total;
        }
        updateTotalExpensesFeb();
        addTotalMonthFeb();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthFeb() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_feb');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_feb');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_feb');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_feb').innerText = total;
        updateTotalIncomeFeb();
    }
    addTotalMonthFeb();

    // ********* MARCH *********//
    const itemMar = document.querySelector('#item_mar');
    const quantityMar = document.querySelector('#amount_mar');
    const itemExpenseMar = document.querySelector('#item_expense_mar');
    const quantityExpenseMar = document.querySelector('#amount_expense_mar');

    let initialCashMonthElementMar = document.querySelector('.initial_second_mar');
    initialCashMonthElementMar.addEventListener('keyup', function(event) {
        updateTotalIncomeMar();
        addTotalMonthMar();
        addTotalIncome();
        addFinalTotal();
    });
    function updateTotalIncomeMar() {
        let parentRow = document.querySelector('.section_row_mar');
        let rows = parentRow.querySelectorAll('.row_mar');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_mar');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_mar');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_mar').innerText = total + initialCashMonth;
        document.querySelector('.income_total_mar').innerText = total + initialCashMonth;
    }

    document.querySelector('.form_mar').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_mar');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_mar').appendChild(addRow)
        addRow.children[0].innerText = itemMar.value;
        addRow.children[1].innerText = quantityMar.value;
        addRow.children[2].innerText = 'Delete';

        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeMar();
            addTotalMonthMar();
            addTotalIncome();
            addFinalTotal();
        }   
        
        updateTotalIncomeMar();
        addTotalMonthMar();
        addTotalIncome();
        addFinalTotal();
    });

    document.querySelector('.form_expense_mar').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_mar'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_mar').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseMar.value;
        addRow.children[1].innerText = quantityExpenseMar.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesMar();
            addTotalMonthMar();
            addTotalExpense();
            addFinalTotal();
        });

        function updateTotalExpensesMar() {
            let parentRow = document.querySelector('.section_row_expense_mar');
            let rows = parentRow.querySelectorAll('.row_expense_mar');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_mar');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_mar').innerText = total;
            document.querySelector('.expenses_total_mar').innerText = total;
        }
        updateTotalExpensesMar();
        addTotalMonthMar();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthMar() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_mar');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_mar');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_mar');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_mar').innerText = total;
        updateTotalIncomeMar()
    }
    addTotalMonthMar();

    // ********* APRIL *********//
    const itemApr = document.querySelector('#item_apr');
    const quantityApr = document.querySelector('#amount_apr');
    const itemExpenseApr = document.querySelector('#item_expense_apr');
    const quantityExpenseApr = document.querySelector('#amount_expense_apr');

    let initialCashMonthElementApr = document.querySelector('.initial_second_apr');
    initialCashMonthElementApr.addEventListener('keyup', function(event) {
        updateTotalIncomeApr();
        addTotalMonthApr();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeApr() {
        let parentRow = document.querySelector('.section_row_apr');
        let rows = parentRow.querySelectorAll('.row_apr');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_apr');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_apr');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_apr').innerText = total + initialCashMonth;
        document.querySelector('.income_total_apr').innerText = total + initialCashMonth;
    }

    document.querySelector('.form_apr').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_apr');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_apr').appendChild(addRow)
        addRow.children[0].innerText = itemApr.value;
        addRow.children[1].innerText = quantityApr.value;
        addRow.children[2].innerText = 'Delete';

        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeApr();
            addTotalMonthApr();
            addTotalIncome();
            addFinalTotal();
        }   
        
        updateTotalIncomeApr();
        addTotalMonthApr();
        addTotalIncome();
        addFinalTotal();
    });

    document.querySelector('.form_expense_apr').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_apr'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_apr').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseApr.value;
        addRow.children[1].innerText = quantityExpenseApr.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesApr();
            addTotalMonthApr();
            addTotalExpense();
            addFinalTotal();
        });

        function updateTotalExpensesApr() {
            let parentRow = document.querySelector('.section_row_expense_apr');
            let rows = parentRow.querySelectorAll('.row_expense_apr');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_apr');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_apr').innerText = total;
            document.querySelector('.expenses_total_apr').innerText = total;
        }
        updateTotalExpensesApr();
        addTotalMonthApr();
        addTotalExpense();
        addFinalTotal();
    });
      
    function addTotalMonthApr() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_apr');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_apr');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_apr');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_apr').innerText = total;
        updateTotalIncomeApr()
    }
    addTotalMonthApr();

    // ********* MAY *********//
    const itemMay = document.querySelector('#item_may');
    const quantityMay = document.querySelector('#amount_may');
    const itemExpenseMay = document.querySelector('#item_expense_may');
    const quantityExpenseMay = document.querySelector('#amount_expense_may');

    let initialCashMonthElementMay = document.querySelector('.initial_second_may');
    initialCashMonthElementMay.addEventListener('keyup', function(event) {
        updateTotalIncomeMay();
        addTotalMonthMay();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeMay() {
        let parentRow = document.querySelector('.section_row_may');
        let rows = parentRow.querySelectorAll('.row_may');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_may');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_may');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_may').innerText = total + initialCashMonth;
        document.querySelector('.income_total_may').innerText = total + initialCashMonth;
    }
 
    document.querySelector('.form_may').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_may');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_may').appendChild(addRow)
        addRow.children[0].innerText = itemMay.value;
        addRow.children[1].innerText = quantityMay.value;
        addRow.children[2].innerText = 'Delete';
 
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeMay();
            addTotalMonthMay();
            addTotalIncome();
            addFinalTotal();
        }   
         
        updateTotalIncomeMay();
        addTotalMonthMay();
        addTotalIncome();
        addFinalTotal();
    });
 
    document.querySelector('.form_expense_may').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_may'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_may').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseMay.value;
        addRow.children[1].innerText = quantityExpenseMay.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesMay();
            addTotalMonthMay();
            addTotalExpense();
            addFinalTotal();
        });
 
        function updateTotalExpensesMay() {
            let parentRow = document.querySelector('.section_row_expense_may');
            let rows = parentRow.querySelectorAll('.row_expense_may');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_may');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_may').innerText = total;
            document.querySelector('.expenses_total_may').innerText = total;
        }
        updateTotalExpensesMay();
        addTotalMonthMay();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthMay() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_may');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_may');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_may');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_may').innerText = total;
        updateTotalIncomeMay()
    }
    addTotalMonthMay();

    // ********* JUNE *********//
    const itemJun = document.querySelector('#item_jun');
    const quantityJun = document.querySelector('#amount_jun');
    const itemExpenseJun = document.querySelector('#item_expense_jun');
    const quantityExpenseJun = document.querySelector('#amount_expense_jun');

    let initialCashMonthElementJun = document.querySelector('.initial_second_jun');
    initialCashMonthElementJun.addEventListener('keyup', function(event) {
        updateTotalIncomeJun();
        addTotalMonthJun();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeJun() {
        let parentRow = document.querySelector('.section_row_jun');
        let rows = parentRow.querySelectorAll('.row_jun');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_jun');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_jun');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_jun').innerText = total + initialCashMonth;
        document.querySelector('.income_total_jun').innerText = total + initialCashMonth;
    }
  
    document.querySelector('.form_jun').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_jun');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_jun').appendChild(addRow)
        addRow.children[0].innerText = itemJun.value;
        addRow.children[1].innerText = quantityJun.value;
        addRow.children[2].innerText = 'Delete';
  
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeJun();
            addTotalMonthJun();
            addTotalIncome();
            addFinalTotal();
        }   
          
        updateTotalIncomeJun();
        addTotalMonthJun();
        addTotalIncome();
        addFinalTotal();
    });
  
    document.querySelector('.form_expense_jun').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_jun'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_jun').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseJun.value;
        addRow.children[1].innerText = quantityExpenseJun.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesJun();
            addTotalMonthJun();
            addTotalExpense();
            addFinalTotal();
        });
 
        function updateTotalExpensesJun() {
            let parentRow = document.querySelector('.section_row_expense_jun');
            let rows = parentRow.querySelectorAll('.row_expense_jun');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_jun');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_jun').innerText = total;
            document.querySelector('.expenses_total_jun').innerText = total;
        }
        updateTotalExpensesJun();
        addTotalMonthJun();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthJun() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_jun');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_jun');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_jun');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_jun').innerText = total;
        updateTotalIncomeJun();
    }
    addTotalMonthJun();

    // ********* JULY *********//
    const itemJul = document.querySelector('#item_jul');
    const quantityJul = document.querySelector('#amount_jul');
    const itemExpenseJul = document.querySelector('#item_expense_jul');
    const quantityExpenseJul = document.querySelector('#amount_expense_jul');

    let initialCashMonthElementJul = document.querySelector('.initial_second_jul');
    initialCashMonthElementJul.addEventListener('keyup', function(event) {
        updateTotalIncomeJul();
        addTotalMonthJul();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeJul() {
        let parentRow = document.querySelector('.section_row_jul');
        let rows = parentRow.querySelectorAll('.row_jul');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_jul');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_jul');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_jul').innerText = total + initialCashMonth;
        document.querySelector('.income_total_jul').innerText = total + initialCashMonth;
    }
   
    document.querySelector('.form_jul').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_jul');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_jul').appendChild(addRow)
        addRow.children[0].innerText = itemJul.value;
        addRow.children[1].innerText = quantityJul.value;
        addRow.children[2].innerText = 'Delete';
   
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeJul();
            addTotalMonthJul();
            addTotalIncome();
            addFinalTotal();
        }   
         
        updateTotalIncomeJul();
        addTotalMonthJul();
        addTotalIncome();
        addFinalTotal();
    });
   
    document.querySelector('.form_expense_jul').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_jul'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_jul').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseJul.value;
        addRow.children[1].innerText = quantityExpenseJul.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesJul();
            addTotalMonthJul();
            addTotalExpense();
            addFinalTotal();
        });
   
        function updateTotalExpensesJul() {
            let parentRow = document.querySelector('.section_row_expense_jul');
            let rows = parentRow.querySelectorAll('.row_expense_jul');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_jul');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_jul').innerText = total;
            document.querySelector('.expenses_total_jul').innerText = total;
        }
        updateTotalExpensesJul();
        addTotalMonthJul();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthJul() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_jul');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_jul');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_jul');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_jul').innerText = total;
        updateTotalIncomeJul()
    }
    addTotalMonthJul();

    // ********* AUGUST *********//
    const itemAug = document.querySelector('#item_aug');
    const quantityAug = document.querySelector('#amount_aug');
    const itemExpenseAug = document.querySelector('#item_expense_aug');
    const quantityExpenseAug = document.querySelector('#amount_expense_aug');

    let initialCashMonthElementAug = document.querySelector('.initial_second_aug');
    initialCashMonthElementAug.addEventListener('keyup', function(event) {
        updateTotalIncomeAug();
        addTotalMonthAug();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeAug() {
        let parentRow = document.querySelector('.section_row_aug');
        let rows = parentRow.querySelectorAll('.row_aug');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_aug');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_aug');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_aug').innerText = total + initialCashMonth;
        document.querySelector('.income_total_aug').innerText = total + initialCashMonth;
    }
   
    document.querySelector('.form_aug').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_aug');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_aug').appendChild(addRow)
        addRow.children[0].innerText = itemAug.value;
        addRow.children[1].innerText = quantityAug.value;
        addRow.children[2].innerText = 'Delete';
   
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeAug();
            addTotalMonthAug();
            addTotalIncome();
            addFinalTotal();
        }   
           
        updateTotalIncomeAug();
        addTotalMonthAug();
        addTotalIncome();
        addFinalTotal();
    });
   
    document.querySelector('.form_expense_aug').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_aug'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_aug').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseAug.value;
        addRow.children[1].innerText = quantityExpenseAug.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesAug();
            addTotalMonthAug();
            addTotalExpense();
            addFinalTotal();
        });
   
        function updateTotalExpensesAug() {
            let parentRow = document.querySelector('.section_row_expense_aug');
            let rows = parentRow.querySelectorAll('.row_expense_aug');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_aug');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_aug').innerText = total;
            document.querySelector('.expenses_total_aug').innerText = total;
        }
        updateTotalExpensesAug();
        addTotalMonthAug();
        addTotalExpense();
        addFinalTotal();
    });
   
    function addTotalMonthAug() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_aug');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_aug');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_aug');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_aug').innerText = total;
        updateTotalIncomeAug();
    }
    addTotalMonthAug();

    // ********* SEPTEMBER *********//
    const itemSep = document.querySelector('#item_sep');
    const quantitySep = document.querySelector('#amount_sep');
    const itemExpenseSep = document.querySelector('#item_expense_sep');
    const quantityExpenseSep = document.querySelector('#amount_expense_sep');

    let initialCashMonthElementSep = document.querySelector('.initial_second_sep');
    initialCashMonthElementSep.addEventListener('keyup', function(event) {
        updateTotalIncomeSep();
        addTotalMonthSep();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeSep() {
        let parentRow = document.querySelector('.section_row_sep');
        let rows = parentRow.querySelectorAll('.row_sep');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_sep');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_sep');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_sep').innerText = total + initialCashMonth;
        document.querySelector('.income_total_sep').innerText = total + initialCashMonth;
    }
   
    document.querySelector('.form_sep').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_sep');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_sep').appendChild(addRow)
        addRow.children[0].innerText = itemSep.value;
        addRow.children[1].innerText = quantitySep.value;
        addRow.children[2].innerText = 'Delete';
   
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeSep();
            addTotalMonthSep();
            addTotalIncome();
            addFinalTotal();
        }   

        updateTotalIncomeSep();
        addTotalMonthSep();
        addTotalIncome();
        addFinalTotal();
    });
   
    document.querySelector('.form_expense_sep').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_sep'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_sep').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseSep.value;
        addRow.children[1].innerText = quantityExpenseSep.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesSep();
            addTotalMonthSep();
            addTotalExpense();
            addFinalTotal();
        });
   
        function updateTotalExpensesSep() {
            let parentRow = document.querySelector('.section_row_expense_sep');
            let rows = parentRow.querySelectorAll('.row_expense_sep');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_sep');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_sep').innerText = total;
            document.querySelector('.expenses_total_sep').innerText = total;
        }
        updateTotalExpensesSep();
        addTotalMonthSep();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthSep() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_sep');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_sep');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_sep');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_sep').innerText = total;
        updateTotalIncomeSep()
    }
    addTotalMonthSep();

    // ********* OCTOBER *********//
    const itemOct = document.querySelector('#item_oct');
    const quantityOct = document.querySelector('#amount_oct');
    const itemExpenseOct = document.querySelector('#item_expense_oct');
    const quantityExpenseOct = document.querySelector('#amount_expense_oct');

    let initialCashMonthElementOct = document.querySelector('.initial_second_oct');
    initialCashMonthElementOct.addEventListener('keyup', function(event) {
        updateTotalIncomeOct();
        addTotalMonthOct();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeOct() {
        let parentRow = document.querySelector('.section_row_oct');
        let rows = parentRow.querySelectorAll('.row_oct');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_oct');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_oct');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_oct').innerText = total + initialCashMonth;
        document.querySelector('.income_total_oct').innerText = total + initialCashMonth;
    }
   
    document.querySelector('.form_oct').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_oct');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_oct').appendChild(addRow)
        addRow.children[0].innerText = itemOct.value;
        addRow.children[1].innerText = quantityOct.value;
        addRow.children[2].innerText = 'Delete';
   
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeOct();
            addTotalMonthOct();
            addTotalIncome();
            addFinalTotal();
        }   
           
        updateTotalIncomeOct();
        addTotalMonthOct();
        addTotalIncome();
        addFinalTotal();
    });
   
    document.querySelector('.form_expense_oct').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_oct'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_oct').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseOct.value;
        addRow.children[1].innerText = quantityExpenseOct.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesOct();
            addTotalMonthOct();
            addTotalExpense();
            addFinalTotal();
        });
   
        function updateTotalExpensesOct() {
            let parentRow = document.querySelector('.section_row_expense_oct');
            let rows = parentRow.querySelectorAll('.row_expense_oct');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_oct');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_oct').innerText = total;
            document.querySelector('.expenses_total_oct').innerText = total;
        }
        updateTotalExpensesOct();
        addTotalMonthOct();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthOct() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_oct');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_oct');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_oct');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_oct').innerText = total;
        updateTotalIncomeOct();
    }
    addTotalMonthOct();

    // ********* NOVEMBER *********//
    const itemNov = document.querySelector('#item_nov');
    const quantityNov = document.querySelector('#amount_nov');
    const itemExpenseNov = document.querySelector('#item_expense_nov');
    const quantityExpenseNov = document.querySelector('#amount_expense_nov');

    let initialCashMonthElementNov = document.querySelector('.initial_second_nov');
    initialCashMonthElementNov.addEventListener('keyup', function(event) {
        updateTotalIncomeNov();
        addTotalMonthNov();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeNov() {
        let parentRow = document.querySelector('.section_row_nov');
        let rows = parentRow.querySelectorAll('.row_nov');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_nov');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_nov');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_nov').innerText = total + initialCashMonth;
        document.querySelector('.income_total_nov').innerText = total + initialCashMonth;
    }
   
    document.querySelector('.form_nov').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_nov');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_nov').appendChild(addRow)
        addRow.children[0].innerText = itemNov.value;
        addRow.children[1].innerText = quantityNov.value;
        addRow.children[2].innerText = 'Delete';
   
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeNov();
            addTotalMonthNov();
            addTotalIncome();
            addFinalTotal();
        }   
           
        updateTotalIncomeNov();
        addTotalMonthNov();
        addTotalIncome();
        addFinalTotal();
    });
   
    document.querySelector('.form_expense_nov').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_nov'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_nov').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseNov.value;
        addRow.children[1].innerText = quantityExpenseNov.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesNov();
            addTotalMonthNov();
            addTotalExpense();
            addFinalTotal();
        });
  
        function updateTotalExpensesNov() {
            let parentRow = document.querySelector('.section_row_expense_nov');
            let rows = parentRow.querySelectorAll('.row_expense_nov');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_nov');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_nov').innerText = total;
            document.querySelector('.expenses_total_nov').innerText = total;
        }
        updateTotalExpensesNov();
        addTotalMonthNov();
        addTotalExpense();
        addFinalTotal();
    });
         
    function addTotalMonthNov() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_nov');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_nov');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_nov');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_nov').innerText = total;
        updateTotalIncomeNov();
    }
    addTotalMonthNov();

    // ********* DECEMBER *********//
    const itemDec = document.querySelector('#item_dec');
    const quantityDec = document.querySelector('#amount_dec');
    const itemExpenseDec = document.querySelector('#item_expense_dec');
    const quantityExpenseDec = document.querySelector('#amount_expense_dec');

    let initialCashMonthElementDec = document.querySelector('.initial_second_dec');
    initialCashMonthElementDec.addEventListener('keyup', function(event) {
        updateTotalIncomeDec();
        addTotalMonthDec();
        addTotalIncome();
        addFinalTotal();
    });

    function updateTotalIncomeDec() {
        let parentRow = document.querySelector('.section_row_dec');
        let rows = parentRow.querySelectorAll('.row_dec');
        let total = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            let priceElement = row.querySelector('.income_amount_dec');
            let amount = parseFloat(priceElement.innerText);
            total = total + amount;
        }
        let initialCashMonthElement = document.querySelector('.initial_second_dec');
        let initialCashMonth = parseFloat(initialCashMonthElement.value);
        document.querySelector('.income_total_month_dec').innerText = total + initialCashMonth;
        document.querySelector('.income_total_dec').innerText = total + initialCashMonth;
    }
   
    document.querySelector('.form_dec').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_dec');
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_dec').appendChild(addRow)
        addRow.children[0].innerText = itemDec.value;
        addRow.children[1].innerText = quantityDec.value;
        addRow.children[2].innerText = 'Delete';
  
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', remove);
        function remove(event) {
            this.parentElement.remove();
            updateTotalIncomeDec();
            addTotalMonthDec();
            addTotalIncome();
            addFinalTotal();
        }   

        updateTotalIncomeDec();
        addTotalMonthDec();
        addTotalIncome();
        addFinalTotal();
    });
   
    document.querySelector('.form_expense_dec').addEventListener('submit', function(event) {
        event.preventDefault();
        const row = document.querySelector('.row_expense_dec'); 
        const addRow = row.cloneNode(true); 
        document.querySelector('.section_row_expense_dec').appendChild(addRow); 
        addRow.children[0].innerText = itemExpenseDec.value;
        addRow.children[1].innerText = quantityExpenseDec.value;
        addRow.children[2].innerText = 'Delete';
        let toDelete = addRow.querySelector('.btn_delete');
        toDelete.addEventListener('click', function(event) {
            this.parentElement.remove();
            updateTotalExpensesDec();
            addTotalMonthDec();
            addTotalExpense();
            addFinalTotal();
        });
   
        function updateTotalExpensesDec() {
            let parentRow = document.querySelector('.section_row_expense_dec');
            let rows = parentRow.querySelectorAll('.row_expense_dec');
            let total = 0;
            for (let i = 0; i < rows.length; i++) {
                let row = rows[i];
                let priceElement = row.querySelector('.expense_amount_dec');
                let amount = parseFloat(priceElement.innerText);
                total = total + amount;
            }
            document.querySelector('.expenses_total_month_dec').innerText = total;
            document.querySelector('.expenses_total_dec').innerText = total;
        }
        updateTotalExpensesDec();
        addTotalMonthDec();
        addTotalExpense();
        addFinalTotal();
    });
    
    function addTotalMonthDec() {
        let total = 0;
        let totalIncomeMonthElement = document.querySelector('.income_total_month_dec');
        let totalIncomeMonth = parseFloat(totalIncomeMonthElement.innerText);
        let totalExpensesMonthElement = document.querySelector('.expenses_total_month_dec');
        let totalExpensesMonth = parseFloat(totalExpensesMonthElement.innerText);
        total = parseFloat(totalIncomeMonth - totalExpensesMonth);
        let actualCashMonth = document.querySelector('.actual_cash_month_dec');
        actualCashMonth.innerText = total;
        document.querySelector('.actual_cash_total_dec').innerText = total;
        updateTotalIncomeDec();
    }
    addTotalMonthDec();

    function addTotalIncome() {
        let total = 0;
        let totalIncomeJan = parseFloat(document.querySelector('.income_total_jan').innerText);
        let totalIncomeFeb = parseFloat(document.querySelector('.income_total_feb').innerText);
        let totalIncomeMar = parseFloat(document.querySelector('.income_total_mar').innerText);
        let totalIncomeApr = parseFloat(document.querySelector('.income_total_apr').innerText);
        let totalIncomeMay = parseFloat(document.querySelector('.income_total_may').innerText);
        let totalIncomeJun = parseFloat(document.querySelector('.income_total_jun').innerText);
        let totalIncomeJul = parseFloat(document.querySelector('.income_total_jul').innerText);
        let totalIncomeAug = parseFloat(document.querySelector('.income_total_aug').innerText);
        let totalIncomeSep = parseFloat(document.querySelector('.income_total_sep').innerText);
        let totalIncomeOct = parseFloat(document.querySelector('.income_total_oct').innerText);
        let totalIncomeNov = parseFloat(document.querySelector('.income_total_nov').innerText);
        let totalIncomeDec = parseFloat(document.querySelector('.income_total_dec').innerText);
        total = totalIncomeJan + totalIncomeFeb + totalIncomeMar + totalIncomeApr + totalIncomeMay + totalIncomeJun
            + totalIncomeJul + totalIncomeAug + totalIncomeSep + totalIncomeOct + totalIncomeNov + totalIncomeDec;
        document.querySelector('.total_income_year').innerText = total;
    }
    addTotalIncome();


    function addTotalExpense() {
        let total = 0;
        let totalExpensesJan = parseFloat(document.querySelector('.expenses_total_jan').innerText);
        let totalExpensesFeb = parseFloat(document.querySelector('.expenses_total_feb').innerText);
        let totalExpensesMar = parseFloat(document.querySelector('.expenses_total_mar').innerText);
        let totalExpensesApr = parseFloat(document.querySelector('.expenses_total_apr').innerText);
        let totalExpensesMay = parseFloat(document.querySelector('.expenses_total_may').innerText);
        let totalExpensesJun = parseFloat(document.querySelector('.expenses_total_jun').innerText);
        let totalExpensesJul = parseFloat(document.querySelector('.expenses_total_jul').innerText);
        let totalExpensesAug = parseFloat(document.querySelector('.expenses_total_aug').innerText);
        let totalExpensesSep = parseFloat(document.querySelector('.expenses_total_sep').innerText);
        let totalExpensesOct = parseFloat(document.querySelector('.expenses_total_oct').innerText);
        let totalExpensesNov = parseFloat(document.querySelector('.expenses_total_nov').innerText);
        let totalExpensesDec = parseFloat(document.querySelector('.expenses_total_dec').innerText);
        total = totalExpensesJan + totalExpensesFeb + totalExpensesMar + totalExpensesApr + totalExpensesMay + totalExpensesJun
            + totalExpensesJul + totalExpensesAug + totalExpensesSep + totalExpensesOct + totalExpensesNov + totalExpensesDec;
        document.querySelector('.total_expenses_year').innerText = total;
    }
    addTotalExpense();

    function addFinalTotal() {
        let totalIncomeYear = parseFloat(document.querySelector('.total_income_year').innerText);
        let totalExpensesYear = parseFloat(document.querySelector('.total_expenses_year').innerText);
        let total = parseFloat(totalIncomeYear - totalExpensesYear);
        document.querySelector('.total_final_year').innerText = total;
    }
    addFinalTotal();
});



