import Arrow from '../../public/images/icon-arrow.svg'

export default function Submit() {
    return (
        <div className='submit-container'>
            <hr className='hr' />
            <div className='arrow-container'>
                <img src={Arrow} alt="arrow" className='arrow'/>
            </div>
        </div>
    )
}