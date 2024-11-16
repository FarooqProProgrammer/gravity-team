import React from 'react'
import { Description } from '../../ui/Text'

const CrypoMarketing = () => {
    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3 className='display-4 text-white'>About Gravity Team</h3>
                <Description maxWidth="90%" maxWidthDesktop="40%">
                    At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.
                </Description>
            </div>
        </div>
    )
}

export default CrypoMarketing
