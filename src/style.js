
const styles = {
  boxWidth :  'xl:max-w-[1280px] w-full',

  heading2 : 'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full',
  paragrah : 'font-poppins font-normal text-dimWhite text-[18px] leading-[30px]',

  flexCenter : 'flex justify-center items-center',
  flexStart : 'flex justify-center items-start',

  paddingX : 'px-6 sm:px-16',
  paddingY : 'py-6 sm:py-16',

  marginX : 'mx-6 sm:mx-16',
  marginY : 'my-6 sm:my-16'
};

export const layout = {
  section : `flex md:flex-row flex-col ${styles.paddingY}`,

  // to take care content going above image not the other way around
  sectionReverse: `flex flex-col-reverse md:flex-row ${styles.paddingY}`,

  // gives margin to left
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  // gives margin to right
  sectionImgReverse : `flex-1 ${styles.flexStart} flex-col`

};

export default styles;