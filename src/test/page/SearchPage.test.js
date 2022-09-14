
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter }   from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';



const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockedUseNavigate

}) );

describe("Pruebas en el <SearchPage />", ()=>{

    beforeEach(()=> jest.clearAllMocks())

    test("Debe de llar el navigate a la nueva pantalla", ()=>{

        render(
            <MemoryRouter initialEntries={['/search?q=test3.csv']}>
                <SearchPage />
            </MemoryRouter>
        );


        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('test3.csv');

        

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( mockedUseNavigate ).toBeCalledWith('?q=test3.csv');

    
    });
    
    test("Debe de mostar el componente con valores por defecto",()=>{

        const { container } =  render(
               <MemoryRouter>
                   <SearchPage />
               </MemoryRouter>
           );
   
           expect( container ).toMatchSnapshot()
   
   
    })


    test("Debe Ocultar el ' Search a File' si el input contiene un texto", ()=>{

        render(
            <MemoryRouter initialEntries={['/search?q=test3.csv']}>
                <SearchPage />
            </MemoryRouter>
        );


        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('test3.csv');

        

        const div = screen.getByLabelText('alert-primary');
        expect(div.style.display).toBe('none');

    
    });

   

    test("Debe mostrar un error si no encuentra el file", ()=>{

        render(
            <MemoryRouter initialEntries={['/search?q=test7.csv']}>
                <SearchPage />
            </MemoryRouter>

        )

        const div = screen.getByLabelText('no-results');
        expect(div).toBeVisible("<td aria-label='no-results' colspan='4'>No Results</td>")

    })


})