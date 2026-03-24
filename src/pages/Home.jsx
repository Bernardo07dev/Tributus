import { useParams } from "react-router-dom"; 
import axios from "axios";
import {useState, useEffect} from "react";
import SideBar from "../components/SideBar"
import FormataCnpj from "../components/FormataCnpj";
import calcularScore from "../components/calcularScore";

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

    const score = dados ? calcularScore(dados) : null;
    const regime = dados ? dados.opcao_pelo_mei ? "MEI" : dados.opcao_pelo_simples ? "Simples Nacional" : "Lucro Presumido / Real" : null;
    const cadastro = dados ? dados.descricao_motivo_situacao_cadastral === "SEM MOTIVO" : null;

    return(
        <main className="bg-[#F1F5F9] flex">
            <section className="w-[20%] ">
                <SideBar />
            </section>

            <section className="w-[80%] p-8 flex flex-col gap-4">
                <div className="bg-white p-8 rounded-xl shadow-xs flex flex-row justify-between">
                    <div className="flex flex-row gap-4 items-center">
                        <div className="text-[#F6F7F9] bg-[#1F3B61] p-4 rounded-full font-bold">{iniciais && <span>{iniciais}</span>}</div>
                        <div>
                            <h1 className="text-lg text-black font-bold">{dados?.razao_social}</h1>
                            <p className="text-gray-500 text-sm"><span className="font-semibold">CNPJ: </span>{FormataCnpj(dados?.cnpj)} - <span className="font-semibold">CNAE: </span>{dados?.cnae_fiscal}</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-6 justify-center items-start">
                        <div className="mt-1">
                            <h1 className="text-gray-600 text-xs">Regime Tributario</h1>
                            <p className=" font-semibold">{regime}</p>
                        </div>

                        <div  className={`border px-5 py-3 rounded-md ${score > 80 ? "bg-[#07ee8e2d] border-green-400 text-green-600" : ""}`}>
                            <p className="text-xs">Score Fiscal</p>
                            <h1 className="text-xl font-bold">{score} <span className="text-sm font-medium">/ 100</span></h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-xs flex flex-col border border-green-200">
                        <h1 className="text-xs font-semibold text-gray-600 mb-6">SITUAÇÃO FEDERAL</h1>
                        {cadastro === true && <p className="text-xl font-semibold text-green-600">Regular</p>}
                        {cadastro === false && <p className="text-lg font-semibold text-red-600">Irregular</p>}
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-xs flex flex-col border border-green-200">
                        <h1 className="text-xs font-semibold text-gray-600 mb-6">DÍVIDA ATIVA PGNF</h1>
                        {cadastro === true && <p className="text-xl font-semibold text-green-600">Regular</p>}
                        {cadastro === false && <p className="text-lg font-semibold text-red-600">Irregular</p>}
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Home;