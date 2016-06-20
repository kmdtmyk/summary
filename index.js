// import _ from 'lodash'

export default class {

  static add(value1, value2){
    return value1 + value2
  }

  static groupBy(records, ...names){

    let groups = {}
    records.forEach((record) => {
      let name = names[0]
      let key = record[name]
      if(!groups[key]){
        groups[key] = []
      }
      groups[key].push(record)
    })

    if(names.length === 1){
      return groups
    }

    names.shift()
    Object.keys(groups).forEach((key) => {
      groups[key] = this.groupBy(groups[key], ...names)
    })
    return groups
  }

}
