var todobutton = document.querySelector('button')
var giventext = document.querySelector("input[name='todo_input']")
// var divsection = document.querySelector(".todos")
var number=-1
    function addtodointodiv(e){
        e.preventDefault()

        var text = document.querySelector("input[name='todo_input']").value
        number+=1
        let para = document.createElement("p");
        para.setAttribute("key",number)
        // let textnode = document.createTextNode(text)
         //para.appendChild(textnode) 
        para.innerHTML = text
        document.querySelector('.todos').appendChild(para)
        
        para.addEventListener('click',function (){
            document.querySelector('.todos').removeChild(para)
        })
       
    }




todobutton.addEventListener('click', addtodointodiv);
