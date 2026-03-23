import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
    return(
        <div className="w-full min-h-screen bg-white p-8">
            <div className="flex flex-row gap-2 justify-start items-start mb-10">
                <img src="/Logo.svg" className="bg-[#F4F5F7] p-3 rounded-lg shadow-2xl"></img>
                <div className="flex flex-col">
                    <p className="public font-bold text-lg -mb-1">TRIBUTUS</p>
                    <p className="text-xs text-gray-600">Gestão Tributária</p>
                </div>      
            </div>

            <div>
                <div className="bg-[#1f3a610a] p-3 rounded-lg border-l-3 border-gray-200 shadow-sm cursor-pointer flex flex-row gap-2">
                    <FontAwesomeIcon icon={faHome} className='text-[#1f3b61]'/>
                    <p className="text-sm font-medium text-[#1f3b61]">Home</p>
                </div>
            </div>

        </div>
    )
}

export default SideBar;