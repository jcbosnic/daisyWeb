import "./styles.css"

const Home = () => {
    return (
        <section className="homeBlock">
            <img  
                src="../../../public/images/avatar.png"
                alt="Daisy"
                className="avatar"
            />
                <h2 className="avatarName">Daisy</h2>
                <h4 className="">Psicóloga Clínica infanto juvenil y adultos</h4>
                <section className="blockResume">
                    <p>
                        Realizo psicoterapia infanto-juvenil y adultos en modalidad
                        presencial y remota, asesorías en crianza positiva y acompañamiento
                        a parejas y mujeres embarazadas.
 
                    </p> 

                </section>
            
            
         </section>
    )   
}

export default Home