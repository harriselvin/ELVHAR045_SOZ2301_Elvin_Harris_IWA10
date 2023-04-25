const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment



// Check if item with ID 9 exists
console.log(holidays.name || `ID ${futureId} not created yet`)

// Make a copy of Christmas 
const copied ={ id: 6,
    name: 'X-mas',
    date: new Date(`25 December ${currentYear} 13:25`),
}

// Change name and date of Christmas 
copied.date.setHours(0, 0, 0, 0)
const epoch = new Date(copied.date).getTime()

// Check if new date is earlier than old date
const isEarlier = epoch < new Date(holidays[6].date).getTime()

if (isEarlier) {
console.log('New date is earlier:', isEarlier)
holidays[6]= copied

// Log changes made to copied object
console.log('ID change:', holidays[6].id != copied.id)
console.log('Name change:', holidays[6].name = copied.name)
const ChangedDate = holidays[6].date = copied.date
console.log('Date change:', ChangedDate.toLocaleDateString('en-GB'))
}
// Log the first and last holidays of the year
const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),
)

const firstDay = new Date(firstHolidayTimestamp).getDate()
const firstMonth = new Date(firstHolidayTimestamp).getMonth()+1
const lastDay = new Date(lastHolidayTimestamp).getDate()
const lastMonth = new Date(lastHolidayTimestamp).getMonth()+1

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

// Log a random holiday date and format date as well
const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length)
const randomHoliday = new Date(holidays[randomIndex].date)
const formatedDate = randomHoliday.toLocaleDateString('en-GB')
console.log(formatedDate)