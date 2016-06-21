
export default class{

  static add(value1, value2){
    return value1 + value2
  }

  static groupBy(records, separators){

    separators = this.arrayWrap(separators)

    let groups = {}
    let separator = separators[0]

    records.forEach((record) => {
      let key = this.recordKey(record, separator)

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

  static recordKey(record, separator){
    if(this.isFunction(separator)){
      return separator(record)
    }else if(this.isObject(record)){
      return record[separator]
    }
    return record
  }

  static arrayWrap(value){
    if(!this.isArray(value)){
      return [value]
    }
    return value
  }

  static isFunction(value){
    return typeof value === 'function'
  }

  static isObject(value){
    return typeof value === 'object'
  }

  static isArray(value){
    return Array.isArray(value)
  }

}
