var drums = document.getElementById("drums");
var interactive = document.getElementById("interactive");

var color = "salmon";
const chorus = new Tone.Chorus(4,2.5,0.5).toDestination().start();
const synth = new Tone.Synth().connect(chorus);

intro.addEventListener('click',()=> {
  intro.style.display = "none"
})

document.body.addEventListener('keydown' , (event) => {

if(event.key == 'a') {
synth.triggerAttackRelease("C4" , "4n")
document.body.style.backgroundColor = '#FFA794'

}
if(event.key == 's') {
synth.triggerAttackRelease("D4" , "4n")
document.body.style.backgroundColor = '#94CEFF'

}
if(event.key == 'd') {
synth.triggerAttackRelease("E4" , "4n")
document.body.style.backgroundColor = '#F39AFF'

}
if(event.key == 'f') {
synth.triggerAttackRelease("F4" , "4n")
document.body.style.backgroundColor = '#FFFF9A'

}
if(event.key == 'g') {
synth.triggerAttackRelease("G4" , "4n")
document.body.style.backgroundColor = '#E5FFAD'

}
if(event.key == 'h') {
synth.triggerAttackRelease("A4" , "5n")
document.body.style.backgroundColor = '#FFDAAD'

}
if(event.key == 'j') {
synth.triggerAttackRelease("B4" , "5n")
document.body.style.backgroundColor = '#D2D4FF'

}

})

interactive.addEventListener('mouseenter' ,() => {
drums.play();
} );

interactive.addEventListener('mouseleave',() => {
drums.pause();
});

drums.addEventListener('timeupdate' , (event) => {
console.log("updated" , event.target.currentTime);
if (event.target.currentTime > 2.0) {
  color = "black";
} else {
color = "salmon";
}

})
