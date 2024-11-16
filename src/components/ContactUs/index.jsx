import React from 'react'
import { Description } from '../../ui/Text'
import { Button } from '../../ui/Button'
import "./index.css"

const ContactUs = () => {
    return (
        <div className='position-relative contact--bg'>
            <div className='container mx-auto '>
                <div className='d-flex flex-column py-5  justify-content-center align-items-center gap-3'>
                    <h3 className='display-4 text-white'>Contact Us</h3>
                    <Description maxWidthDesktop={'40%'}>We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</Description>
                    <Button>GET IN TOUCH</Button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
