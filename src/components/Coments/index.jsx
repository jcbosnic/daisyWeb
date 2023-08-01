import {useState, useEffect} from 'react';
import axios from "axios";
import './styles.css'

const URL = './database/user.json';

const Coments = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(URL)
        .then(res => setData(res.data) )
        .catch(err => console.error(err))
    }, [])

    return (
      <section className='comentsBlock'>
        <h1>Comentarios</h1>
        {
            data.map((item, index) => (
              <div className='usersBlock' key={index}>
                {item.avatar ? 
                    <img className="avatarImage" src={item.avatar} alt={item.name} /> 
                    :
                    <div className="avatarNoImage">{item.name}</div>
                }
                <section className='sectionInfo'>
                    <p className='sectionInfoName'>{item.name}</p>
                    <p className='sectionInfoDate'>{item.date}</p>
                    <p className='sectionInfoDescription'>{item.description}</p>
                </section>
              </div>  
            ))
        }
      </section>  
    )
}

export default Coments