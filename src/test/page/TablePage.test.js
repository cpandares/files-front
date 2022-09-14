import {  render } from '@testing-library/react';
import { MemoryRouter }   from 'react-router-dom';
import TablePage from '../../pages/TablePage';

const data = [
    "test1.csv",
    "test2.csv",
    "test3.csv",
    "test4.csv",
    "test5.csv",
    "test6.csv",
    "test9.csv"
]

describe("Pruebas en el <TablePage />", ()=>{

   test("Debe mostar el componente con los valores por defecto", ()=>{
    const  { container } = render(
        <MemoryRouter>
            <TablePage data={data}/>
        </MemoryRouter>
    )

    expect( container ).toMatchSnapshot()
   })
})