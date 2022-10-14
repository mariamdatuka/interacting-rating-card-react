function Rates({number, setItems}) {
    return ( 
       <button onClick={()=>setItems(number)}className='rate'>{number}</button>
     );
}

export default Rates;