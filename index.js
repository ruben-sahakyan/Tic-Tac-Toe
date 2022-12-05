const Main = document.querySelector('.Main');
const XorO = document.querySelector('.Title > p');
//console.log(XorO.textContent);

let Count = false;

//All position
let myArr = [];
// X position
let arrX = [];
// O position
let arrO = [];

//game
Main.addEventListener('click', function(event) {
    const Tuch = event.target.closest('div');

    //check for empty cell
    if(Tuch.querySelector('p').textContent == '') {

        //change player
        Count = !Count;


        myArr.push(Number(Tuch.id));

        // play X:
        if(Count) {
            XorO.textContent = 'Play: O';
            console.log(myArr);
            Tuch.querySelector('p').textContent = 'X';
            arrX.push(Number(Tuch.id));
            if(PositionWin(arrX)) {
                //alert('WIN: X');
                XorO.textContent = 'Win: X';
                //Clear position
                ClearAll(Main.querySelectorAll('p'));
            }
            else if(myArr.length == 9) {
                //alert('THE END');
                XorO.textContent = 'DRAW';
                //Clear position
                ClearAll(Main.querySelectorAll('p'));
            }
        }
        // play O:
        else if(!Count) {
            XorO.textContent = 'Play: X';
            console.log(myArr);
            Tuch.querySelector('p').textContent = 'O';
            arrO.push(Number(Tuch.id));
            if(PositionWin(arrO)) {
                //alert('WIN: O');
                XorO.textContent = 'Win: O';
                //Clear position
                ClearAll(Main.querySelectorAll('p'));
            }
            else if(myArr.length == 9) {
                //alert('THE END');
                XorO.textContent = 'DRAW';
                //Clear position
                ClearAll(Main.querySelectorAll('p'));
            }
        }

    }
});

//Clear all position
function ClearAll(a) {
    for(let i of a) {
        i.textContent = '';
    }
    myArr = [];
    arrO = [];
    arrX = [];
}


//Check Win position
function PositionWin(arr) {
    let WinPosArr = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]];
    for(let a of WinPosArr) {
        if((function(arr) {
            for(let i of a) {
                if(arr.indexOf(i) == -1) {return false;}
                else {continue;}
            }
            return true;
        })(arr)) {return true}
        else {
            continue;
        }
    }
    return false;
};