import usePacientes from "../hooks/usePacientes";
import Paciente from "./Paciente";

const ListadoPacientes = () => {

  const { pacientes } = usePacientes();

  return (
    <>
    {pacientes.length?
    (<>
      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administra tus pacientes y citas</p>
      {pacientes.map(paciente => (
        <Paciente key={paciente._id} paciente={paciente}/>
      ))}
    </>)
    :
    (<>
      <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Comienza agregando pacientes y aparecerán en esta sección</p>
    </>)}
    </>
  )
}

export default ListadoPacientes;