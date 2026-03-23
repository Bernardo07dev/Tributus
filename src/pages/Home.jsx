import { useParams } from "react-router-dom"; 
import axios from "axios";
import {useState, useEffect} from "react";
import SideBar from "../components/SideBar"
import FormataCnpj from "../components/FormataCnpj";

const Home = () => {
    const { cnpj } = useParams();
    const [dados, setDados] = useState();
    const iniciais = dados?.razao_social ? dados.razao_social.slice(0, 2) : "";


    useEffect(() => {
        if (!cnpj) return;

        const getDados = async() => {
            try{
                const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
                console.log(response.data);
                setDados(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados do CNPJ:", error);
            }
        };

        getDados();
    }, [cnpj]);

    return(
        <main className="bg-[#F1F5F9] flex">
            <section className="w-[20%] ">
                <SideBar />
            </section>

            <section className="w-[80%] p-12">
                <div className="bg-white p-10 rounded-xl shadow-xs">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="text-[#F6F7F9] bg-[#1F3B61] p-4 rounded-full font-bold">{iniciais && <span>{iniciais}</span>}</div>
                        <div>
                            <h1 className="text-lg text-black font-bold">{dados?.razao_social}</h1>
                            <p className="text-gray-500 text-sm"><span className="font-semibold">CNPJ: </span>{FormataCnpj(dados?.cnpj)} - <span className="font-semibold">CNAE: </span>{dados?.cnae_fiscal}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;