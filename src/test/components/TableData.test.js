

import {  render, screen } from '@testing-library/react';

import TableData from '../../components/TableData';



describe("Pruebas en en el <TableData />", ()=>{

    test("Debe mostar los files si existe", ()=>{
        
        const file = 'test9.csv';

       render(
            <TableData file={ file } />          
        )

      
        /* const div = screen.getByLabelText('title');
        expect(div).toBeVisible("<td aria-label='title'>test3.csv</td>") */
    })
    

    test("Debe mostar 'No Results' si no encuentra el file", ()=>{

        const file = 'test7.csv';

       render(
            <TableData file={ file } />          
        )

    
        
      const div = screen.getByLabelText('no-results');
      expect(div).toBeVisible("<td aria-label='no-results' colspan='4'>No Results</td>")

    });

   


})