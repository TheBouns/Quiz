const getQuestions = async function (){
    try {
      let res =  await axios.get("https://opentdb.com/api.php?amount=5") 
    return res.data;
    } catch (error) {
        console.log(error)
    }
}
const getTitle = async function(data){
    console.log(data.results)
    let arrTitle = data.results;
    for(let i=0; i<=arrTitle.length; i++){
        let question = arrTitle[i].question;   
        document.getElementById(`response${i+1}`).innerHTML = `<h2>${question}<h2>`; 
}  
    
    
}
const getResponses = async function(data){

}


const quiz = async function(){
    let data = await getQuestions().then();
    let title = await getTitle(data).then()
    let response =await getResponses(data).then() 
}

quiz().then()