import { CgUnavailable } from "react-icons/cg"
import { MdEventAvailable } from "react-icons/md"

const Availability = ({status,expand}:{status:boolean; expand?: boolean}) => {
  return (
    <div className={`flex items-center border gap-4 p-2 rounded-md ${expand ? "pe-4": ""} ${status ? "bg-green-100" : "bg-red-100" }`}>
        {status ? <MdEventAvailable className="text-xl text-green-700"/>: <CgUnavailable className="text-xl text-red-700"/>}

        {expand && <p className="text-lg font-bold">{status ? "Şuan konaklanabilir" : "Konaklamak için müsait değil"}</p>}
    </div>
  )
}

export default Availability