const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

 let arr =[];
 for(let i = 0; i<expr.length; i+=10){
        arr.push(expr.slice(i, i+10))
    }
    let newArr = [];
    arr.forEach(function(el) {
        if(el=='**********') newArr.push(" "); else{
        let str ='';
        for(let i=0; i<=el.length; i+=2){
            if(el.slice(i,i+2)=="10"){
                str+='.';
            }else if(el.slice(i,i+2)=="11"){
                str+="-";
            }
        }
        newArr.push(str);}
    });
    let decodeArr = [];
    newArr.forEach(function(el){
        if(el==" ")decodeArr.push(" ") ;
        else   decodeArr.push(MORSE_TABLE[el]);
    })
        return decodeArr.join("")


}


module.exports = {
    decode
}