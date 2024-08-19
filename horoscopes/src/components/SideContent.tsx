import CheckMonthlyHoroscope from './CheckMonthlyHoroscope';
import CheckCompatibility from './CheckCompatibility';
import CoffeeReading from './CoffeeReading';
import ViewHoroscope from './ViewHoroscope';


const SideContent = () => {
  return (
    <div className='mycontainer'>
      <CheckCompatibility />
      <CheckMonthlyHoroscope />
      <ViewHoroscope />
      <CoffeeReading />
    </div>
  );
}

export default SideContent
