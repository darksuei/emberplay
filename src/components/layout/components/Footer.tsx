import { APP_NAME } from "../../../utils/constants";

export const Footer = () => {
  return (
    <footer className='fixed w-full bottom-0 p-10 border border-top flex flex-col items-center gap-3'>
      <p>
        &copy; 2024 <span className='pacifico-regular text-lg'>{APP_NAME}</span>
      </p>
      <div className='flex flex-row gap-5'>
        <p className='underline text-gray-500 cursor-pointer'>Privacy Policy</p>
        <p className='underline text-gray-500 cursor-pointer'>Terms of Service</p>
      </div>
    </footer>
  );
};
