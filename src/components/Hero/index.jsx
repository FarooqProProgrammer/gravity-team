import React from 'react'
import { Description } from '../../ui/Text'
import { Button } from '../../ui/Button'




const Hero = () => {
    return (
        <div className='container mx-auto'>
            <div className='d-flex flex-column py-5  justify-content-center align-items-center gap-3'>
                <h3 className='display-4 text-white'>Balancing</h3>
                <h3 className='display-4 text-white'>Crypto Markets</h3>
               <Description> Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.</Description>
               <Button>GET IN TOUCH</Button>
            </div>
        </div>
    )
}

export default Hero
