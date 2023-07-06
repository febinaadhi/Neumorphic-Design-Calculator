
        let outputScreen=document.getElementById("output-screen");
        function display(num){
            outputScreen.value=outputScreen.value+num;
        }
        function calculate(){
            try{
                outputScreen.value=eval(outputScreen.value);
            }
            catch(error)
            {
                alert("invalid")
            }
        }
        function clear1(){
            outputScreen.value="";
        }
        function del(){
            outputScreen.value=outputScreen.value.slice(0,-1);
        }
      