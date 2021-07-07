let htmlTextAddContact = `
    <div class="bg_add_contact bg_add" id="bgAddContact">
       <form id="form">
            <div class="header_section">
                <h3><b>NUEVO CONTACTO</b></h3>
                <svg role="img" class="closeBtn" id= "closeAddContactBtn">
                    <use href="assets/button-close.svg#path-1"/>
                </svg>
            </div>
            <div class="info_contact_p">
                <div class="image">
                    <img src="assets/avatar.png" alt="" id= "imgPreview">
                    <input name="img_url" type="file" id="imgUploader">
                    <i class="fas fa-camera"></i>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" name="name" id="floatingNombre">
                    <label for="floatingNombre">Nombre *</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" name= "lastname" id="floatingApellido">
                    <label for="floatingApellido">Apellido *</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" name="position" id="floatingCargo">
                    <label for="floatingCargo">Cargo *</label>
                </div>
                <div class="form-floating">
                    <input type="email" class="form-control" name="email" id="floatingEmail">
                    <label for="floatingEmail">Email *</label>
                </div>
                <div class="form-floating form-floating-company">
                    <select name="company_id" class="form-control" id="floatingCompania">
                        <option>Seleccione una compañía</option>
                    </select>
                    <label for="floatingCompania">Compañía *</label>
                </div>
            </div>
            <div class="body_section">
                

                <div class="info_contact_s">
                    <div class="form-selects">
                        <label for="regionSelectAdd">Región*</label>
                        <select id="regionSelectAdd">
                            <option>Seleccione una región</option>
                        </select>
                    </div>

                    <div class="form-selects">
                        <label for="paisSelectAdd">País*</label>
                        <select id="paisSelectAdd" disabled>
                            <option>Seleccione un país</option>
                        </select>
                    </div>

                    <div class="form-selects">
                        <label for="ciudadSelectAdd">Ciudad*</label>
                        <select name="city_id" id="ciudadSelectAdd" disabled>
                            <option>Seleccione una ciudad</option>
                        </select>
                    </div>

                    <div class="form-selects">
                        <label for="addressInputAdd">Dirección*</label>
                        <input type="text" id="addressInputAdd" name="address" placeholder="Ingrese una dirección" disabled>
                    </div>

                </div>
                <div class="info_contact_t header">

                    <div class="form-selects">
                        <h3 for="canalSelectAdd">Canales de Contacto *</h3>
                    </div>

                    <div class="form-selects">
                        <label for="cuentaInputAdd">Cuenta de usuario *</label>
                    </div>
                    <div class="form-selects">
                        <label for="preferenciasSelectAdd">Preferencias *</label>
                    </div>
                </div>
                <div class="info_contact_t whatsapp">
                    <div class="form-selects">
                        <h4><i class="fab fa-whatsapp"></i>Whatsapp</h4>
                    </div>
                    <div class="form-selects">
                        <input type="number" id="whatsappCuentaInputAdd" name="whatsapp" placeholder="0000-000000">
                    </div>
                    <div class="form-selects">
                        <select name="wpre" id="preferenciaWhatsapp">
                            <option value="sin preferencia">Sin Preferencia</option>
                            <option value="no molestar">No Molestar</option>
                            <option value="canal preferido">Canal Preferido</option>
                        </select>
                    </div>
                    
                    <img src="assets/button-close.svg" class="disableChannel"/>
                    <img src="assets/return.png" class="returnIcon"/>

                </div>
                <div class="info_contact_t telefono">
                    <div class="form-selects">
                        <h4><i class="fas fa-phone"></i>Telefono</h4>
                    </div>
                    <div class="form-selects">
                        <input type="number" name="telefono" id="telefonoCuentaInputAdd" placeholder="0000-000000">
                    </div>
                    <div class="form-selects">
                        <select name="tpre" id="preferenciaTelefono">
                            <option value="sin preferencia">Sin Preferencia</option>
                            <option value="no molestar">No Molestar</option>
                            <option value="canal preferido">Canal Preferido</option>
                        </select>
                    </div>
                    
                    <img src="assets/button-close.svg" class="disableChannel"/>
                    <img src="assets/return.png" class="returnIcon"/>

                </div>
                <div class="info_contact_t facebook">
                    <div class="form-selects">
                        <h4><i class="fab fa-facebook-f"></i>Facebook</h4>
                    </div>
                    <div class="form-selects">
                        <input type="text" name="facebook" id="facebookCuentaInputAdd" placeholder="Tu Cuenta">
                    </div>
                    <div class="form-selects">
                        <select name="fpre" id="preferenciaFacebook">
                            <option value="sin preferencia">Sin Preferencia</option>
                            <option value="no molestar">No Molestar</option>
                            <option value="canal preferido">Canal Preferido</option>
                        </select>
                    </div>
                    
                    <img src="assets/button-close.svg" class="disableChannel"/>
                    <img src="assets/return.png" class="returnIcon"/>

                </div>
                <div class="info_contact_t linkedin">
                    <div class="form-selects">
                        <h4><i class="fab fa-linkedin-in"></i>Linkedin</h4>
                    </div>
                    <div class="form-selects">
                        <input type="text" name="linkedin" id="linkedinCuentaInputAdd" placeholder="Tu Cuenta">
                    </div>
                    <div class="form-selects">
                        <select name="lpre" id="preferenciaLinkedin">
                            <option value="sin preferencia">Sin Preferencia</option>
                            <option value="no molestar">No Molestar</option>
                            <option value="canal preferido">Canal Preferido</option>
                        </select>
                    </div>
                    
                    <img src="assets/button-close.svg" class="disableChannel"/>
                    <img src="assets/return.png" class="returnIcon"/>

                </div>
                <div class="info_contact_t slack">
                    <div class="form-selects">
                        <h4><i class="fab fa-slack"></i>Slack</h4>
                    </div>
                    <div class="form-selects">
                        <input type="text" name="slack" id="slackCuentaInputAdd" placeholder="@TuCuenta123">
                    </div>
                    <div class="form-selects">
                        <select name="spre" id="preferenciaSlack">
                            <option value="sin preferencia">Sin Preferencia</option>
                            <option value="no molestar">No Molestar</option>
                            <option value="canal preferido">Canal Preferido</option>
                        </select>
                    </div>
                    
                    <img src="assets/button-close.svg" class="disableChannel"/>
                    <img src="assets/return.png" class="returnIcon"/>

                </div>
                <div class="info_contact_c">

                    <label for="interesInputAdd">Interés *</label>
                    <input class="" name="interest" type="range" value="0" min="0" max="100" step="25" id="interesInputAdd">
                </div>

                <div class="btn_section">
                    <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                    <button type= "submit" class="save_btn" id= "saveBtn">Guadar Contacto</button>

                </div>
            </div>
        </form>
    </div>`;

let htmlTextEditContact = (info) => {
    let infoWh = info.channels.find(ch => ch.channel_name == "whatsapp"),
        infoTe = info.channels.find(ch => ch.channel_name == "telefono"),
        infoFa = info.channels.find(ch => ch.channel_name == "facebook"),
        infoLi = info.channels.find(ch => ch.channel_name == "linkedin"),
        infoSl = info.channels.find(ch => ch.channel_name == "slack");
    let wh, te, fa, li, sl;
    if (infoWh) {
        wh = `<div class="info_contact_t whatsapp">
                <div class="form-selects">
                    <h4><i class="fab fa-whatsapp"></i>Whatsapp</h4>
                </div>
                <div class="form-selects">
                    <input type="text" value= "${infoWh.channel_username}" id="whatsappCuentaInputAdd" name="whatsapp" placeholder="0000-000000">
                </div>
                <div class="form-selects">
                    <select name="wpre" id="preferenciaWhatsapp">
                        <option value="${infoWh.preferences}">${infoWh.preferences}</option>
                        <option value="sin preferencia">Sin Preferencia</option>
                        <option value="no molestar">No Molestar</option>
                        <option value="canal preferido">Canal Preferido</option>
                    </select>
                </div>
                
                <img src="assets/button-close.svg" class="disableChannel"/>
                <img src="assets/return.png" class="returnIcon"/>

            </div>`
    } else {
        wh = `<div class="info_contact_t whatsapp channelDisabled">
                <div class="form-selects">
                    <h4><i class="fab fa-whatsapp"></i>Whatsapp</h4>
                </div>
                <div class="form-selects">
                    <input type="number"  id="whatsappCuentaInputAdd" name="whatsapp" disabled placeholder="0000-000000">
                </div>
                <div class="form-selects">
                    <select name="wpre" id="preferenciaWhatsapp" disabled>
                        <option value="sin preferencia">Sin Preferencia</option>
                        <option value="no molestar">No Molestar</option>
                        <option value="canal preferido">Canal Preferido</option>
                    </select>
                </div>
                <img src="assets/button-close.svg" class="disableChannel"/>
                <img src="assets/return.png" class="returnIcon"/>
                </div>`
    }
    if (infoTe) {
        te = `<div class="info_contact_t telefono">
            <div class="form-selects">
                <h4><i class="fas fa-phone"></i>Telefono</h4>
            </div>
            <div class="form-selects">
                <input type="text" name="telefono" value="${infoTe.channel_username}"id="telefonoCuentaInputAdd" placeholder="0000-000000">
            </div>
            <div class="form-selects">
                <select name="tpre" id="preferenciaTelefono">
                    <option value="${infoTe.preferences}">${infoTe.preferences}</option>
                    <option value="sin preferencia">Sin Preferencia</option>
                    <option value="no molestar">No Molestar</option>
                    <option value="canal preferido">Canal Preferido</option>
                </select>
            </div>
            
            <img src="assets/button-close.svg" class="disableChannel"/>
            <img src="assets/return.png" class="returnIcon"/>
        </div>`
    } else {
        te = `<div class="info_contact_t telefono channelDisabled">
        <div class="form-selects">
            <h4><i class="fas fa-phone"></i>Telefono</h4>
        </div>
        <div class="form-selects">
            <input type="number" name="telefono"id="telefonoCuentaInputAdd" disabled placeholder="0000-000000">
        </div>
        <div class="form-selects">
            <select name="tpre" id="preferenciaTelefono" disabled>
                <option value="sin preferencia">Sin Preferencia</option>
                <option value="no molestar">No Molestar</option>
                <option value="canal preferido">Canal Preferido</option>
            </select>
        </div>
        <img src="assets/button-close.svg" class="disableChannel"/>
        <img src="assets/return.png" class="returnIcon"/>
        </div>`
    }
    if (infoFa) {
        fa = ` <div class="info_contact_t facebook">
            <div class="form-selects">
                <h4><i class="fab fa-facebook-f"></i>Facebook</h4>
            </div>
            <div class="form-selects">
                <input type="text" value="${infoFa.channel_username}"name="facebook" id="facebookCuentaInputAdd" placeholder="Tu Cuenta">
            </div>
            <div class="form-selects">
                <select name="fpre" id="preferenciaFacebook">
                    <option value="${infoFa.preferences}">${infoFa.preferences}</option>
                    <option value="sin preferencia">Sin Preferencia</option>
                    <option value="no molestar">No Molestar</option>
                    <option value="canal preferido">Canal Preferido</option>
                </select>
            </div>

            <img src="assets/button-close.svg" class="disableChannel"/>
            <img src="assets/return.png" class="returnIcon"/>
        </div>`
    } else {
        fa = ` <div class="info_contact_t facebook channelDisabled">
        <div class="form-selects">
            <h4><i class="fab fa-facebook-f"></i>Facebook</h4>
        </div>
        <div class="form-selects">
            <input type="text"name="facebook" id="facebookCuentaInputAdd" placeholder="Tu Cuenta" disabled>
        </div>
        <div class="form-selects">
            <select name="fpre" id="preferenciaFacebook" disabled>
                <option value="sin preferencia">Sin Preferencia</option>
                <option value="no molestar">No Molestar</option>
                <option value="canal preferido">Canal Preferido</option>
            </select>
        </div>
        <img src="assets/button-close.svg" class="disableChannel"/>
        <img src="assets/return.png" class="returnIcon"/>
         </div>`
    }
    if (infoLi) {
        li = `<div class="info_contact_t linkedin">
            <div class="form-selects">
                <h4><i class="fab fa-linkedin-in"></i>Linkedin</h4>
            </div>
            <div class="form-selects">
                <input type="text" value="${infoLi.channel_username}" name="linkedin" id="linkedinCuentaInputAdd" placeholder="Tu Cuenta">
            </div>
            <div class="form-selects">
                <select name="lpre" id="preferenciaLinkedin">
                    <option value="${infoLi.preferences}">${infoLi.preferences}</option>
                    <option value="sin preferencia">Sin Preferencia</option>
                    <option value="no molestar">No Molestar</option>
                    <option value="canal preferido">Canal Preferido</option>
                </select>
            </div>
            
            <img src="assets/button-close.svg" class="disableChannel"/>
            <img src="assets/return.png" class="returnIcon"/>
        </div>`
    } else {
        li = `<div class="info_contact_t linkedin channelDisabled">
            <div class="form-selects">
                <h4><i class="fab fa-linkedin-in"></i>Linkedin</h4>
            </div>
            <div class="form-selects">
                <input type="text" name="linkedin" id="linkedinCuentaInputAdd" placeholder="Tu Cuenta" disabled>
            </div>
            <div class="form-selects">
                <select name="lpre" id="preferenciaLinkedin" disabled>
                    <option value="sin preferencia">Sin Preferencia</option>
                    <option value="no molestar">No Molestar</option>
                    <option value="canal preferido">Canal Preferido</option>
                </select>
            </div>
            <img src="assets/button-close.svg" class="disableChannel"/>
            <img src="assets/return.png" class="returnIcon"/>
            </div>`
    }
    if (infoSl) {
        sl = `<div class="info_contact_t slack">
            <div class="form-selects">
                <h4><i class="fab fa-slack"></i>Slack</h4>
            </div>
            <div class="form-selects">
                <input type="text" value="${infoSl.channel_username}"name="slack" id="slackCuentaInputAdd" placeholder="@TuCuenta123">
            </div>
            <div class="form-selects">
                <select name="spre" id="preferenciaSlack">
                    <option value="${infoSl.preferences}">${infoSl.preferences}</option>
                    <option value="sin preferencia">Sin Preferencia</option>
                    <option value="no molestar">No Molestar</option>
                    <option value="canal preferido">Canal Preferido</option>
                </select>
            </div>
            
            <img src="assets/button-close.svg" class="disableChannel"/>
            <img src="assets/return.png" class="returnIcon"/>
        </div> `
    } else {
        sl = `<div class="info_contact_t slack channelDisabled">
            <div class="form-selects">
                <h4><i class="fab fa-slack"></i>Slack</h4>
            </div>
            <div class="form-selects">
                <input type="text" name="slack" id="slackCuentaInputAdd" placeholder="@TuCuenta123" disabled>
            </div>
            <div class="form-selects">
                <select name="spre" id="preferenciaSlack" disabled>
                    <option value="sin preferencia">Sin Preferencia</option>
                    <option value="no molestar">No Molestar</option>
                    <option value="canal preferido">Canal Preferido</option>
                </select>
            </div>
            <img src="assets/button-close.svg" class="disableChannel"/>
            <img src="assets/return.png" class="returnIcon"/>
        </div> `
    }
    return `<div class="bg_add_contact bg_add" id="bgEditContact">
       <form id="form">
            <div class="header_section">
                <h3><b>EDITAR CONTACTO</b></h3>
                <svg role="img" class="closeBtn" id= "closeEditContactBtn">
                    <use href="assets/button-close.svg#path-1"/>
                </svg>
            </div>
            <div class="info_contact_p">
                <div class="image">
                    <img src="${info.img_url}" alt="" id= "imgPreview">
                    <input name="img_url" type="file" id="imgUploader">
                    <i class="fas fa-camera"></i>
                </div>

                <div class="inputFloatingEdit contact">
                    <input type="text" class="form-control" value="${info.name}" name="name" id="floatingNombre">
                    <label for="floatingNombre">Nombre *</label>
                </div>
                <div class="inputFloatingEdit contact">
                    <input type="text" class="form-control" value="${info.lastname}" name= "lastname" id="floatingApellido">
                    <label for="floatingApellido">Apellido *</label>
                </div>
                <div class="inputFloatingEdit contact">
                    <input type="text" class="form-control" value="${info.position}" name="position" id="floatingCargo">
                    <label for="floatingCargo">Cargo *</label>
                </div>
                <div class="inputFloatingEdit contact">
                    <input type="email" class="form-control" value="${info.email}" name="email" id="floatingEmail">
                    <label for="floatingEmail">Email *</label>
                </div>
                <div class="inputFloatingEdit contact form-floating-company">
                    <select name="company_id" class="form-control" id="floatingCompania">
                        <option value="${info.company_id}">${info.company}</option>
                    </select>
                    <label for="floatingCompania">Compañía *</label>
                </div>
            </div>
            <div class="body_section">
                

                <div class="info_contact_s">
                    <div class="form-selects">
                        <label for="regionSelectAdd">Región*</label>
                        <select id="regionSelectAdd">
                            <option>${info.region}</option>
                        </select>
                   </div>

                    <div class="form-selects">
                        <label for="paisSelectAdd">País*</label>
                        <select id="paisSelectAdd">
                            <option>${info.country}</option>
                        </select>
                    </div>

                    <div class="form-selects">
                        <label for="ciudadSelectAdd">Ciudad*</label>
                        <select name="city_id" id="ciudadSelectAdd">
                            <option value="${info.city_id}">${info.city}</option>
                        </select>
                    </div>

                    <div class="form-selects">
                        <label for="addressInputAdd">Dirección*</label>
                        <input type="text" id="addressInputAdd" name="address" value="${info.address}" placeholder="Ingrese una dirección">
                    </div>
                </div>
                <div class="info_contact_t header">

                    <div class="form-selects">
                        <h3 for="canalSelectAdd">Canales de Contacto *</h3>
                    </div>

                    <div class="form-selects">
                        <label for="cuentaInputAdd">Cuenta de usuario *</label>
                    </div>
                    <div class="form-selects">
                        <label for="preferenciasSelectAdd">Preferencias *</label>
                    </div>
                </div>
                ${wh}
                ${te}
                ${fa}
                ${li}
                ${sl}
                <div class="info_contact_c">

                    <label for="interesInputAdd">Interés *</label>
                    <input class="" name="interest" type="range" value="${info.interest}" min="0" max="100" step="25" id="interesInputAdd">
                </div>

                <div class="btn_section">
                    <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                    <button type= "submit" class="save_btn" id= "saveBtn">Guadar Contacto</button>

                </div>
            </div>
        </form>
    </div>`;
}

let htmlTextAddCompany = `
<div class="bg_add_company bg_add" id="bgAddCompany">
   <form id="form">
        <div class="header_section">
            <h3><b>NUEVA COMPAÑÍA</b></h3>
            <svg role="img" class="closeBtn" id= "closeAddCompanyBtn">
                <use href="assets/button-close.svg#path-1"/>
            </svg>
        </div>
        <div class="info_contact_p">
            <div class="form-floating">
                <input type="text" class="form-control" name="name" id="floatingNombre">
                <label for="floatingNombre">Nombre *</label>
            </div>           
            <div class="form-floating">
                <input type="email" class="form-control" name="email" id="floatingEmail">
                <label for="floatingEmail">Email *</label>
            </div>
            <div class="form-floating">
                <input type="number" class="form-control" name= "phone" id="floatingPhone">
                <label for="floatingPhone">Teléfono *</label>
            </div>            
        </div>
        <div class="body_section">
            <div class="info_contact_s">
                <div class="form-selects">
                    <label for="regionSelectAdd">Región*</label>
                    <select id="regionSelectAdd">
                        <option>Seleccione una región</option>
                    </select>
                </div>

                <div class="form-selects">
                    <label for="paisSelectAdd">País*</label>
                    <select id="paisSelectAdd" disabled>
                        <option>Seleccione un país</option>
                    </select>
                </div>

                <div class="form-selects">
                    <label for="ciudadSelectAdd">Ciudad*</label>
                    <select name="city_id" id="ciudadSelectAdd" disabled>
                        <option>Seleccione una ciudad</option>
                    </select>
                </div>

                <div class="form-selects">
                    <label for="addressInputAdd">Dirección*</label>
                    <input type="text" id="addressInputAdd" name="address" placeholder="Ingrese una dirección" disabled>
                </div>

            </div>
            <div class="btn_section">
                <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                <button type= "submit" class="save_btn" id= "saveBtn">Guadar Compañía</button>

            </div>
        </div>
    </form>
</div>`

let htmlTextEditCompany = (info) => {
    return `
    <div class="bg_add_company bg_add" id="bgAddCompany">
       <form id="form">
            <div class="header_section">
                <h3><b>EDITAR COMPAÑÍA</b></h3>
                <svg role="img" class="closeBtn" id= "closeAddCompanyBtn">
                    <use href="assets/button-close.svg#path-1"/>
                </svg>
            </div>
            <div class="info_contact_p">
                <div class= "inputFloatingEdit">
                    <input type="text" class="form-control" name="name" value="${info.name}" id="floatingNombre">
                    <label for="floatingNombre">Nombre *</label>
                </div>           
                <div class= "inputFloatingEdit">
                    <input type="email" class="form-control" name="email" value="${info.email}" id="floatingEmail">
                    <label for="floatingEmail">Email *</label>
                </div>
                <div class= "inputFloatingEdit">
                    <input type="text" class="form-control" name= "phone" value="${info.phone}" id="floatingPhone">
                    <label for="floatingPhone">Teléfono *</label>
                </div>            
            </div>
            <div class="body_section">
                <div class="info_contact_s">
                    <div class="form-selects">
                        <label for="regionSelectAdd">Región*</label>
                        <select id="regionSelectAdd">
                            <option>${info.region}</option>
                        </select>
                    </div>
    
                    <div class="form-selects">
                        <label for="paisSelectAdd">País*</label>
                        <select id="paisSelectAdd">
                            <option>${info.country}</option>
                        </select>
                    </div>
    
                    <div class="form-selects">
                        <label for="ciudadSelectAdd">Ciudad*</label>
                        <select name="city_id" id="ciudadSelectAdd">
                            <option value = "${info.city_id}">${info.city}</option>
                        </select>
                    </div>
    
                    <div class="form-selects">
                        <label for="addressInputAdd">Dirección*</label>
                        <input type="text" id="addressInputAdd" name="address" value="${info.address}" placeholder="Ingrese una dirección">
                    </div>
    
                </div>
                <div class="btn_section">
                    <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                    <button type= "submit" class="save_btn" id= "saveBtn">Editar</button>
                </div>
            </div>
        </form>
    </div>`
}

let htmlTextAddUser = `
<div class="bg_add_user bg_add" id="bgAddUser">
   <form id="form">
        <div class="header_section">
            <h3><b>NUEVO USUARIO</b></h3>
            <svg role="img" class="closeBtn" id= "closeAddUserBtn">
                <use href="assets/button-close.svg#path-1"/>
            </svg>
        </div>
        <div class="info_contact_p">
            <div class="form-floating">
                <input type="text" class="form-control" name="name" id="floatingNombre">
                <label for="floatingNombre">Nombre *</label>
            </div>           
            <div class="form-floating">
                <input type="text" class="form-control" name="lastname" id="floatingApellido">
                <label for="floatingApellido">Apellido *</label>
            </div>           
            <div class="form-floating">
                <input type="email" class="form-control" name="email" id="floatingEmail">
                <label for="floatingEmail">Email *</label>
            </div>      
            <div class="form-floating form-floating-company">
                <select name="is_admin" class="form-control" id="floatingCompania">
                    <option value="1">Administrador</option>
                    <option value="0">Básico</option>
                </select>
                <label for="floatingCompania">Rol *</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" name="password" id="floatingPassword">
                <label for="floatingPassword">Contraseña *</label>
            </div>   
            <div class="form-floating">
                <input type="password" class="form-control" name="repeatPassword" id="floatingRepeatPassword">
                <label for="floatingRepeatPassword">Repetir Contraseña *</label>
            </div>   
        </div>
        <div class="body_section">
            <div class="btn_section">
                <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                <button type= "submit" class="save_btn" id= "saveBtn">Guadar Usuario</button>
            </div>
        </div>
    </form>
</div>`;

let htmlTextEditUser = (info) => {
    let text;
    if (info.is_admin == 1) {
        text = `<option value="1">Administrador</option>
        <option value="0">Básico</option>`
    } else if (info.is_admin == 0) {
        text = `<option value="0">Básico</option>
        <option value="1">Administrador</option>`
    }
    return `<div class="bg_add_user bg_add" id="bgAddUser">
    <form id="form">
         <div class="header_section">
             <h3><b>EDITAR USUARIO</b></h3>
             <svg role="img" class="closeBtn" id= "closeAddUserBtn">
                 <use href="assets/button-close.svg#path-1"/>
             </svg>
         </div>
         <div class="info_contact_p">
             <div class="inputFloatingEdit user">
                 <input type="text" class="form-control" value= "${info.name}" name="name" id="floatingNombre">
                 <label for="floatingNombre">Nombre *</label>
             </div>           
             <div class="inputFloatingEdit user">
                 <input type="text" class="form-control" value= "${info.lastname}" name="lastname" id="floatingApellido">
                 <label for="floatingApellido">Apellido *</label>
             </div>           
             <div class="inputFloatingEdit user">
                 <input type="email" class="form-control" value= "${info.email}" name="email" id="floatingEmail">
                 <label for="floatingEmail">Email *</label>
             </div>      
             <div class="inputFloatingEdit user form-floating-company">
                 <select name="is_admin" class="form-control" id="floatingRol">
                    ${text}
                 </select>
                 <label for="floatingRol">Rol *</label>
             </div>
             <div class="inputFloatingEdit user">
                 <input type="password" class="form-control" value="${info.password}" name="password" id="floatingPassword">
                 <label for="floatingPassword">Contraseña *</label>
             </div>   
             <div class="inputFloatingEdit user">
                 <input type="password" class="form-control" value="${info.password}" name="repeatPassword" id="floatingRepeatPassword">
                 <label for="floatingRepeatPassword">Repetir Contraseña *</label>
             </div>   
         </div>
         <div class="body_section">
             <div class="btn_section">
                 <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                 <button type= "submit" class="save_btn" id= "saveBtn">Editar</button>
             </div>
         </div>
     </form>
 </div>`;
}

let deleteWindowHTML = `<div class='bg_delete_contact' id= 'bgdeleteContact'>
                <div class='box_delete'>
                <div class='close_btn' id= 'closeDelContactBtn'>
                    <img src='assets/button-close.svg'  alt='close Button'>
                </div>
                <img src='assets/delete_contact.png' alt='Delete contact Image'>

                <p>¿Está seguro que desea borrar este contacto?</p>
                <button id="delConfirmBtn">Borrar contacto</button>
                </div>
            </div>`;

let deleteManyContactsHTML = (num) => {
    return `<div class='bg_delete_contact' id= 'bgdeleteContact'>
        <div class='box_delete'>
        <div class='close_btn' id= 'closeDelContactBtn'>
            <img src='assets/button-close.svg'  alt='close Button'>
        </div>
        <img src='assets/delete_contact.png' alt='Delete contact Image'>

        <p>¿Está seguro que desea borrar ${num} contactos?</p>
        <button id="delConfirmBtn">Borrar contactos</button>
        </div>
    </div>`;
}
let htmlTextEditLocation = (info, type) => {
    info.name = info.name.trim()
    if (type == "r") {
        return ` <div class="bg_add_company bg_add" id="bgEditLocation">
        <form id="form" style= "width:40%;">
            <div class="header_section">
                <h3><b>EDITAR REGION</b></h3>
                <svg role="img" class="closeBtn" id= "closeEditLocationBtn">
                    <use href="assets/button-close.svg#path-1"/>
                </svg>
            </div>
            <div class="info_contact_p">
                <div class= "inputFloatingEdit">
                    <input type="text" class="form-control" name="name" value="${info.name}" id="floatingNombre">
                    <label for="floatingNombre">Nombre *</label>
                </div>                   
            </div>
            <div class="body_section">
                <div class="btn_section">
                    <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                    <button type= "submit" class="save_btn" id= "saveBtn">Editar</button>
                </div>
            </div>
        </form>
        </div>`
    } else if (type == "co") {
        return ` <div class="bg_add_company bg_add" id="bgEditLocation">
        <form id="form" style= "width:40%;">
            <div class="header_section">
                <h3><b>EDITAR PAÍS</b></h3>
                <svg role="img" class="closeBtn" id= "closeEditLocationBtn">
                    <use href="assets/button-close.svg#path-1"/>
                </svg>
            </div>
            <div class="info_contact_p">
                <div class= "inputFloatingEdit">
                    <input type="text" class="form-control" name="name" value="${info.name}" id="floatingNombre">
                    <label for="floatingNombre">Nombre *</label>
                </div>              
                <div class="inputFloatingEdit user">
                    <label for="regionSelectAdd">Región*</label>
                    <select id="regionSelectAdd" name="region_id">
                        <option value='${info.region_id}'>${info.region_name}</option>
                    </select>
                </div>     
            </div>
            <div class="body_section">
                <div class="btn_section">
                    <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                    <button type= "submit" class="save_btn" id= "saveBtn">Editar</button>
                </div>
            </div>
        </form>
        </div>`
    } else if (type == "ci") {
        return ` <div class="bg_add_company bg_add" id="bgEditLocation">
        <form id="form" style= "width:60%;">
            <div class="header_section">
                <h3><b>EDITAR CIUDAD</b></h3>
                <svg role="img" class="closeBtn" id= "closeEditLocationBtn">
                    <use href="assets/button-close.svg#path-1"/>
                </svg>
            </div>
            <div class="info_contact_p">
                <div class= "inputFloatingEdit">
                    <input type="text" class="form-control" name="name" value="${info.name}" id="floatingNombre">
                    <label for="floatingNombre">Nombre *</label>
                </div>                   
                <div class="inputFloatingEdit user">
                    <label for="regionSelectAdd">Región*</label>
                    <select id="regionSelectAdd">
                        <option value='${info.region_id}'>${info.region_name}</option>
                    </select>
                </div>     
                <div class="inputFloatingEdit user">
                    <label for="countrySelectAdd">País*</label>
                    <select id="countrySelectAdd" name="country_id">
                        <option value='${info.country_id}'>${info.country_name}</option>
                    </select>
                </div>     
            </div>

            <div class="body_section">
                <div class="btn_section">
                    <button type= "button" class="cancel_btn" id="cancelBtn">Cancelar</button>
                    <button type= "submit" class="save_btn" id= "saveBtn">Editar</button>
                </div>
            </div>
        </form>
        </div>`
    }
}

let deleteRegWindowHTML = `<div class='bg_delete_contact' id= 'bgdeleteContact'>
        <div class='box_delete' style= "height: 300px;">
        <div class='close_btn' id= 'closeDelContactBtn'>
            <img src='assets/button-close.svg'  alt='close Button'>
        </div>
        <p><b>¿Está seguro que desea borrar esta ubicación?</b></p>
        <p>Se eliminarán todas las compañías y contactos relacionados</p>
        <button id="delConfirmBtn">Borrar</button>
    </div>
    </div>`;

let deleteCompWindowHTML = `<div class='bg_delete_contact' id= 'bgdeleteContact'>
    <div class='box_delete' style= "height: 300px;">
    <div class='close_btn' id= 'closeDelContactBtn'>
        <img src='assets/button-close.svg'  alt='close Button'>
    </div>
    <p><b>¿Está seguro que desea borrar esta compañía?</b></p>
    <p>Se eliminarán todos los contactos relacionados</p>
    <button id="delConfirmBtn">Borrar</button>
</div>
</div>`;

let deleteUserWindowHTML = (name) => {
    return `<div class='bg_delete_contact' id= 'bgdeleteContact'>
        <div class='box_delete'>
        <div class='close_btn' id= 'closeDelContactBtn'>
            <img src='assets/button-close.svg'  alt='close Button'>
        </div>
        <img src='assets/delete_contact.png' alt='Delete user Image'>

        <p>¿Está seguro que desea borrar el contacto de <span style= "text-transform: capitalize;">${name}</span>?</p>
        <button id="delConfirmBtn">Borrar usuario</button>
        </div>
    </div>`
};

let importWindowHTML = `<div class='bg_import_contact' id= 'bgImportContact'>
    <div class='box_import'>
        <div class='close_btn' id= 'closeImpContactBtn'>
            <img src='assets/button-close.svg'  alt='close Button'>
        </div>
        <img src='assets/import_file.png' alt='Import File Image'>

        <p>Selecciona el archivo de tu computador para importar un contacto</p>
        <button>Importar contacto</button>
    </div>
</div>`;

let trashContactSection = (num) => {
    return `<div class="trashSection">
                <p>
                    ${num} seleccionados
                </p>
                <button id="trashContactsBtn">
                    <i class="fas fa-trash trash"></i>
                    Eliminar contactos
                </button>
            </div>`
}
