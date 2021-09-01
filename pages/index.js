import Image from 'next/image'
import Link from 'next/link'
import Foto from '../imagens/bacaxi.JPEG'

function INDEX(){

    return (
        <>
        <div>
            <h1>Seja bem-vindo</h1>
            <h2>Receitas rápidas</h2>
            <br />
            <p>Site com receitas rápidas e divertidas <br/>
            Mata a fome e deixa você triste.</p>
            <br />
            <br />
            <Link href="/home"><button>CLIQUE PARA COZINHAR</button></Link>

        </div>

        <div>
            <Image src={Foto}></Image>
        </div>
        
        </>
    )
}

export default INDEX