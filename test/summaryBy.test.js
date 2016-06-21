import assert from 'assert'

import Summary from '../src/index.js'


describe('summaryBy', function(){

  describe('object', function(){

    let records = [
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

    it('string separator', function(){
      let expect = {
        'male': {
          $count: 3,
          $data: [
            records[0],
            records[1],
            records[3],
          ],
        },
        'female': {
          $count: 2,
          $data: [
            records[2],
            records[4],
          ],
        },
      }

      assert.deepEqual(Summary.summaryBy(records, 'sex'), expect)
    })

  })

})
