import{ useState } from 'react'; 
import { useEffect } from 'react';

function Loading() {
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(() => {
        new Promise(resolve =>
            setTimeout(() =>resolve(),3000)).then(
                ()=> setIsLoading(false)
            )
},[setIsLoading]);

return (
<div className="load">
    {isLoading ?<div className="load_text">Loading....</div>:
    <div><h1 className='form-success'>We have received your request!</h1>
    <h1 className='form-success'>Thank you!</h1></div>}
</div>
    );
}

export default Loading;
