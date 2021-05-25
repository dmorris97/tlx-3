import React from 'react'
import Zoom from 'react-reveal/Zoom';


function HomeForm() {
    return (
        <div className='hf-container'>
            <Zoom>
            <iframe 
                src="https://forms.monday.com/forms/embed/e5318f78fb492258bb1bfd028f471f83?r=use1" 
                className="HF-form-style">
            </iframe>
            </Zoom>
        </div>
    )
}

export default HomeForm



