import { useState} from "react";
import data from './data.json'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp } from 'react-icons/bs'




const PrivateScreen = ({ history }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [file, setFile] = useState([]);
 
const searchItems = (searchValue) => {
  setSearchInput(searchValue)
  if (searchInput !== '') {
      const filteredData = file.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
  }
  else{
      setFilteredResults(file)
  }
}


  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };



  return (
   
      <>
      <div>
      <div className="flex items-center justify-between bg-white p-5">
        <span className=" font-mono text-white text-lg bg-green-400 px-4 py-1 rounded-md shadow-md ml-8">Riders</span>
        <button className="bg-green-400 text-white px-4 py-1 rounded-md shadow-md  mr-8" onClick={logoutHandler}>
          LogOut
        </button>
      </div>
      <div className="flex flex-col items-center gap-3 mt-3">
        <input icon='search'
          className="w-[80%] outline-none p-2 rounded-md bg-transparent border-2"
          placeholder='Search...'
          onChange={(e) => searchItems(e.target.value)} />
      </div>
      <p className="text-center bg-red-500 my-4 text-white font-bold p-2 rounded-md mx-3"> Cars</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {(data.map((item) => {
            return (
               <div className=" bg-white flex flex-col rounded-md shadow-md p-5 cursor-pointer" key={item.id}>
                <img src={item.image} alt='' className="py-5" />
                <h1 className="text-black font-semibold py-2">{item.name}</h1>
                <div className="flex gap-1">
                  <span className="text-red-400 text-sm">{item.rate}</span>
                  <span className="text-gray-400 text-sm">{item.fuel_type}</span>
                  <span className="text-gray-400 text-sm">{item.milage}</span>
                </div>
              </div> 
            );
          })
        )}
      </div>
    </div>
    {/*Contact detail*/}

    <section id="contact" className="m-8 md:m-3 text-center font-sans">
        <h5 className="font-medium my-2 text-2xl">Get In Touch</h5>
        <h2 className="font-medium my-4 text-lg">Contact Me</h2>
        <div className="containor md:flex justify-center items-center gap-3  text-white">
          <div className="flex flex-col gap-2">
            <article className='p-4 bg-violet-600 rounded-lg text-center  hover:border-2 transition-all hover:bg-transparent'>
              <MdOutlineEmail className=''/>
              <h4>Email</h4>
              <h5>harshprajapti904433@gmail.com</h5>
              <a href="mailto:harshprajapti904433@gmail.com" target="_blank" className="mt-1 inline-block text-lg" rel="noreferrer">Send a Message</a>
            </article>
            <article className='p-4 bg-violet-600 rounded-lg text-center hover:border-2 transition-all hover:bg-transparent'>
              <RiMessengerLine className='icon' />
              <h4>Messenger</h4>
              <h5>Harsh Prajapati</h5>
              <a href="http://m.me/_harshprajapati_/" target="_blank" rel="noreferrer">Send a Message</a>
            </article>
            <article className='p-4 bg-violet-600 rounded-lg text-center hover:border-2 transition-all hover:bg-transparent'>
              <BsWhatsapp className='icon' />
              <h4>WhatsApp</h4>
              <h5>+91 8840497081</h5>
              <a href="https://api.whatsapp.com/send?phone=+918840497081" target="_blank" rel="noreferrer">Send a Message</a>
            </article>
          </div>

          <form>
            <input type="text" name='name' placeholder='Your Full Name' required className="w-full p-4 bg-transparent text-white rounded-sm border-2" />
            <input type="email" name='email' placeholder='Your Email' required  className="w-full p-4 bg-transparent text-white rounded-sm border-2"/>
            <textarea name="message" rows="7" placeholder=' Your Message' required className="w-full p-4 bg-transparent text-white rounded-sm border-2 resize-none"></textarea>
            <button type='submit' className='btn btn-primary rounded-md'>Send Message</button>
          </form>
        </div>
      </section>
      </>
  );
};

export default PrivateScreen;

