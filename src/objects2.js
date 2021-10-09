//just for my referernce

var data= {
    "person1":{
        "name":"tharun",
        "email":"t@gmail.com"
    },
    "person2":{
        "name":"kalyan",
        "email":"k@gmail.com"
    }
}

console.log(Object.keys(data))

Object.keys(data).map(key => console.log(key))

Object.keys(data).map(key => console.log(data[key]))

