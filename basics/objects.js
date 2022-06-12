var cars = [
    {
    'name': 'Creta',
    'model': 'sx',
    'weigth': '1000 kg',
    'color': 'black',
    fullName:  function(){return this.name+" "+ this.model}
    },
    {
        'name': 'Venue',
        'model': 'sx',
        'weigth': '850 kg',
        'color': 'blue',
        // fullName:  function(){return this.name+" "+ this.model}
    }
]

cars[0]['fullNameoftheCar'] = cars[0].fullName()

// document.write(cars[0]['fullNameoftheCar'])
document.write(Object.keys(cars[0]))
document.write('<br>')
document.write(Object.keys(cars[1]))