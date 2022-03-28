
import  {filterG, sortData} from '../src/data.js'
import  {filterSport} from '../src/data.js'
import  {filterPais} from '../src/data.js'
import  {filterMedals} from '../src/data.js'

describe ('sortData' , () => {
    const data = [
        {
            name: 'F'
        },
        {
            name: 'A'
        },
        {
            name: 'I'
        }
    ]
  it('A-Z',() => {
    const result = sortData(data, 'A-Z');
    expect(result).toEqual([
        { name: 'A' },
        { name: 'F' },
        { name: 'I' },
    ])
  }) 
  it('Z-A',() => {
    const result = sortData(data, 'Z-A');
    expect(result).toEqual([
        { name: 'I' },
        { name: 'F' },
        { name: 'A' },
    ])
  })
})
describe ('filterSport' , () => {
    const data2 = [
        {
            sport: 'Rowing'
        },
        {
            sport: 'Taekwondo'
        },
        {
            sport: 'Handball'
    
        }
    ]
  it('Rowing',() => {

    const result = filterSport(data2, 'Rowing');
    expect(result).toEqual([
        {
            sport: 'Rowing'
        },
           ])
  }
  )
  }
  )
  describe ('filterPais' , () => {
    const data3 = [
        {
            team: 'France'
        },
        {
            team: 'Russia'
        },
        {
            team: 'Australia'
        },
        {
            team: 'Jordan'
        },
    ]
  it('Australia',() => {

    const result = filterPais(data3, 'Australia');
    expect(result).toEqual([
        {
            team: 'Australia'
        },
           ])
  }
  )
  }
  )
  describe ('filterMedals' , () => {
    const data4 = [
        {
            medal: 'Gold'
        },
        {
            medal: 'Silver'
        },
        {
            medal: 'Bronze'
        }
    ]
  it('Bronze',() => {

    const result = filterMedals(data4, 'Bronze');
    expect(result).toEqual([
        {
            medal: 'Bronze'
        }
           ])
  }  )  }  )

  describe ('filterG' , () => {
    const data5 = [
        {
            age: 23,
            gender: 'F'
        },
        {
            age: 25,
            gender: 'F'
        },
        {
            age: 26,
            gender: 'M'
        }
    ]
  it('F',() => {

    const result = filterG(data5, 'F');
    expect(result).toEqual([
        {
            age: 23,
            gender: 'F'
        },
        {
            age: 25,
            gender: 'F'
        }
           ])
  }
  )
  }
  )