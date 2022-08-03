let a = 25
let b = 10

function asyncLogger(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(b > a){
                resolve('nagyobb a B')
            }else{
                reject('nem nagyobb')
            }
        }, 1000)
    })
}

// asyncLogger()
//     .then(str => console.log(str))//siker
//     .catch(err => console.log(err))//sikertelen
//     .finally(() => console.log('lefutott'))//lefutott

async function handleAsyncCall() {
    try {
        console.log('promise elött')
        const message = await asyncLogger()
        console.log(message)
    
        console.log('promise után')
        
    } catch (error) {
        console.log(error)
    }
}
handleAsyncCall()