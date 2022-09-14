

const url = 'http://127.0.0.1:4000/api';

export const getData = async()=>{
    

    const resp = await fetch(url + '/files');
    const { data } = await resp.json();

 
   return data.files

}

export const getFile = async(name)=>{

    const resp = await fetch( url + `/files/${name}` );
    const body = await resp.json();   
      
    return body
    

}