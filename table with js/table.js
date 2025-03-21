 function sallarycalculate(name,
    designiation,sallary){
    
    var tax_ratio=0.0,  tax_deduction=0,net_sallary=0;
   
    if (sallary < 50000) {
        tax_ratio = 0
        
    }
    else if (sallary >= 50000 && sallary<=100000) {
        tax_ratio = 2.5
        
    }
    else if (sallary >100000 && sallary <=150000) {
        tax_ratio =5.5
    }
    else if (sallary >150000 && sallary <= 200000) {
        tax_ratio = 7.5
    }
    else
    {
        tax_ratio = 12.5
    }

    tax_deduction = sallary*tax_ratio/100
    net_sallary = sallary-tax_deduction

    return`
        <tr>
              <th>${name}</th>
              <th>${designiation}</th>
              <th>${sallary}</th>
              <th>${tax_deduction}</th>
              <th> ${net_sallary}</th>
          </tr>
    
    `


 }
//input the data by promt
 var name =prompt("Enter your name");
 var sallary =prompt("Enter your sallary");
 var designiation =prompt("Enter your desigination");

 var data = sallarycalculate(name,designiation,sallary)//call the function
 //submit data into the table
 document.getElementById("records").innerHTML= data