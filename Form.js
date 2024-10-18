    let valorfinal = "";
    
    // Obtener el botón de envío por su ID
    const boton = document.getElementById("payment-widget");
    const orderNumber = 'order_' + Math.floor(Math.random() * 1000000000);
    
    function HandleChange(e){
        const tex = document.getElementById("pw_ammount");
      console.log(tex);
     tex.textContent = e.target.value;
    
    }
    
    document.getElementById("plan_mensual").addEventListener("change", HandleChange);
    document.getElementById("plan_trimestral").addEventListener("change", HandleChange);
    document.getElementById("plan_semestral").addEventListener("change", HandleChange);
    document.getElementById("plan_anual").addEventListener("change", HandleChange);

    document.addEventListener('DOMContentLoaded', function() {
        function HandleChange(e, input) {
            // toma el input que quieres que se llene automatico y cambia el valor
            document.getElementById(input).value = e.target.value;
        }
        //aqui pones el input que llenas                           y aqui pones el que se llene automatico, id              
        document.getElementById("nombre_completo").addEventListener('change', (e)=> HandleChange(e, "pw_manes"));
        document.getElementById("nombre_completo").addEventListener('change', (e)=> HandleChange(e, "pw_lsatManes"));
        document.getElementById("tipo_documento").addEventListener('change', (e)=> HandleChange(e, "pw_ytpeDco"));
        document.getElementById("numero_documento").addEventListener('change', (e)=> HandleChange(e, "pw_mnuDco"));
        document.getElementById("email").addEventListener('change', (e)=> HandleChange(e, "pw_email"));
        });

        