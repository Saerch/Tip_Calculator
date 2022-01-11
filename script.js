const tipcal = () =>{
    let amount = document.getElementById('bill_amount').value;
   let percent = document.getElementById('tips_percent').value;
   let tip = amount *(percent/100);
   
   let total = tip + Number(amount);
   document.getElementById('tip_amount').value = tip;
   document.getElementById('total_biller').value = total;
}