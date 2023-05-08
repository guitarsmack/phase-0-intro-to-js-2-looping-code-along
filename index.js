// Code your solutions in this file
function writeCards(people,event){
    let messages = []
    for (let i = 0; i < people.length; i++){
        messages.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}


function countDown(num){
    let x = num
    while (x > 0){
      console.log(x)
        x--;
    }
    console.log(x)
  }