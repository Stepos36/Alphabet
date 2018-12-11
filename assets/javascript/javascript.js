let alphabetList = [{
    alphabet: 'A',
    imageSource: 'assets/images/a.png',
    imageSign: 'Apple'
}, {
    alphabet: 'B',
    imageSource: 'assets/images/b.jpg',
    imageSign: 'B-man'
}, {
    alphabet: 'C',
    imageSource: 'assets/images/c.jpg',
    imageSign: 'Cyber-watch'
}, {
    alphabet: 'D',
    imageSource: 'assets/images/d.jpg',
    imageSign: 'Digital'
}, {
    alphabet: 'E',
    imageSource: 'assets/images/e.jpg',
    imageSign: 'Elon Musk'
}, {
    alphabet: 'F',
    imageSource: 'assets/images/f.jpg',
    imageSign: 'Fighter'
}, {
    alphabet: 'G',
    imageSource: 'assets/images/g.png',
    imageSign: 'Google'
}, {
    alphabet: 'H',
    imageSource: 'assets/images/h.jpg',
    imageSign: 'Honda'
}, {
    alphabet: 'I',
    imageSource: 'assets/images/i.png',
    imageSign: 'Internet'
}, {
    alphabet: 'J',
    imageSource: 'assets/images/j.jpg',
    imageSign: 'Jack Daniels'
}, {
    alphabet: 'K',
    imageSource: 'assets/images/k.jpg',
    imageSign: 'Kangaroo'
}, {
    alphabet: 'L',
    imageSource: 'assets/images/l.jpg',
    imageSign: 'Lambo'
}, {
    alphabet: 'M',
    imageSource: 'assets/images/m.jpg',
    imageSign: 'Money'
}, {
    alphabet: 'N',
    imageSource: 'assets/images/n.jpg',
    imageSign: 'November'
}, {
    alphabet: 'O',
    imageSource: 'assets/images/o.jpg',
    imageSign: 'Opera'
}, {
    alphabet: 'P',
    imageSource: 'assets/images/p.jpg',
    imageSign: 'Physics'
}, {
    alphabet: 'Q',
    imageSource: 'assets/images/q.jpg',
    imageSign: 'Quarter'
}, {
    alphabet: 'R',
    imageSource: 'assets/images/r.jpg',
    imageSign: 'Rocket'
}, {
    alphabet: 'S',
    imageSource: 'assets/images/s.jpg',
    imageSign: 'Sand'
}, {
    alphabet: 'T',
    imageSource: 'assets/images/t.jpg',
    imageSign: 'Tesla'
}, {
    alphabet: 'U',
    imageSource: 'assets/images/u.jpg',
    imageSign: 'Umbrella'
}, {
    alphabet: 'V',
    imageSource: 'assets/images/v.jpg',
    imageSign: 'Vendetta'
}, {
    alphabet: 'W',
    imageSource: 'assets/images/w.png',
    imageSign: 'Westworld'
}, {
    alphabet: 'X',
    imageSource: 'assets/images/x.jpg',
    imageSign: 'X - Iphone'
}, {
    alphabet: 'Y',
    imageSource: 'assets/images/y.jpg',
    imageSign: 'YoYo'
}, {
    alphabet: 'Z',
    imageSource: 'assets/images/z.jpg',
    imageSign: 'Zebra'
},];

window.onload = function(){
var objImage = document.getElementsByClassName('image')
var objSign= document.getElementById("imageSign")
console.log(objSign)
document.addEventListener('keypress', function(event) {
    var keyLetter = event.key;
    var keyWord = keyLetter.toUpperCase()
    console.log(keyWord)
    image(keyWord)    
})

function image(letter) {
    for (var i=0;i<alphabetList.length;i++) {
        if (letter===alphabetList[i].alphabet) {
            objImage[0].src = alphabetList[i].imageSource;
            objSign.innerHTML = alphabetList[i].imageSign
}
    }
}

}