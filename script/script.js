let names = ["Abel-Karim","Ayoub","Boris","Enguerran","Frank","Gabriel","Julien","Justin","Martial","Maxime","Messaoud","Yohan"]

function justDoIt(){
    shuffledList = shuffle(names);
    let i =0;
    shuffledList.forEach(name => {
        document.getElementById(""+i).innerHTML = name;
        i++;
    });
}
function shuffle(names) {
    let currentIndex = names.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [names[currentIndex], names[randomIndex]] = [
        names[randomIndex], names[currentIndex]];
    }
    return names;
  }