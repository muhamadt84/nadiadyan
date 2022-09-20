import Head from 'next/head'
import Image from 'next/image'
import Flower1 from '../public/assets/Flower1.png'
import Female from '../public/assets/Female.png'
import Male from '../public/assets/Male.png'
import BgMobile1 from '../public/assets/BgMobile1.png'
import { useState } from "react"

export default function Home() {
  const [cover, setCover] = useState(true)

  return (
    <>
      <section className={` min-h-screen bg-no-repeat bg-cover bg-center w-full fixed z-10 transition-all duration-1000 ${cover ? 'top-0' : '-top-[150%]'} `} style={{ backgroundImage: `url('../assets/Bg2.png')` }}>
        <div className=" justify-center items-center flex flex-col min-h-screen">
          <div className=" font-italiana text-8xl text-[#84A0BC] mt-5 text-center">Nadia & Dyan</div>
          <div className=" font-cormorant text-xl italic mt-5">Kepada YTH.</div>
          <div className=" font-cormorant text-3xl">Tamu Undangan</div>
          <button onClick={() => setCover(false)} className=" p-2 px-5 text-sm bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 focus:outline-none">
            Buka Undangan
          </button>
        </div>
      </section>

      <section className="  bg-no-repeat bg-cover bg-center w-full" style={{ backgroundImage: `url('../assets/Bg1.png')` }}>
        <div className=" justify-center items-center flex flex-col min-h-screen">
          <div className=" font-italiana md:text-2xl font-bold">The Wedding Of</div>
          <div className=" font-italiana text-7xl md:text-8xl text-[#84A0BC] mt-5">Nadia &</div>
          <div className=" font-italiana text-7xl md:text-8xl text-[#84A0BC]">Dyan</div>
          <div className=" font-italiana md:text-2xl font-bold mt-5">Sabtu, 22 OKtober 2022</div>
        </div>
      </section>

      <section className=" bg-[#F2F7FB] w-full items-center justify-center flex p-4 py-16">
        <div className=" max-w-5xl w-full">
          <div className=" flex flex-col space-y-12 md:flex-row md:justify-between">
            <div className=" md:w-1/2 justify-center flex flex-col">
              <p className=" text-center italic font-cormorant">
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
            <div className=" md:w-1/2 justify-center flex">
              <Image src={Flower1} alt="Flower 1" width={305} height={245} />
            </div>
          </div>

          <div className=" flex flex-col justify-center mt-20 ">
            <p className=" text-center font-cormorant font-bold text-xl leading-tight">Assalamualaikum Warahmatullahi Wabarakatuh</p>
            <p className=" text-center font-cormorant mt-5">
              Dengan memohon Rahmat serta Ridho Allah SWT, kami bermaksud untuk menyelenggarakan acara Pernikahan Putri dan Putra kami.<br />
            </p>
          </div>

          <div className=" flex flex-col md:flex-row md:justify-between mt-12">
            <div className=" md:w-1/2 flex justify-center items-center">
              <div className=" h-56 w-56 flex justify-center items-center rounded-full shadow-2xl bg-gradient-to-tr from-[#84A0BC] to-[#BBAFC7]">
                <Image className=" rounded-full object-cover" src={Female} alt="Female" width={200} height={200} />
              </div>
            </div>
            <div className=" md:w-1/2 flex flex-col justify-center text-center">
              <div className=" font-qwitcher-grypen text-8xl">Nadia</div>
              <div className=" font-cormorant text-5xl">Nadia Ramadhianti</div>
              <div className=" font-medium">Putri Dari</div>
              <div>Bapak Taryono W & Ibu Utiek Agriani</div>
              <div className=" flex justify-center">
                <a href="https://instagram.com/" target="_blank" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <span>@nadia</span>
                </a>
              </div>
            </div>
          </div>

          <div className=" flex flex-col-reverse md:flex-row justify-between mt-20">
            <div className=" md:w-1/2 flex flex-col justify-center text-center">
              <div className=" font-qwitcher-grypen text-8xl">Dyan</div>
              <div className=" font-cormorant text-5xl">Dyan Taufiqurrahman</div>
              <div className=" font-medium">Putra Dari</div>
              <div>Bapak Efnedy Arief & Ibu Gusnety Zam</div>
              <div className=" flex justify-center">
                <a href="https://instagram.com/" target="_blank" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                  <span>@dyan</span>
                </a>
              </div>
            </div>
            <div className=" md:w-1/2 flex justify-center items-center">
              <div className=" h-56 w-56 flex justify-center items-center rounded-full shadow-2xl bg-gradient-to-tr from-[#84A0BC] to-[#BBAFC7]">
                <Image className=" rounded-full object-cover" src={Male} alt="Female" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className=" justify-center items-center flex flex-col bg-no-repeat bg-cover bg-center w-full p-4 py-16" style={{ backgroundImage: `url('../assets/Bg3.png')` }}>
        <div className=" font-italiana text-5xl text-[#84A0BC]">Save The Date</div>
        <div className=" flex text-3xl space-x-12 mt-5 font-cormorant">
          <div className=" flex flex-col items-center">
            <span className=" text-5xl">0</span>
            <span>D</span>
          </div>
          <div className=" flex flex-col items-center">
            <span className=" text-5xl">0</span>
            <span>H</span>
          </div>
          <div className=" flex flex-col items-center">
            <span className=" text-5xl">0</span>
            <span>M</span>
          </div>
          <div className=" flex flex-col items-center">
            <span className=" text-5xl">0</span>
            <span>S</span>
          </div>
        </div>
        <div className=" mt-8 text-center font-cormorant text-xl leading-tight">
          Bersamaan dengan ini, kami bermaksud mengundang<br />
          Bapak/Ibu/Saudara/i ke acara pernikahan kami.<br />
          Acara tersebut akan dilaksanakan pada<br />
        </div>

        <div className=" flex mt-8 flex-col space-y-12 md:flex-row md:space-x-3">
          <div className=" w-[25rem] h-[35rem] relative flex rounded-t-full rounded-xl border border-[#BBAFC7] shadow-2xl" >
            <img className=" w-full object-cover  rounded-t-full rounded-xl" src='../assets/BgMobile1.png' alt="Bg Mobile 1" />
            {/* <Image className=" rounded-t-full" src={BgMobile1} width={375} height={812} /> */}
            <div className=" absolute flex flex-col justify-center inset-0 text-center mt-12">
              <div className=" font-qwitcher-grypen text-7xl">Akad Nikah</div>
              <div className=" font-italiana text-4xl font-bold">22/10/2022</div>
              <div className="">JAM : 11.00 S/D 13.00 WIB</div>
              <div className=" mt-4 font-bold uppercase">Menara 165</div>
              <div className=" uppercase">JL. TB Simatupang,<br />
                Kav. I Jakarta Selatan<br />
              </div>
              <div className=" flex justify-center">
                <a href="https://goo.gl/maps/ybaaSWsj3UNosw637" target="_blank" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span>Google Maps</span>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-[25rem] h-[35rem] relative flex rounded-t-full rounded-xl border border-[#BBAFC7] shadow-2xl" >
            <img className=" w-full object-cover  rounded-t-full rounded-xl" src='../assets/BgMobile2.png' alt="Bg Mobile 2" />
            <div className=" absolute flex flex-col justify-center inset-0 text-center mt-12">
              <div className=" font-qwitcher-grypen text-7xl">Resepsi Nikah</div>
              <div className=" font-italiana text-4xl font-bold">22/10/2022</div>
              <div className="">JAM : 11.00 S/D 13.00 WIB</div>
              <div className=" mt-4 font-bold uppercase">Menara 165</div>
              <div className=" uppercase">JL. TB Simatupang,<br />
                Kav. I Jakarta Selatan<br />
              </div>
              <div className=" flex justify-center">
                <a href="https://goo.gl/maps/ybaaSWsj3UNosw637" target="_blank" className=" p-1 px-5 bg-[#BBAFC7] text-white rounded-full mt-5 border border-[#BBAFC7] hover:text-[#BBAFC7] hover:bg-transparent duration-300 flex items-center space-x-2 focus:outline-none">
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
        <div className=" font-italiana text-5xl text-[#84A0BC]">Say Something</div>
        <p className=" font-cormorant mt-5 ">Berikan Do'a dan Ucapan terbaik anda untuk kedua mempelai.</p>
        <form id="formAdd" className=" flex flex-col mt-5 w-5/6 md:w-2/5 space-y-5">
          <input className=" bg-gray-200  py-4 px-4 rounded focus:outline-none" type="input" name="nama" placeholder="Nama lengkap" required="" defaultValue="" />
          <textarea className=" bg-gray-200 py-4 px-4 rounded focus:outline-none" name="ucapan" rows="6" placeholder="Do`a dan ucapan anda .." required="" ></textarea>
          <select className=" bg-gray-200  py-4 px-4 rounded focus:outline-none" name="kehadiran" required="" defaultValue="1">
            <option value="DEFAULT" disabled={true} selected={true}>Konfirmasi kehadiran</option>
            <option value="1">Hadir 1 Orang</option>
            <option value="2">Hadir 2 Orang</option>
            <option value="0">Tidak Hadir</option>
          </select>
          <button type="button" className=" py-2 bg-gradient-to-r from-[#84A0BC] to-[#BBAFC7] text-white text-base xxl:text-lg font-medium rounded hover:shadow-lg">Kirimkan Ucapan</button>
        </form>
        <div className=" flex mt-12 space-x-12">
          <div className=" flex flex-col">
            <label className=" text-xl xxl:text-2xl font-medium text-gray-600">0</label>
            <label className=" text-sm xxl:text-xl text-gray-400">Ucapan</label>
          </div>
          <div className=" flex flex-col">
            <label className=" text-xl xxl:text-2xl font-medium text-gray-600">0</label>
            <label className=" text-sm xxl:text-xl text-gray-400">Hadir</label>
          </div>
          <div className=" flex flex-col">
            <label className=" text-xl xxl:text-2xl font-medium text-gray-600">0</label>
            <label className=" text-sm xxl:text-xl text-gray-400">Tidak Hadir</label>
          </div></div><div className=" mt-6 w-full px-4 lg:px-0 lg:w-5/12">
        </div>
        <div className=" flex flex-col space-y-4 w-5/6 md:w-2/5 rounded-lg border border-[#84A0BC] p-4 mt-8 overflow-auto h-96">
          <div className=" flex space-x-4">
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
                <div className=" font-bold">Irham Zuhdi</div>
                <div>Selamat ya dyan & nadia, semoga diberi kesehatan dan kelancaran sampai hari H</div>
              </div>
            </div>
          </div>
          <div className=" flex space-x-4">
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
                <div className=" font-bold">Taufik Hidayah</div>
                <div>Pernikahan yg smawa....dilancarkan acaranya dilanggengkan jodohnya dan di sejahterakan hidupnya dunia dan akherat.....Aamiin yra....</div>
              </div>
            </div>
          </div>
          <div className=" flex space-x-4">
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
                <div className=" font-bold">Syifaa Robb</div>
                <div>Semoga menjadi keluarga SAMAWA.....</div>
              </div>
            </div>
          </div>
          <div className=" flex space-x-4">
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
                <div className=" font-bold">Abdul Fajar</div>
                <div>Happy Wedding sista cantik ku !! semoga menjadi pasangan yang berbahagia sampai maut memisahkan!!! love love</div>
              </div>
            </div>
          </div>
          <div className=" flex space-x-4">
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
                <div className=" font-bold">Lulu Randa</div>
                <div>Congratulation for you two!!! Doa terbaik untuk kalian, semoga selalu dilancarkan, dibahagiakan dan disatukan selalu seterusterusnya!🤍🤍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="  bg-no-repeat bg-cover bg-center w-full" style={{ backgroundImage: `url('../assets/Bg2.png')` }}>
        <div className=" justify-center items-center flex flex-col min-h-screen">
          <div className=" font-cormorant text-center">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami<br />
            apabila Bapak / Ibu / Saudara / Saudari dapat hadir untuk memberikan <br />
            do'a restu kepada kedua memeplai.
          </div>
          <div className=" font-cormorant text-xl font-bold mt-5">Wassalamu'alaikum Warrahmatullah Wabarakatuh</div>
          <div className=" font-italiana text-5xl text-[#84A0BC] mt-20">Nadia & Dyan</div>
          <div className=" font-cormorant mt-5">Powered with ❤️ by <a href="https://www.instagram.com/tukangetik/" target="_blank" className=" hover:text-red-500 hover:underline underline">@Niqahin</a></div>
        </div>
      </section>

    </>
  )
}
