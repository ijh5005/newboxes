//js script
let text = "";

for(let i = 0; i < 60; i++){

  let surroundingBoxesTop;
  let surroundingBoxesRight;
  let surroundingBoxesBottom;
  let surroundingBoxesLeft;
  let surroundingBoxesLinesClickedTop;
  let surroundingBoxesLinesClickedRight;
  let surroundingBoxesLinesClickedBottom;
  let surroundingBoxesLinesClickedLeft;
  let connectedBoxesTop;
  let connectedBoxesRight;
  let connectedBoxesBottom;
  let connectedBoxesLeft;
  let boardPosition;


  //surroundingBoxes variables
  if(i === 0){
    surroundingBoxesTop = null;
    surroundingBoxesRight = 1;
    surroundingBoxesBottom = 6;
    surroundingBoxesLeft = null;
  } else if (i === 5) {
    surroundingBoxesTop = null;
    surroundingBoxesRight = null;
    surroundingBoxesBottom = 11;
    surroundingBoxesLeft = 4;
  } else if (i === 54) {
    surroundingBoxesTop = 48;
    surroundingBoxesRight = 55;
    surroundingBoxesBottom = null;
    surroundingBoxesLeft = null;
  } else if (i === 59) {
    surroundingBoxesTop = 53;
    surroundingBoxesRight = null;
    surroundingBoxesBottom = null;
    surroundingBoxesLeft = 58;
  } else if (i==6||i==12||i==18||i==24||i==30||i==36||i==42||i==48) {
    surroundingBoxesTop = i - 6;
    surroundingBoxesRight = i + 1;
    surroundingBoxesBottom = i + 6;
    surroundingBoxesLeft = null;
  } else if (i==11||i==17||i==23||i==29||i==35||i==41||i==47||i==53) {
    surroundingBoxesTop = i - 6;
    surroundingBoxesRight = null;
    surroundingBoxesBottom = i + 6;
    surroundingBoxesLeft = i - 1;
  } else if (i==1||i==2||i==3||i==4) {
    surroundingBoxesTop = null;
    surroundingBoxesRight = i + 1;
    surroundingBoxesBottom = i + 6;
    surroundingBoxesLeft = i - 1;
  } else if (i==55||i==56||i==57||i==58) {
    surroundingBoxesTop = i - 6;
    surroundingBoxesRight = i + 1;
    surroundingBoxesBottom = null;
    surroundingBoxesLeft = i - 1;
  } else {
    surroundingBoxesTop = i - 6;
    surroundingBoxesRight = i + 1;
    surroundingBoxesBottom = i + 6;
    surroundingBoxesLeft = i - 1;
  }


  //surroundingBoxesLinesClicked variables
  if(i === 0){
    surroundingBoxesLinesClickedTop = null;
    surroundingBoxesLinesClickedRight = 0;
    surroundingBoxesLinesClickedBottom = 0;
    surroundingBoxesLinesClickedLeft = null;
  } else if (i === 5) {
    surroundingBoxesLinesClickedTop = null;
    surroundingBoxesLinesClickedRight = null;
    surroundingBoxesLinesClickedBottom = 0;
    surroundingBoxesLinesClickedLeft = 0;
  } else if (i === 54) {
    surroundingBoxesLinesClickedTop = 0;
    surroundingBoxesLinesClickedRight = 0;
    surroundingBoxesLinesClickedBottom = null;
    surroundingBoxesLinesClickedLeft = null;
  } else if (i === 59) {
    surroundingBoxesLinesClickedTop = 0;
    surroundingBoxesLinesClickedRight = null;
    surroundingBoxesLinesClickedBottom = null;
    surroundingBoxesLinesClickedLeft = 0;
  } else if (i==6||i==12||i==18||i==24||i==30||i==36||i==42||i==48) {
    surroundingBoxesLinesClickedTop = 0;
    surroundingBoxesLinesClickedRight = 0;
    surroundingBoxesLinesClickedBottom = 0;
    surroundingBoxesLinesClickedLeft = null;
  } else if (i==11||i==17||i==23||i==29||i==35||i==41||i==47||i==53) {
    surroundingBoxesLinesClickedTop = 0;
    surroundingBoxesLinesClickedRight = null;
    surroundingBoxesLinesClickedBottom = 0;
    surroundingBoxesLinesClickedLeft = 0;
  } else if (i==1||i==2||i==3||i==4) {
    surroundingBoxesLinesClickedTop = null;
    surroundingBoxesLinesClickedRight = 0;
    surroundingBoxesLinesClickedBottom = 0;
    surroundingBoxesLinesClickedLeft = 0;
  } else if (i==55||i==56||i==57||i==58) {
    surroundingBoxesLinesClickedTop = 0;
    surroundingBoxesLinesClickedRight = 0;
    surroundingBoxesLinesClickedBottom = null;
    surroundingBoxesLinesClickedLeft = 0;
  } else {
    surroundingBoxesLinesClickedTop = 0;
    surroundingBoxesLinesClickedRight = 0;
    surroundingBoxesLinesClickedBottom = 0;
    surroundingBoxesLinesClickedLeft = 0;
  }


  //connectedBoxes variables
  if(i === 0){
    connectedBoxesTop = null;
    connectedBoxesRight = true;
    connectedBoxesBottom = true;
    connectedBoxesLeft = null;
  } else if (i === 5) {
    connectedBoxesTop = null;
    connectedBoxesRight = null;
    connectedBoxesBottom = true;
    connectedBoxesLeft = true;
  } else if (i === 54) {
    connectedBoxesTop = true;
    connectedBoxesRight = true;
    connectedBoxesBottom = null;
    connectedBoxesLeft = null;
  } else if (i === 59) {
    connectedBoxesTop = true;
    connectedBoxesRight = null;
    connectedBoxesBottom = null;
    connectedBoxesLeft = true;
  } else if (i==6||i==12||i==18||i==24||i==30||i==36||i==42||i==48) {
    connectedBoxesTop = true;
    connectedBoxesRight = true;
    connectedBoxesBottom = true;
    connectedBoxesLeft = null;
  } else if (i==11||i==17||i==23||i==29||i==35||i==41||i==47||i==53) {
    connectedBoxesTop = true;
    connectedBoxesRight = null;
    connectedBoxesBottom = true;
    connectedBoxesLeft = true;
  } else if (i==1||i==2||i==3||i==4) {
    connectedBoxesTop = null;
    connectedBoxesRight = true;
    connectedBoxesBottom = true;
    connectedBoxesLeft = true;
  } else if (i==55||i==56||i==57||i==58) {
    connectedBoxesTop = true;
    connectedBoxesRight = true;
    connectedBoxesBottom = null;
    connectedBoxesLeft = true;
  } else {
    connectedBoxesTop = true;
    connectedBoxesRight = true;
    connectedBoxesBottom = true;
    connectedBoxesLeft = true;
  }

  //boardPosition variables
  if(i === 0){
    boardPosition = "topLeft";
  } else if (i === 5) {
    boardPosition = "topRight";
  } else if (i === 54) {
    boardPosition = "bottomLeft";
  } else if (i === 59) {
    boardPosition = "bottomRight";
  } else if (i==6||i==12||i==18||i==24||i==30||i==36||i==42||i==48) {
    boardPosition = "left";
  } else if (i==11||i==17||i==23||i==29||i==35||i==41||i==47||i==53) {
    boardPosition = "right";
  } else if (i==1||i==2||i==3||i==4) {
    boardPosition = "top";
  } else if (i==55||i==56||i==57||i==58) {
    boardPosition = "bottom";
  } else {
    boardPosition = "middle";
  }



  text += "{id: "+i+",location: "+i+",isTopClicked: false,isRightClicked: false,isBottomClicked: false,isLeftClicked: false,surroundingBoxes: {top: "+surroundingBoxesTop+",right: "+surroundingBoxesRight+",bottom: "+surroundingBoxesBottom+",left: "+surroundingBoxesLeft+"},surroundingBoxesLinesClicked: {top: "+surroundingBoxesLinesClickedTop+",right: "+surroundingBoxesLinesClickedRight+",bottom: "+surroundingBoxesLinesClickedBottom+",left: "+surroundingBoxesLinesClickedLeft+"},linesClicked: 0,isTaken: false,connectedBoxes: {top: "+connectedBoxesTop+",right: "+connectedBoxesRight+",bottom: "+connectedBoxesBottom+",left: "+connectedBoxesLeft+"},boardPosition: '"+boardPosition+"',inPath: false,},";

}

console.log(text);

//html script
let text = "";
for(let i = 0; i < 60; i ++){
  text += "<div class='grid' id="+i+"><div data='clickBox' class='top' id="+i+"></div><div data='clickBox' class='right' id="+i+"></div><div data='clickBox' class='bottom' id="+i+"></div><div data='clickBox' class='left' id="+i+"></div></div>";
}

console.log(text);



//JS
const data = [{
    id: 0,
    location: 0,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: null,
        right: 1,
        bottom: 6,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: null,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: null,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "topLeft",
    inPath: false,
}, {
    id: 1,
    location: 1,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: null,
        right: 2,
        bottom: 7,
        left: 0
    },
    surroundingBoxesLinesClicked: {
        top: null,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: null,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: top,
    inPath: false,
}, {
    id: 2,
    location: 2,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: null,
        right: 3,
        bottom: 8,
        left: 1
    },
    surroundingBoxesLinesClicked: {
        top: null,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: null,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: top,
    inPath: false,
}, {
    id: 3,
    location: 3,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: null,
        right: 4,
        bottom: 9,
        left: 2
    },
    surroundingBoxesLinesClicked: {
        top: null,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: null,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: top,
    inPath: false,
}, {
    id: 4,
    location: 4,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: null,
        right: 5,
        bottom: 10,
        left: 3
    },
    surroundingBoxesLinesClicked: {
        top: null,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: null,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: top,
    inPath: false,
}, {
    id: 5,
    location: 5,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: null,
        right: null,
        bottom: 11,
        left: 4
    },
    surroundingBoxesLinesClicked: {
        top: null,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: null,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "topRight",
    inPath: false,
}, {
    id: 6,
    location: 6,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 0,
        right: 7,
        bottom: 12,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 7,
    location: 7,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 1,
        right: 8,
        bottom: 13,
        left: 6
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 8,
    location: 8,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 2,
        right: 9,
        bottom: 14,
        left: 7
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 9,
    location: 9,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 3,
        right: 10,
        bottom: 15,
        left: 8
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 10,
    location: 10,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 4,
        right: 11,
        bottom: 16,
        left: 9
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 11,
    location: 11,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 5,
        right: null,
        bottom: 17,
        left: 10
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 12,
    location: 12,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 6,
        right: 13,
        bottom: 18,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 13,
    location: 13,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 7,
        right: 14,
        bottom: 19,
        left: 12
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 14,
    location: 14,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 8,
        right: 15,
        bottom: 20,
        left: 13
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 15,
    location: 15,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 9,
        right: 16,
        bottom: 21,
        left: 14
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 16,
    location: 16,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 10,
        right: 17,
        bottom: 22,
        left: 15
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 17,
    location: 17,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 11,
        right: null,
        bottom: 23,
        left: 16
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 18,
    location: 18,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 12,
        right: 19,
        bottom: 24,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 19,
    location: 19,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 13,
        right: 20,
        bottom: 25,
        left: 18
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 20,
    location: 20,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 14,
        right: 21,
        bottom: 26,
        left: 19
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 21,
    location: 21,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 15,
        right: 22,
        bottom: 27,
        left: 20
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 22,
    location: 22,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 16,
        right: 23,
        bottom: 28,
        left: 21
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 23,
    location: 23,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 17,
        right: null,
        bottom: 29,
        left: 22
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 24,
    location: 24,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 18,
        right: 25,
        bottom: 30,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 25,
    location: 25,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 19,
        right: 26,
        bottom: 31,
        left: 24
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 26,
    location: 26,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 20,
        right: 27,
        bottom: 32,
        left: 25
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 27,
    location: 27,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 21,
        right: 28,
        bottom: 33,
        left: 26
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 28,
    location: 28,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 22,
        right: 29,
        bottom: 34,
        left: 27
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 29,
    location: 29,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 23,
        right: null,
        bottom: 35,
        left: 28
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 30,
    location: 30,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 24,
        right: 31,
        bottom: 36,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 31,
    location: 31,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 25,
        right: 32,
        bottom: 37,
        left: 30
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 32,
    location: 32,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 26,
        right: 33,
        bottom: 38,
        left: 31
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 33,
    location: 33,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 27,
        right: 34,
        bottom: 39,
        left: 32
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 34,
    location: 34,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 28,
        right: 35,
        bottom: 40,
        left: 33
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 35,
    location: 35,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 29,
        right: null,
        bottom: 41,
        left: 34
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 36,
    location: 36,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 30,
        right: 37,
        bottom: 42,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 37,
    location: 37,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 31,
        right: 38,
        bottom: 43,
        left: 36
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 38,
    location: 38,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 32,
        right: 39,
        bottom: 44,
        left: 37
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 39,
    location: 39,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 33,
        right: 40,
        bottom: 45,
        left: 38
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 40,
    location: 40,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 34,
        right: 41,
        bottom: 46,
        left: 39
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 41,
    location: 41,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 35,
        right: null,
        bottom: 47,
        left: 40
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 42,
    location: 42,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 36,
        right: 43,
        bottom: 48,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 43,
    location: 43,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 37,
        right: 44,
        bottom: 49,
        left: 42
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 44,
    location: 44,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 38,
        right: 45,
        bottom: 50,
        left: 43
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 45,
    location: 45,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 39,
        right: 46,
        bottom: 51,
        left: 44
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 46,
    location: 46,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 40,
        right: 47,
        bottom: 52,
        left: 45
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 47,
    location: 47,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 41,
        right: null,
        bottom: 53,
        left: 46
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 48,
    location: 48,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 42,
        right: 49,
        bottom: 54,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: null
    },
    boardPosition: "left",
    inPath: false,
}, {
    id: 49,
    location: 49,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 43,
        right: 50,
        bottom: 55,
        left: 48
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 50,
    location: 50,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 44,
        right: 51,
        bottom: 56,
        left: 49
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 51,
    location: 51,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 45,
        right: 52,
        bottom: 57,
        left: 50
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 52,
    location: 52,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 46,
        right: 53,
        bottom: 58,
        left: 51
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: true,
        left: true
    },
    boardPosition: "middle",
    inPath: false,
}, {
    id: 53,
    location: 53,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 47,
        right: null,
        bottom: 59,
        left: 52
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: 0,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: true,
        left: true
    },
    boardPosition: "right",
    inPath: false,
}, {
    id: 54,
    location: 54,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 48,
        right: 55,
        bottom: null,
        left: null
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: null,
        left: null
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: null,
        left: null
    },
    boardPosition: "bottomLeft",
    inPath: false,
}, {
    id: 55,
    location: 55,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 49,
        right: 56,
        bottom: null,
        left: 54
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: null,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: null,
        left: true
    },
    boardPosition: "bottom",
    inPath: false,
}, {
    id: 56,
    location: 56,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 50,
        right: 57,
        bottom: null,
        left: 55
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: null,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: null,
        left: true
    },
    boardPosition: "bottom",
    inPath: false,
}, {
    id: 57,
    location: 57,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 51,
        right: 58,
        bottom: null,
        left: 56
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: null,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: null,
        left: true
    },
    boardPosition: "bottom",
    inPath: false,
}, {
    id: 58,
    location: 58,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 52,
        right: 59,
        bottom: null,
        left: 57
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: 0,
        bottom: null,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: true,
        bottom: null,
        left: true
    },
    boardPosition: "bottom",
    inPath: false,
}, {
    id: 59,
    location: 59,
    isTopClicked: false,
    isRightClicked: false,
    isBottomClicked: false,
    isLeftClicked: false,
    surroundingBoxes: {
        top: 53,
        right: null,
        bottom: null,
        left: 58
    },
    surroundingBoxesLinesClicked: {
        top: 0,
        right: null,
        bottom: null,
        left: 0
    },
    linesClicked: 0,
    isTaken: false,
    connectedBoxes: {
        top: true,
        right: null,
        bottom: null,
        left: true
    },
    boardPosition: "bottomRight",
    inPath: false,
}];
