import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faBell, faAnglesUp} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


const Landing = () => {
    const [cnpj, setCnpj] = useState("");
    const navigate = useNavigate();

    const [errormsg, setErrormsg] =useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const cnpjNumeros = cnpj.replace(/\D/g, "");

        if (cnpjNumeros.length < 14){
            setErrormsg(true);
            return;
        }

        setErrormsg(false);
        navigate(`/home/${cnpjNumeros}`);
    };

    const formatCNPJ = (value) => {
        const numbers = value.replace(/\D/g, "").slice(0, 14);
        let formatted = numbers;

        if (numbers.length > 2) {
        formatted = numbers.slice(0, 2) + "." + numbers.slice(2);
        }
        if (numbers.length > 5) {
        formatted = formatted.slice(0, 6) + "." + formatted.slice(6);
        }
        if (numbers.length > 8) {
        formatted = formatted.slice(0, 10) + "/" + formatted.slice(10);
        }
        if (numbers.length > 12) {
        formatted = formatted.slice(0, 15) + "-" + formatted.slice(15);
        }

        return formatted;
    };

  const handleChange = (e) => {
    setCnpj(formatCNPJ(e.target.value));
  };

    return(
        <main className="font-public bg-white text-slate-900">
            <header className="w-full px-12 py-4 shadow-md fixed backdrop-blur-xl">
                <div className="flex flex-row gap-2">
                    <img src="/Logo.svg"></img>
                    <p className="public font-bold">TRIBUTUS</p>
                </div>

            </header>

            <section className="w-full px-[20%] flex flex-col justify-center pt-[10%] items-center mb-8">
                <span class="text-accent text-[#2E74B5] font-bold text-xs uppercase mb-2">Inteligência Fiscal</span>
                <h1 class="text-slate-900 text-5xl text-center mb-4 font-bold tracking-tighter px-[10%]">Descubra a situação fiscal da sua empresa em segundos</h1>
                <h1 className="text-gray-600 text-md text-center px-[20%]">Obtenha um panorama completo das pendências e oportunidades tributárias do seu CNPJ de forma imediata e segura.</h1>
            </section>

            <form onSubmit={handleSubmit} className="w-full flex justify-center items-center mb-[8%]">
                <div class="flex flex-col gap-4 w-full max-w-lg">
                    <div class="flex flex-col shadow-lg sm:flex-row gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <div class="flex items-center flex-1 px-3 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                        <input class="w-full border-none focus:outline-none p-2 focus:ring-0 text-slate-900 placeholder:text-slate-400 font-medium text-sm" 
                            placeholder="XX.XXX.XXX/XXXX-XX" 
                            type="text"
                            value={cnpj}
                            onChange={handleChange}
                        />
                    </div>
                        <button class="bg-[#1F3B61] cursor-pointer text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-opacity-95 transition-all whitespace-nowrap">Analisar gratuitamente</button>
                    </div>
                    {errormsg && (<p className="text-sm text-red-400 ml-4 font-semibold">CNPJ Inválido</p>)}
                    
                </div>
            </form >

            <section className="w-full bg-[#F8FAFC] py-18 px-[13%] flex flex-col">
                <h1 className="text-2xl mb-2 font-bold">Sua gestão simplificada</h1>
                <p className="text-gray-600">Tecnologia avançada para garantir a conformidade e saúde financeira do seu negócio em tempo real.</p>
                <div className="mt-12 flex flex-row gap-4">
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <FontAwesomeIcon icon={faBolt} className="text-[#1F3B61] mb-2 text-lg rounded-lg p-4 bg-[#F4F5F7]"/>
                        <h1 className="text-lg font-bold mb-1">Diagnóstico Simplificado</h1>
                        <p className="text-sm text-gray-500">Análise completa em poucos segundos conectada diretamente aos principais órgãos reguladores.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <FontAwesomeIcon icon={faBell} className="text-[#1F3B61] mb-2 text-lg rounded-lg p-4 bg-[#F4F5F7]"/>
                        <h1 className="text-lg font-bold mb-1">Alertas de pendências</h1>
                        <p className="text-sm text-gray-500">Identificação imediata de impostos em atraso ou declarações não entregues antes que gerem multas.</p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <FontAwesomeIcon icon={faAnglesUp} className="text-[#1F3B61] mb-2 text-lg rounded-lg p-4 bg-[#F4F5F7]"/>
                        <h1 className="text-lg font-bold mb-1">Oportunidades de economia</h1>
                        <p className="text-sm text-gray-500">Encontre créditos tributários e benefícios fiscais que sua empresa pode aproveitar legalmente.</p>
                    </div>
                    
                </div>
            </section>

        </main>
    )
}

export default Landing;