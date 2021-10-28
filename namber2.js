const objProto = new Object();
objProto.elementPr = "hello";
objProto.element2Pr = 452;


const obj = Object.create(objProto);
obj.elOb = 25;
obj.elOb2 = 'world'



function getOwnProto(str, name) {
  console.log(str in name)
  console.log(name.hasOwnProperty(str))
}


getOwnProto('element2Pr', obj)