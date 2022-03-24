
import  {sortData} from '../src/data.js'

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
  }) ;
  it('Z-A',() => {
    const result = sortData(data, 'Z-A');
    expect(result).toEqual([
        { name: 'I' },
        { name: 'F' },
        { name: 'A' },
    ])
  })
})

