import assert from 'assert'

import Summary from '../index.js'

describe('Summary', function(){

  var records = [
    {
      id: 1,
      name: 'name1',
      sex: 'male',
      group: 'A',
      age: 25,
    },
    {
      id: 2,
      name: 'name2',
      sex: 'male',
      group: 'B',
      age: 30,
    },
    {
      id: 3,
      name: 'name3',
      sex: 'female',
      group: 'A',
      age: 28,
    },
    {
      id: 4,
      name: 'name4',
      sex: 'male',
      group: 'B',
      age: 31,
    },
    {
      id: 5,
      name: 'name5',
      sex: 'female',
      group: 'A',
      age: 19,
    },
  ]

  it('add', function(){
    assert.equal(Summary.add(1, 1), 2)
  })

  describe('groupBy', function(){

    it('one argument', function(){
      let expect = {
        'male': [
          records[0],
          records[1],
          records[3],
        ],
        'female': [
          records[2],
          records[4],
        ],
      }

      assert.deepEqual(Summary.groupBy(records, 'sex'), expect)
    })

    it('two arguments', function(){
      let expect = {
        'A': {
          'male': [
            records[0],
          ],
          'female': [
            records[2],
            records[4],
          ],
        },
        'B': {
          'male': [
            records[1],
            records[3],
          ],
        },
      }

      assert.deepEqual(Summary.groupBy(records, 'group', 'sex'), expect)
    })

    it('function argument', function(){
      let expect = {
        '10': [
          records[4],
        ],
        '20': [
          records[0],
          records[2],
        ],
        '30': [
          records[1],
          records[3],
        ],
      }
      var func = function(record){
        return Math.floor(record.age / 10) * 10
      }

      assert.deepEqual(Summary.groupBy(records, func), expect)
    })

  })



})
