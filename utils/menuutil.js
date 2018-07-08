const menudata = [{
  "restaurant": "川菜",
  "menulist": {

    "yingcai": [{
        "name": "水煮肉片",
        "price": 22
      },
      {
        "name": "糖醋排骨",
        "price": 28
      }
    ],
    "xiaocai": [{
        "name": "宫保鸡丁",
        "price": 12
      },
      {
        "name": "土豆丝",
        "price": 10
      },
      {
        "name": "茄角恋",
        "price": 12
      },
      {
        "name": "香干炒肉",
        "price": 13
      },
    ],
    "diduan": [{
      "name": "土豆丝",
      "price": 8
    }]
  }

}]
const getSelected = req => {

  var count = 5
  var y = Math.floor(count / 3)
  var x = Math.floor(count * 2 / 3)
  var type_count  = [y, x, count-x-y]

  for (c in type_count){

    var s = new Set()
    while (s.size < c){
      s.add(Math.floor(Math.random() * 11))
    }


  }

  

  Math.floor(Math.random() * 11); 

  return menudata[0].menulist
}


module.exports = {
  selectedList: getSelected
}