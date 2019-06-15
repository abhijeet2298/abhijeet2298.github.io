 var sum = 0;
function calc(weight){
            var radiovalue = $("input[type='radio']:checked").map(function(){
                val = this.value;
                intval = parseInt(val);
                return intval;
            }).get();
        
         for (i=0; i<radiovalue.length; i++){
            sum += parseInt(radiovalue[i]);
         }
         console.log(sum);
        sum = sum*parseFloat(weight);
         var v = parseFloat(localStorage.score);
        v = v + sum;
        localStorage.score = v;
    return v;
        }