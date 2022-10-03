import { useEffect, useState } from "react"
import Cookies from 'universal-cookie';
import Image from 'next/image'
import Flower1 from '../public/assets/Flower1.png'
import Female from '../public/assets/Female.png'
import Male from '../public/assets/Male.png'
// import Couple1 from '../public/assets/Couple1.png'
import BgMobile1 from '../public/assets/BgMobile1.png'
import BgMobile2 from '../public/assets/BgMobile2.png'
// import Bg1 from '../public/assets/Bg1.png'
// import Bg2 from '../public/assets/Bg2.png'
import Countdown from "react-countdown"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head"
import { axiosGet, axiosPost } from "../libs/useAxios"
import { useRouter } from "next/router";

export default function Home() {
  const date = new Date("10/22/2022 08:00:00"); // some mock date
  const milliseconds = date.getTime();
  const counting = [
    {
      id: 1,
      name: 'days',
      title: 'D'
    },
    {
      id: 2,
      name: 'hours',
      title: 'H'
    },
    {
      id: 3,
      name: 'minutes',
      title: 'M'
    },
    {
      id: 4,
      name: 'seconds',
      title: 'S'
    }
  ]

  const useAudio = () => {
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      var audio = document.getElementById('audioId');
      playing ? audio.play() : audio.pause();
    },
      [playing]
    );

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio();
  const [cover, setCover] = useState(true)
  const [loading, setLoading] = useState(true)

  const handleCover = () => {
    setCover(false)
    toggle()

    let title = document.querySelector(".title");
    let female = document.querySelector(".female");
    let male = document.querySelector(".male");
    let date = document.querySelector(".date");
    title.classList.remove('aos-animate')
    female.classList.remove('aos-animate')
    male.classList.remove('aos-animate')
    date.classList.remove('aos-animate')
    setTimeout(() => {
      title.classList.add('aos-animate')
      female.classList.add('aos-animate')
      male.classList.add('aos-animate')
      date.classList.add('aos-animate')
    }, 500);
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 2000,
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      easing: 'ease',
    });
    AOS.refreshHard();
  }, [])

  const renderer = (formated) => {
    return (
      <div
        className=" flex text-3xl space-x-12 mt-5 font-cormorant"
        data-aos="zoom-in"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        {counting?.map((row) => (
          <div key={row.id} className=" flex flex-col items-center space-y-3">
            <span className=" text-4xl">{formated[row.name]}</span>
            <span className=" capitalize text-base">{row.name}</span>
          </div>
        ))}
      </div>
    )
  }

  const cookies = new Cookies();
  const [state, setState] = useState({
    cookie: cookies.get('confirm'),
    data: [],
    nama: '',
    ucapan: '',
    kehadiran: '',
    hadir0: '',
    hadir1: '',
    hadir2: '',
  })

  useEffect(() => {
    state.cookie === undefined && handleCookies('0')
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cookie])

  const getData = () => {
    axiosGet(
      `api/expression`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
      },
      success => {
        // console.log(success)
        var confirm0 = success.data.Data.filter(function (row) {
          return row.confirm === "0";
        });
        var confirm1 = success.data.Data.filter(function (row) {
          return row.confirm === "1";
        });
        var confirm2 = success.data.Data.filter(function (row) {
          return row.confirm === "2";
        });
        // console.log(confirm1.length, confirm2.length, confirm0.length);
        setState(prevState => {
          return {
            ...prevState,
            data: success.data.Data,
            hadir0: confirm0,
            hadir1: confirm1,
            hadir2: confirm2,
          }
        })
      },
      error => {
        console.log(error);
      }
    )
  }

  const handleCookies = (value) => {
    cookies.set('confirm', JSON.stringify(value), { path: '/' });
    setState(prevState => {
      return {
        ...prevState,
        cookie: value,
      }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = () => {
    if (state.nama === '') {
      alert('Silahkan isi nama lengkap')
      return false
    }
    if (state.ucapan === '') {
      alert('Silahkan isi do`a dan ucapan anda')
      return false
    }
    if (state.kehadiran === '') {
      alert('Silahkan pilih kehadiran')
      return false
    }

    const params = {
      name: state.nama,
      message: state.ucapan,
      confirm: state.kehadiran,
      date: '2022-10-22',
    }

    addData(params)
    document.getElementById("formAdd").reset();
  }

  const addData = (params) => {
    axiosPost(
      `api/expression`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
      },
      params,
      success => {
        console.log(success)
        setState(prevState => {
          return {
            ...prevState,
            nama: '',
            ucapan: '',
            kehadiran: '',
          }
        })
        handleCookies('1')
      },
      error => {
        console.log(error)
      }
    )
  }

  // var baseUrl = ''
  // if (typeof window != 'undefined') {
  //   baseUrl = window.location.href
  //   // console.log("Client side");
  // }
  // console.log(baseUrl);

  // const router = useRouter()
  // console.log({ router });

  return (
    <>
      <Head>
        <title>Nadia ❤️ Dyan | @Niqahin</title>
        <link rel="icon" href='/favicon.png' />
        <meta name="description" content="Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri.." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <link rel="canonical" href="https://nadiadyan.vercel.app/" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nadia ❤️ Dyan | @Niqahin" />
        <meta property="og:description" content="Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri.." />
        <meta property="og:url" content="https://nadiadyan.vercel.app/" />
        <meta property="og:site_name" content="nadiadyan.vercel.app" />
        <meta property="article:section" content="WEDDING" />
        <meta property="og:updated_time" content="2022-09-26T00:09:54+00:00" />
        <meta property="og:image" content='https://nadiadyan.vercel.app/assets/Couple1.png' />
        <meta property="og:image:secure_url" content='https://nadiadyan.vercel.app/assets/Couple1.png' />
        <meta property="og:image:width" content="650" />
        <meta property="og:image:height" content="850" />
        <meta property="og:image:alt" content="Nadia ❤️ Dyan" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="article:published_time" content="2022-09-20T06:59:52+00:00" />
        <meta property="article:modified_time" content="2022-09-26T00:09:54+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nadia ❤️ Dyan | @Niqahin" />
        <meta name="twitter:description" content="Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri.." />
        <meta name="twitter:image" content='https://nadiadyan.vercel.app/assets/Couple1.png' />
      </Head>

      <audio id="audioId" className=" hidden" controls src="/Nikah.mp3" autoplay>
        Your browser does not support the
        <code>audio</code> element.
      </audio>

      <div className='fixed bottom-12 right-8 flex z-10'>
        <button onClick={toggle}>
          {playing ? (
            <svg className="w-6 h-6 text-[#84A0BC]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" /></svg>
          ) : (
            <svg className="w-6 h-6 text-[#BBAFC7]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          )}
        </button>
      </div>

      <section className={` flex justify-center min-h-screen w-full fixed z-10 transition-all duration-1000 ${cover ? 'top-0' : '-top-[150%]'} `} >
        <div className={`cover min-h-screen bg-no-repeat bg-cover bg-center w-full absolute `} />
        <div className={` bg-black opacity-50 min-h-screen w-full absolute `} />
        <div className=" justify-center space-y-80 md:space-y-0 items-center flex flex-col z-20 md:mt-0">
          <div className=" text-center">
            <div className=" font-italiana text-8xl text-[#84A0BC] mt-5 text-center ">Nadia & Dyan</div>
          </div>
          <div className=" text-center">
            <div className=" font-cormorant text-xl text-white italic mt-5">Kepada YTH.</div>
            <div className=" font-cormorant text-3xl text-white">Tamu Undangan</div>
            <button onClick={() => handleCover()} className=" p-2 px-5 text-sm bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 focus:outline-none">
              Buka Undangan
            </button>
          </div>
        </div>
      </section>

      <section className="  bg-no-repeat bg-cover bg-center w-full" style={{ backgroundImage: `url('../assets/Bg1.png')` }}>
        <div className=" justify-center items-center flex flex-col min-h-screen">
          <div className=" font-italiana md:text-2xl font-bold title" data-aos="fade-up" data-aos-duration="500">The Wedding Of</div>
          <div className=" font-italiana text-7xl md:text-8xl text-[#84A0BC] mt-5 female" data-aos="fade-left" data-aos-duration="500">Nadia &</div>
          <div className=" font-italiana text-7xl md:text-8xl text-[#84A0BC] male" data-aos="fade-right" data-aos-duration="500">Dyan</div>
          <div className=" font-italiana md:text-2xl font-bold mt-5 date" data-aos="fade-down" data-aos-duration="500">Sabtu, 22 OKtober 2022</div>
        </div>
      </section>

      <section className=" bg-[#F2F7FB] w-full items-center justify-center flex p-4 py-16">
        <div className=" max-w-5xl w-full">
          <div className=" flex flex-col space-y-12 md:flex-row md:justify-between">
            <div className=" md:w-1/2 justify-center flex flex-col" data-aos="fade-up">
              <p className=" text-center italic font-cormorant" >
                Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia<br />
                menciptakan pasangan-pasangan untukmu dari jenismu<br />
                sendiri, agar kamu cenderung dan merasa tenteram<br />
                kepadanya, dan Dia menjadikan di antaramu rasa kasih dan<br />
                sayang. Sungguh, pada yang demikian itu benar-benar<br />
                terdapat tanda-tanda (kebesaran Allah)<br />
                bagi kaum yang berpikir.
              </p>
              <p className=" mt-5 text-xl font-bold text-center italic font-cormorant">Ar-Rum Ayat 21</p>
            </div>
            <div className=" md:w-1/2 justify-center flex" data-aos="fade-down">
              <Image src={Flower1} alt="Flower 1" width={305} height={245} />
            </div>
          </div>

          <div className=" flex flex-col justify-center mt-20 ">
            <p className=" text-center font-cormorant font-bold text-xl leading-tight" data-aos="fade-right">Assalamualaikum Warahmatullahi Wabarakatuh</p>
            <p className=" text-center font-cormorant mt-5" data-aos="fade-left">
              Dengan memohon Rahmat serta Ridho Allah SWT, <br />kami bermaksud untuk menyelenggarakan acara Pernikahan Putri dan Putra kami.<br />
            </p>
          </div>

          <div className=" flex flex-col md:flex-row md:justify-between mt-12">
            <div className=" md:w-1/2 flex justify-center items-center">
              <div className=" h-56 w-56 flex justify-center items-center rounded-full shadow-2xl bg-gradient-to-tr from-[#84A0BC] to-[#BBAFC7]" data-aos="flip-right">
                <Image className=" rounded-full object-cover" src={Female} alt="Female" width={200} height={200} />
              </div>
            </div>
            <div className=" md:w-1/2 flex flex-col justify-center text-center"
              data-aos="fade-up"
            // data-aos-offset="500"
            // data-aos-duration="500"
            >
              <div className=" font-qwitcher-grypen text-8xl">Nadia</div>
              <div className=" font-cormorant text-5xl">Nadia Ramadhianti</div>
              <div className=" font-medium">Putri Dari</div>
              <div>Bapak Taryono W & Ibu Utiek Agriani</div>
              {/* <div className=" flex justify-center">
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <span>@nadia</span>
                </a>
              </div> */}
            </div>
          </div>

          <div className=" flex flex-col-reverse md:flex-row justify-between mt-20">
            <div className=" md:w-1/2 flex flex-col justify-center text-center"
              data-aos="fade-down"
            // data-aos-offset="500"
            // data-aos-duration="500"
            >
              <div className=" font-qwitcher-grypen text-8xl">Dyan</div>
              <div className=" font-cormorant text-5xl">Dyan Taufiqurrahman</div>
              <div className=" font-medium">Putra Dari</div>
              <div>Bapak Efnedy Arief & Ibu Gusnety Zam</div>
              {/* <div className=" flex justify-center">
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <span>@dyan</span>
                </a>
              </div> */}
            </div>
            <div className=" md:w-1/2 flex justify-center items-center">
              <div className=" h-56 w-56 flex justify-center items-center rounded-full shadow-2xl bg-gradient-to-tr from-[#84A0BC] to-[#BBAFC7]" data-aos="flip-left">
                <Image className=" rounded-full object-cover" src={Male} alt="Female" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className=" justify-center items-center flex flex-col bg-no-repeat bg-cover bg-center w-full p-4 py-16" style={{ backgroundImage: `url('../assets/Bg3.png')` }}>
        <div className=" font-italiana text-5xl text-[#84A0BC]"
          data-aos="fade-up"
          data-aos-offset="500"
          data-aos-duration="500">Save The Date</div>
        {!loading && <Countdown date={milliseconds} renderer={renderer} />}
        <div className=" mt-8 text-center font-cormorant text-xl leading-tight"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          Bersamaan dengan ini, kami bermaksud mengundang<br />
          Bapak/Ibu/Saudara/i ke acara pernikahan kami.<br />
          Acara tersebut akan dilaksanakan pada<br />
        </div>

        <div className=" flex mt-8 flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-3">
          <div className=" w-[25rem] h-[35rem] relative flex rounded-t-full rounded-xl border border-[#BBAFC7] shadow-2xl" data-aos="flip-right">
            <Image className=" w-full object-cover  rounded-t-full rounded-xl" src={BgMobile1} alt="Bg Mobile 1" width={400} height={866} />
            <div className=" absolute flex flex-col justify-center inset-0 text-center mt-12">
              <div className=" font-qwitcher-grypen text-7xl">Akad Nikah</div>
              <div className=" font-italiana text-4xl font-bold">22/10/2022</div>
              <div className="">JAM : 08.00 S/D 09.00 WIB</div>
              <div className=" mt-4 font-bold uppercase">Menara 165</div>
              <div className=" uppercase">JL. TB Simatupang,<br />
                Kav. I Jakarta Selatan<br />
              </div>
              <div className=" flex justify-center">
                <a href="https://goo.gl/maps/ybaaSWsj3UNosw637" target="_blank" rel="noreferrer" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-[25rem] h-[35rem] relative flex rounded-t-full rounded-xl border border-[#BBAFC7] shadow-2xl" data-aos="flip-left">
            <Image className=" w-full object-cover  rounded-t-full rounded-xl" src={BgMobile2} alt="Bg Mobile 2" width={400} height={866} />
            <div className=" absolute flex flex-col justify-center inset-0 text-center mt-12">
              <div className=" font-qwitcher-grypen text-7xl">Resepsi Nikah</div>
              <div className=" font-italiana text-4xl font-bold">22/10/2022</div>
              <div className="">JAM : 11.00 S/D 13.00 WIB</div>
              <div className=" mt-4 font-bold uppercase">Menara 165</div>
              <div className=" uppercase">JL. TB Simatupang,<br />
                Kav. I Jakarta Selatan<br />
              </div>
              <div className=" flex justify-center">
                <a href="https://goo.gl/maps/ybaaSWsj3UNosw637" target="_blank" rel="noreferrer" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" min-h-screen text-center flex flex-col items-center bg-[#FEFEFE] p-4 py-16">
        <div className=" font-italiana text-5xl text-[#84A0BC]" data-aos="fade-up-left">Say Something</div>
        <p className=" font-cormorant mt-5 " data-aos="fade-down-left">Berikan Do`a dan Ucapan terbaik anda untuk kedua mempelai.</p>
        {!loading && (
          <form id="formAdd" className=" flex flex-col mt-5 w-5/6 md:w-2/5 space-y-5">
            <input
              className=" bg-gray-200  py-4 px-4 rounded focus:outline-none"
              type="input"
              name="nama"
              placeholder="Nama lengkap"
              value={state.nama}
              onChange={(e) => handleChange(e)}
              disabled={state.cookie === '0' ? false : true}
              required
            />
            <textarea
              className=" bg-gray-200 py-4 px-4 rounded focus:outline-none"
              name="ucapan"
              rows="6"
              placeholder="Do`a dan ucapan anda .."
              value={state.ucapan}
              defaultValue={state.ucapan}
              onChange={(e) => handleChange(e)}
              disabled={state.cookie === '0' ? false : true}
              required
            />
            {/* {state.ucapan}
          </textarea> */}
            <select
              className=" bg-gray-200  py-4 px-4 rounded focus:outline-none"
              name="kehadiran"
              defaultValue={'DEFAULT'}
              onChange={(e) => handleChange(e)}
              disabled={state.cookie === '0' ? false : true}
              required
            >
              <option value="DEFAULT" disabled={true} selected={true}>Konfirmasi kehadiran</option>
              <option value={1}>Hadir 1 Orang</option>
              <option value={2}>Hadir 2 Orang</option>
              <option value={0}>Tidak Hadir</option>
            </select>
            {state.cookie === '0' ? (
              <button
                type="button"
                className=" py-2 bg-gradient-to-r from-[#84A0BC] to-[#BBAFC7] text-white text-base xxl:text-lg font-medium rounded hover:shadow-lg"
                onClick={() => handleSubmit()}
              >
                Kirimkan Ucapan
              </button>
            ) : (
              <div className=' py-2 bg-gradient-to-r from-[#84A0BC] to-[#BBAFC7] text-white text-base xxl:text-lg font-medium rounded-full'>Terima kasih atas Do&apos;a dan Ucapan anda</div>
            )}
          </form>
        )}
        <div className=" flex mt-12 space-x-12">
          <div className=" flex flex-col">
            <label className=" text-xl xxl:text-2xl font-medium text-gray-600">{state.data.length}</label>
            <label className=" text-sm xxl:text-xl text-gray-400">Ucapan</label>
          </div>
          <div className=" flex flex-col">
            <label className=" text-xl xxl:text-2xl font-medium text-gray-600">{state.hadir1.length + state.hadir2.length}</label>
            <label className=" text-sm xxl:text-xl text-gray-400">Hadir</label>
          </div>
          <div className=" flex flex-col">
            <label className=" text-xl xxl:text-2xl font-medium text-gray-600">{state.hadir0.length}</label>
            <label className=" text-sm xxl:text-xl text-gray-400">Tidak Hadir</label>
          </div></div><div className=" mt-6 w-full px-4 lg:px-0 lg:w-5/12">
        </div>
        <div className=" flex flex-col space-y-4 w-5/6 md:w-2/5 rounded-lg border border-[#84A0BC] p-4 mt-8 overflow-auto h-96">
          {state?.data?.map(row => (
            <div key={row.id} className=" flex space-x-4">
              <div className=" w-1/12">
                <div className=" w-10 h-10 bg-gray-100 text-[#BBAFC7] border border-[#BBAFC7] rounded-full flex justify-center items-center text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-heart" viewBox="0 0 16 16">
                    <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
                  </svg>
                </div>
              </div>
              <div className=" flex w-11/12">
                <div className=" text-xl text-gray-200 -mr-2 mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </div>
                <div className=" rounded bg-gray-200 p-4 text-left">
                  <div className=" font-bold">{row.name}</div>
                  <div>{row.message}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="  bg-no-repeat bg-cover bg-center w-full" style={{ backgroundImage: `url('../assets/Bg2.png')` }}>
        <div className=" justify-center items-center flex flex-col min-h-screen">
          <div className=" font-cormorant text-center" data-aos="fade-down-right">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami<br />
            apabila Bapak / Ibu / Saudara / Saudari dapat hadir untuk memberikan <br />
            do`a restu kepada kedua memeplai.
          </div>
          <div className=" font-cormorant text-xl font-bold mt-5" data-aos="fade-up-left">Wassalamu`alaikum Warrahmatullah Wabarakatuh</div>
          <div className=" font-italiana text-5xl text-[#84A0BC] mt-20" data-aos="fade-down">Nadia & Dyan</div>
          <div className=" font-cormorant mt-5" data-aos="fade-up">Powered with ❤️ by <a href="https://www.instagram.com/tukangetik/" target="_blank" rel="noreferrer" className=" hover:text-red-500 hover:underline underline">@Niqahin</a></div>
        </div>
      </section>

    </>
  )
}
