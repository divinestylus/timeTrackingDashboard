/** Global constants */
const CALENDAR_BUTTON_ELEMENT = document.querySelectorAll('.main-card-calendar-button'),
      CARD = document.querySelectorAll('.card-details-panel-activity'),
      DATABASE = "../data.json";
    


/** Functions */

/**
 * This function asynchronously fetches data from a JSON file
 * @param {string} database The JSON file being read from
 */
async function getData(database){
    let response = await fetch(database);
    let data = await response.json();
    populateDOM(data);
}

getData(DATABASE);

/**
 * 
 * @param {object} data - Parameter to receive data as a JavaScript object
 */
function populateDOM(data){
    CALENDAR_BUTTON_ELEMENT.forEach(buttonElement =>{
        if(buttonElement.classList.contains('main-card-calendar-button-active')){
            switch(buttonElement.innerText){
                case "Daily":
                    populateDaily(data);
                    break;
                case "Weekly":
                    populateWeekly(data);
                    break;
                case "Monthly":
                    populateMonthly(data);
                    break;
                default:
                    console.error("Missing active class");
                    break;
            }
        }
    })
}


function populateDaily(data){
    data.forEach(item =>{
        /**Populate work card */
        if (item.title === "Work"){
            CARD.forEach(card =>{
                if (card.innerText === "Work"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.daily.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.daily.previous}hrs`;
                }
            })
        }
        /**Populate play card */
        if (item.title === "Play"){
            CARD.forEach(card =>{
                if (card.innerText === "Play"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.daily.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.daily.previous}hrs`;
                }
            })
        }
        /**Populate study card */
        if (item.title === "Study"){
            CARD.forEach(card =>{
                if (card.innerText === "Study"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.daily.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.daily.previous}hrs`;
                }
            })
        }
        /**Populate exercise card */
        if (item.title === "Exercise"){
            CARD.forEach(card =>{
                if (card.innerText === "Exercise"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.daily.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.daily.previous}hrs`;
                }
            })
        }
        /**Populate social card */
        if (item.title === "Social"){
            CARD.forEach(card =>{
                if (card.innerText === "Social"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.daily.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.daily.previous}hrs`;
                }
            })
        }
        /**Populate self care card */
        if (item.title === "Self Care"){
            CARD.forEach(card =>{
                if (card.innerText === "Self Care"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.daily.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.daily.previous}hrs`;
                }
            })
        }

    })
}


function populateWeekly(data){
    data.forEach(item =>{
        /**Populate work card */
        if (item.title === "Work"){
            CARD.forEach(card =>{
                if (card.innerText === "Work"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.weekly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.weekly.previous}hrs`;
                }
            })
        }
        /**Populate play card */
        if (item.title === "Play"){
            CARD.forEach(card =>{
                if (card.innerText === "Play"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.weekly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.weekly.previous}hrs`;
                }
            })
        }
        /**Populate study card */
        if (item.title === "Study"){
            CARD.forEach(card =>{
                if (card.innerText === "Study"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.weekly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.weekly.previous}hrs`;
                }
            })
        }
        /**Populate exercise card */
        if (item.title === "Exercise"){
            CARD.forEach(card =>{
                if (card.innerText === "Exercise"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.weekly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.weekly.previous}hrs`;
                }
            })
        }
        /**Populate social card */
        if (item.title === "Social"){
            CARD.forEach(card =>{
                if (card.innerText === "Social"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.weekly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.weekly.previous}hrs`;
                }
            })
        }
        /**Populate self care card */
        if (item.title === "Self Care"){
            CARD.forEach(card =>{
                if (card.innerText === "Self Care"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.weekly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.weekly.previous}hrs`;
                }
            })
        }
    })
}

function populateMonthly(data){
    data.forEach(item =>{
        /**Populate work card */
        if (item.title === "Work"){
            CARD.forEach(card =>{
                if (card.innerText === "Work"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.monthly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.monthly.previous}hrs`;
                }
            })
        }
        /**Populate play card */
        if (item.title === "Play"){
            CARD.forEach(card =>{
                if (card.innerText === "Play"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.monthly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.monthly.previous}hrs`;
                }
            })
        }
        /**Populate study card */
        if (item.title === "Study"){
            CARD.forEach(card =>{
                if (card.innerText === "Study"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.monthly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.monthly.previous}hrs`;
                }
            })
        }
        /**Populate exercise card */
        if (item.title === "Exercise"){
            CARD.forEach(card =>{
                if (card.innerText === "Exercise"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.monthly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.monthly.previous}hrs`;
                }
            })
        }
        /**Populate social card */
        if (item.title === "Social"){
            CARD.forEach(card =>{
                if (card.innerText === "Social"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.monthly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.monthly.previous}hrs`;
                }
            })
        }
        /**Populate self care card */
        if (item.title === "Self Care"){
            CARD.forEach(card =>{
                if (card.innerText === "Self Care"){
                    card.parentElement.nextElementSibling.children[0].innerText = `${item.timeframes.monthly.current}hrs`;
                    card.parentElement.nextElementSibling.children[1].innerText = `Previous - ${item.timeframes.monthly.previous}hrs`;
                }
            })
        }
    })
}




function switchActiveState(event){
    addActiveState(event.target);
    removeActiveState();
}

function addActiveState(calendar){
    if (!calendar.classList.contains('main-card-calendar-button-active')){
        calendar.classList.add('main-card-calendar-button-active');
        localStorage.setItem('currentCalendar', calendar.innerText);
    }
}

function removeActiveState(){
    CALENDAR_BUTTON_ELEMENT.forEach(buttonElement =>{
        if (buttonElement.innerText !== localStorage.getItem('currentCalendar')){
            buttonElement.classList.remove('main-card-calendar-button-active');
        }
    })
}




/** Listeners */
CALENDAR_BUTTON_ELEMENT.forEach(buttonElement =>{
    buttonElement.addEventListener('click', event =>{
        switchActiveState(event);
        getData(DATABASE);
    });
})
