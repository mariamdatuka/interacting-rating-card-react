
function SubmitHandler({items, setSubmit}) {
    

    return ( 
        <div className='main-container page'>
        <img className='img'src='/images/illustration-thank-you.svg'></img>
        <div className='show-choice'>
            You selected {items} out of 5
        </div>
        <h2>Thank You !</h2>
        <div className='text text-2'>
            We appreciate you taking the time to give a rating. <br></br>If you ever need more support, don't hesitate to <br></br> get in touch!
        </div>
        <button  onClick={()=>setSubmit(false)} className='submit'>Rate Again</button>
        </div>
     );
}

export default SubmitHandler;