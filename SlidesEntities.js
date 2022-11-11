marker ={
    choosenSlidesId: [2],
    choosenElementsId: [1, 5, 3],
    choosenTextId: []
}

vidSlides = {
    savingHistory: [],
    save(),
    open(),
    showSlides(),
    undo(),
    redo()
}

presentation = {
    nameDocument: 'First Presentation',
    slides: [1, 2, 3, 4, 5],
    addSlide(),
    deleteSlide(),
    moveSlide()
}

slide ={
    id: '3',
    backgroundColor: 'white',
    backgroundImg: null,
    elementsId: [1, 2, 3, 4, 5],
    changeBackgroungColor(),
    changeBackgroundImg()
}

element = {
    id: '',
    x: '',
    y: '',
    createElement(),
    changeSize(),
    deleteElement
}

const img = {
    width: '200',
    height: '300',
    x: '400',
    y: '700',
    path: 'C:\\Users\\admin\\Downloads'
}

const text = {
    font: 'Bold Italic',
    size: '24',
    color: 'black',
    bold: true,
    italic: false,
    highlighted: false,
    changeSize(),
    changeFont(),
    changeColor(),
    makeBold(),
    makeItalic(),
    makeHighlighted()
}

const primitive = {
    type: 'circle',
    color: 'purple'
}

const triangle = {
    firstX: '150',
    firstY: '100',
    secondX: '50',
    secondY: '300',
    thirdX: '250',
    thirdY: '300',

}

const rectangle = {
    x: '600',
    y: '500',
    width: '50',
    height: '100'
}

const circle = {
    x: '200',
    y: '300',
    radius: '10'
}
