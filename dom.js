document.getElementById("container").addEventListener(click,function(){
    const div = document.createElement('h2');
})

function addBGcolor(){
    const textFiles = document.getElementsByClassName('second')
    for(const textFile of textFiles){
        textFile.style.backgroundColor ='purple';
    }
}