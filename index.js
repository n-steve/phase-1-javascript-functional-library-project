

function myEach(collection, callback){

    let inputType = Object.prototype.toString.call(collection);
  
    if(inputType === '[object Array]')
    {
      
        for (const iterator of collection) {

            callback(iterator);
        }
    }
    else  if(inputType === '[object Object]')
    {
        for (const key in collection) 
        {
            if (Object.hasOwnProperty.call(collection, key)) 
            {
                const element = collection[key]; 
                callback(element);
            }
        }
    }

    return collection;


}


function myMap(collection,callback){
let array = [];
    if(Object.prototype.toString.call(collection) === '[object Array]') 
    {
        for(const element of collection)
        {
            array.push(callback(element))
        }
    }
    else if (Object.prototype.toString.call(collection) === '[object Object]')  
    {
        let result = Object.values(collection)
        for(const values of result)
        {
            array.push(callback(values))
        }
    }
    return array;
}


function myReduce(collection,callback,acc=0){
 
 let initialValue = acc
    if(Object.prototype.toString.call(collection)==='[object Array]')
    {
    let counter = 0
        if(acc === 0)
        { 
            counter = 1
            initialValue = collection[0]
        }
        for(counter; counter < collection.length; counter++)
        {
          initialValue = callback(initialValue,collection[counter], collection)
        }
       
    }
    else if(Object.prototype.toString.call(collection) ==='[object Object]')
    {
    let counter = 0
    let array = Object.values(collection)
        if(acc === 0)
        {
            counter = 1
           initialValue = array[0]

         
        }
        for(counter; counter < array.length; counter++)
        {

        initialValue = callback(initialValue,array[counter],array)

        }
    }

return initialValue

}


function myFirst(array,int=0){
    if(int===0)
    {
        return array[0]
    }
    return array.slice(0,int)

    
}


function myFind(collection,predicate){
    for(const values of collection)
    {
        if(predicate(values))
        {
            return values;
        }
    }
    return undefined
}


function myFilter(collection,predicate){
let array = [];
    if(Object.prototype.toString.call(collection) === '[object Array]')
    {
    for(const values of collection)
    {
        if(predicate(values))
        {
            array.push(values)
        }
    }      
    
    }
    else
    {
        const result = Object.values(collection)
        for(const values of result)
        {
            if(predicate(values))
            {
            array.push(values)    
            }
        }
        
    }
return array;
}






function mySize(collection){
    if(Object.prototype.toString.call(collection) ==='[object Array]')
    {

        return parseInt(collection.length)
    }
   return Object.values(collection).length
}


function myLast(array, int=0){
    if(int===0){
        return array[array.length-1]
    }
    return array.slice(-int)
}


function myKeys(cheese){
    return Object.keys(cheese)
}


function myValues(cheese){
    return Object.values(cheese)
}