person = {
    'abc': {
        'age': 20,
        'name': 'mom',
        'dob': '17-08-1998'
    },
    'bcd': {
        'age': 27,
        'name': 'bro',
        'dob': '17-08-1998'

    },
    'cde': {
        'age': 39,
        'name': 'indu',
        'dob': '17-08-1998'
    }
}

function func1(id) {
    document.write(JSON.stringify(person[id]))
}



