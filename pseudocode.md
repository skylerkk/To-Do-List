## App.js

# Model
    state = arrOfListItems(objects), buttonClicked(string)

# Controller
    addToList Method
        adds a new listItem object to the array
    

# View
    3 different types of list
        all
        current
        completed
    render method
        renders the whole list

## List.js

# Model

# Controllor
    markedDone
        checks the curernt item
    buttonDelete
        deletes the current item

# View
    render method
        displays all the items in teh list

## ListInput.js

# Model

# Controller
    submitHandler

# View
    render method
        show the input field

## ListTopButtons.js

# Model

# Controller
    changePage
        each button with show a certain set of data

# View
    render method
        display all the buttons

## ListBottomButtons.js

# Model
    number of items

# Controller
    markedDone
    deleteDone
    resetDone

# View
    render method
        show number of items
        then display each button