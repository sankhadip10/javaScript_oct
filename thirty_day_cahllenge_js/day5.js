function getFileExtension(fileName){
    if(fileName.lastIndexOf('.')!=-1 && fileName.lastIndexOf('.')!==0){
        return fileName.split('.').pop()
    }
    return ''
}

console.log(getFileExtension("scaler.com"))
console.log(getFileExtension("scaler.pdf"))
console.log(getFileExtension("scaler.pft"))