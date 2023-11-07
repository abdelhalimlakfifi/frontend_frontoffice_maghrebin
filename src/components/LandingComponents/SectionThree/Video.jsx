import Zelija from '../../../assets/LandingPage/Zelija.svg';


const Video = () => {
  return (
    <section className="mt-20 w-full border border-black flex justify-center items-center h-[550px]">
      <h1 className=""> Your video content</h1>
      <img
        src={Zelija}
        style={{
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '2668px',
          left: '180px',
        }}
      />
    </section>
  );
};

export default Video;

// className="w-48 h-48 absolute top-[1430px] left-0"
