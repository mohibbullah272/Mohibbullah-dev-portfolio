import icon1 from '../assets/icons8-html.svg'
import CountUp from 'react-countup';
const MySkillCard = () => {
    return (
        <div className='grid md:grid-cols-4  grid-cols-1'>
            <div className='bg-[#323232] flex  w-44 rounded-full px-5 py-20 flex-col items-center justify-center space-x-2'>
                <img className='w-16' src={icon1} alt="" />
                <p>HTML 5</p>
        <h6> <CountUp start={0} end={90} duration={5} decimals={0} suffix="%" /></h6>
            </div>
        </div>
    );
};

export default MySkillCard;