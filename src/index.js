
export default class{

  static add(value1, value2){
    return value1 + value2
  }

  static groupBy(records, separators){

    if(!Array.isArray(separators)){
      separators = [separators]
    }

    let groups = {}
    let separator = separators[0]

    records.forEach((record) => {
      let key
      if(typeof separator === 'function'){
        key = separator(record)
      }else{
        key = record[separator]
      }

      if(!groups[key]){
        groups[key] = []
      }
      groups[key].push(record)
    })

    if(separators.length === 1){
      return groups
    }

    separators.shift()
    Object.keys(groups).forEach((key) => {
      groups[key] = this.groupBy(groups[key], separators)
    })
    return groups
  }

}
