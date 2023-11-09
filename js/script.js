/** Global constants */
const MENU_ELEMENTS = document.querySelectorAll('.main-card-menu-button'),
      CARD = document.querySelectorAll('.card-details-panel-activity'),
      DATABASE = "./data.json";


/** Functions */

/**
 * This function asynchronously fetches data from a JSON file
 * @param {string} database The JSON file being read from
 */
async function getData(database){
    let response = await fetch(database);
    let data = await response.json();
    routeDataToMenu(data);
}

/** Get data once the document has loaded */
document.activeElement('load', ()=>{
    getData(DATABASE);
})

/**
 * This function sends the data to the menu to be populated based on the active state of ech menu
 * @param {object} data - Parameter to receive data as a JavaScript object
 */
function routeDataToMenu(data){
    MENU_ELEMENTS.forEach(buttonElement =>{
        if(buttonElement.classList.contains('main-card-menu-button-active')){
            switch(buttonElement.innerText){
                case "Daily":
                    populateDailyMenu(data);
                    break;
                case "Weekly":
                    populateWeeklyMenu(data);
                    break;
                case "Monthly":
                    populateMonthlyMenu(data);
                    break;
                default:
                    console.error("Missing active class");
                    break;
            }
        }
    })
}

/**
 * This function populates the daily menu
 * @param {object} data - Parameter to receive data as a JavaScript object
 */
function populateDailyMenu(data){
    routeDataToCard(data, "daily");
}

/**
 * This function populates the weekly menu
 * @param {object} data - Parameter to receive data as a JavaScript object
 */
function populateWeeklyMenu(data){
    routeDataToCard(data, "weekly");
}

/**
 * This function populates the monthy menu
 * @param {object} data - Parameter to receive data as a JavaScript object
 */
function populateMonthlyMenu(data){
   routeDataToCard(data, "monthly");
}

/**
 * This functions sends data to the appropriate card based on conditions
 * @param {object} data - Parameter to receive data as a JavaScript object
 */
function routeDataToCard(data, menu){
    data.forEach(item =>{
        switch(item.title){
            /**Populate work card */
            case "Work":
                CARD.forEach(card =>{
                    if (card.innerText === "Work"){
                        populateDOM(card, menu, item);
                    }
                })
                break;
            /**Populate play card */
            case "Play":
                CARD.forEach(card =>{
                    if (card.innerText === "Play"){
                        populateDOM(card, menu, item);
                    }
                })
                break;
            /**Populate study card */
            case "Study":
                CARD.forEach(card =>{
                    if (card.innerText === "Study"){
                        populateDOM(card, menu, item);
                    }
                })
                break;
            /**Populate exercise card */
            case "Exercise":
                CARD.forEach(card =>{
                    if (card.innerText === "Exercise"){
                        populateDOM(card, menu, item);
                    }
                })
                break;
            /**Populate social card */
            case "Social":
                CARD.forEach(card =>{
                    if (card.innerText === "Social"){
                        populateDOM(card, menu, item);
                    }
                })
                break;
            /**Populate self care card */
            case "Self Care":
                CARD.forEach(card =>{
                    if (card.innerText === "Self Care"){
                        populateDOM(card, menu, item);
                    }
                })
                break;
            default:
                console.error("Card is missing");
                break;
        } 
    })
}

/**
 * This function populates the DOM with appropriate data
 * @param {string} card - Each card on the DOM
 * @param {string} menu - The menu that is active
 * @param {string} item - Each item to populate the cards on the DOM
 */
function populateDOM(card, menu, item){
    /** Rename DOM traversal item to human readable language */
    let cardTime = card.parentElement.nextElementSibling.children[0], 
        itemTime = item.timeframes[menu].current, 
        cardDate = card.parentElement.nextElementSibling.children[1], 
        itemDate = item.timeframes[menu].previous;

    /** Validate for grammatical errors */
    if (itemTime <= 1){
        cardTime.innerText = `${itemTime}hr`;
    } else{
        cardTime.innerText = `${itemTime}hrs`;
    } if (itemDate <=1){
        cardDate.innerText = `Previous - ${itemDate}hr`;
    } else{
        cardDate.innerText = `Previous - ${itemDate}hrs`;
    }
}

/**
 * This function switches menu between active and inactive states
 * @param {string} event 
 */
function switchActiveState(event){
    addActiveState(event.target);
    removeActiveState();
}

/**
 * This function adds active state to a menu when it is clicke
 * @param {string} menu - The menu clikcked
 */
function addActiveState(menu){
    if (!menu.classList.contains('main-card-menu-button-active')){
        menu.classList.add('main-card-menu-button-active');
        localStorage.setItem('currentCalendar', menu.innerText);
    }
}

/**
 * This function removes active state from a menu when another menu is clicked
 */
function removeActiveState(){
    MENU_ELEMENTS.forEach(buttonElement =>{
        if (buttonElement.innerText !== localStorage.getItem('currentCalendar')){
            buttonElement.classList.remove('main-card-menu-button-active');
        }
    })
}


/** Listeners */

/** Swicth state and display data based on the menu clicked */
MENU_ELEMENTS.forEach(buttonElement =>{
    buttonElement.addEventListener('click', event =>{
        switchActiveState(event);
        getData(DATABASE);
    });
})
    