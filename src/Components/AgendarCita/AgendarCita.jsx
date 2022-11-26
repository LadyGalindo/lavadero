import React from 'react'
import {Link} from 'react-router-dom'

const AgendarCita = () => {

  return (
<>
<br></br>
<section className="boxLogin agendar">
      <div className="container p-0">
        <div className="row m-0">

          <div className="col-md-12 mx-auto p-0 justify-content-between flex-column d-flex align-items-center">
            <div className="boxForm ">
              <h2 className="SubTitle" >Agendar servicio de Lavado </h2>
              <div className="row pt-2">

                <div className="col-md-6 p-5">
                  <div className="mb-3">
                    <label for="fecha" className="form-label">Fecha de agendamiento:</label>
                    <input type="date" className="form-control" id="fecha" placeholder="echa de agendamiento:" />
                  </div>
                  <div className="mb-3">
                    <label for="servicio" className="form-label">Servicio:</label>
                    <select className="form-select" aria-label="" id="servicio" name='servicio'>
                      <option selected>Selecciona una opción</option>
                      <option value="1">Lavado</option>
                      <option value="2">Lavado Polichado</option>
                      <option value="3">Desinfección Primordial</option>
                      <option value="4">Desinfección Avanzado</option>
                      <option value="5">Polichado</option>
                    </select>
                  </div>
                
                </div>
                <div className="col-md-6 p-5">
                  <div className="mb-3">
                    <label for="hora" className="form-label">Hora:</label>
                    <input type="time" className="form-control" id="hora" placeholder="Fecha de la Cita:" name='hora' />
                  </div>
                  <div className="mb-3">
                    <label for="placaCarro" className="form-label">Placa Vehiculo:</label>
                    <input class="form-control" type="text" placeholder="Digite la placa del Vehiculo" aria-label="" id="placaCarro" name='placaCarro'/>

                  </div> 
                </div>

                <div className="col-md-12">
                   
                 
                </div>

              </div>

              <div className="row">
                <div className="col-md-3 mx-auto mt-5 mb-5">
                  <div className="btn btn-primary mb-3 d-block pt-3 pb-3" id="agendar"> Agendar</div>
                </div>
              </div>
 
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="boxCar">
          <div className="btnBox">
            <p>Volver al incio <span><Link to={'../IndexApp'}>aquí</Link></span></p>
          </div>

        </div>
      </div>
    </section>
</>    
  )
}



export default AgendarCita