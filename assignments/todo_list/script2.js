var truebutton = document.querySelector('.true_button')
var falsebutton = document.querySelector('.false_button')

function dofetchtruedata(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(  (Response) =>  {return Response.json()}  )
    .then( (completedata) => {
        var data1 = completedata.filter(function(data){if(data.completed){return data}})

        var data = ""
        var count = (`<P> No.of True Data's are:=> ${data1.length}</p>`)
        data+=count
        for(let i=0;i<data1.length;i++){
            data +=(`<p>${i+1} ==>  "id:"${data1[i].id} <br> "title:"${data1[i].title} <br> "status:"${data1[i].completed}</p>`)
        }
    
        document.querySelector('.todos').innerHTML = count
        document.querySelector('.todos').innerHTML = data

    } )
    .catch((e) => {console.log(e)})

}


truebutton.addEventListener('click', dofetchtruedata)


function dofetchfalsedata(){ 
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(  (Response) =>  {return Response.json()}  )
    .then( (completedata) => {
    var data1 = completedata.filter(function(data){if(!data.completed){return data}})

    var data = ""
    var count = (`<P> No.of False Data's are:=> ${data1.length}</p>`)
    data+=count
    for(let i=0;i<data1.length;i++){
        data +=(`<p>${i+1} ==>  "id:"${data1[i].id} <br> "title:"${data1[i].title} <br> "status:"${data1[i].completed}</p>`)
    }
   
    document.querySelector('.todos').innerHTML = data

} )
.catch((e) => {console.log(e)})}

falsebutton.addEventListener('click', dofetchfalsedata)