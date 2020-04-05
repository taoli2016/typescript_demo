/*
    ts中的接口-接口为一种规范的定义 interface
*/

//  1.属性接口  对 json 的约束

function printLabel(labelInfo:{label:string}):void{//约束必须传入一个string的参数
    console.log('printLabel')
}

var labelJson = {
    label:'aa'
}
printLabel(labelJson)




interface FullName{ //对传入对象的约束
    firstName:string;
    secondName:string;
    age:number;
}

function printName(name:FullName){
    //必须传入一个对象，对象中必须有 firstName secondName
    console.log(name.firstName + name.secondName)
}

function printInfo(name:FullName){
    //必须传入一个对象，对象中必须有 firstName secondName
    console.log(name.firstName + name.secondName + name.age)
}

var obj = {
    age:20,
    firstName:'tao',
    secondName:'li'
}

printName(obj)

printInfo(obj)


// 可选属性
interface FullName_{
    firstName:string;
    secondName?:string;  //此时secondName 可传可不传
}

function getName(name:FullName_){
    console.log()
}


// 例子
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

function ajax(config:Config){
    var xhr = new XMLHttpRequest();
    xhr.open(config.type,config.url,true);
    xhr.send(config.data);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            if(config.dataType == 'json'){
                console.log('success',JSON.parse(xhr.responseText))
            }else{
                console.log('success',xhr.responseText)
            }
            
        }
    }
}

ajax({
    type:'get',
    url:'http://www.baidu.com',
    data:'',
    dataType:'json'
})




//  2.函数类型接口

//  3、