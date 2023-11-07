import BtnShopNow from './BtnShopNow';

const SectionPub = () => {
  return (
    <>
      <div className="flex flex-grow h-[620px] w-full">
        <div className="w-1/2 border-[2px] border-[#2B2B2B] flex flex-col justify-center items-center font-medium ">
          <BtnShopNow text="SHOP NOW" showIcon={true} />
        </div>
        <div className="w-1/2 border-[2px] border-[#2B2B2B] flex flex-col justify-center items-center border-l-0">
          <BtnShopNow />
        </div>
      </div>
    </>
  );
};

export default SectionPub;
