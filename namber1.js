const objProto = new Object();
objProto.elementPr = "hello";
objProto.element2Pr = 452;


const obj = Object.create(objProto);
obj.elOb = 25;
obj.elOb2 = 'world'



function getOwnProto(name) {
    for (let key in name) {
    if (name.hasOwnProperty(key)) {
        console.log(key + ':' + name[key])
    }
  }
}


getOwnProto(obj)
