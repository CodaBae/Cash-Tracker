
const book = {
    name: 'book',
    author: 'unknown',
    pubisher:{
        name: undefined
    }
}

const {name : newNameP = 'self pubished'} = book.pubisher

console.log(newNameP)

const arr= ['coffee','23','245','342'];
const [drink,sDAmount,mDAmount,bDAmount] = arr

console.log(`${drink} ${mDAmount}`)

