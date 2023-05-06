import {Personajes,Planetas} from '../services/servicioStarwars.js'





let mpersonajes=document.getElementById("personajes")
let mplanetas=document.getElementById("planetas")



    
    Personajes().then(function(respuesta){

       

        respuesta.forEach(function(persona){     

            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")
   
            let nombre=document.createElement("h4")
            nombre.classList.add("text-center","fw-bold")
            nombre.textContent=persona.name


            let birth=document.createElement("p")
            birth.classList.add("bold")
            birth.textContent="Nacimiento: "+persona.birth_year

            let gender=document.createElement("p")
            gender.classList.add("bold")
            gender.textContent="Genero: "+persona.gender

            let altura=document.createElement("p")
            altura.classList.add("bold")
            altura.textContent="Altura: "+persona.height+"cm"

        
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(birth)
            tarjeta.appendChild(gender)
            tarjeta.appendChild(altura)
            mpersonajes.appendChild(tarjeta)



        })
})

        Planetas().then(function(respuesta){

       

        respuesta.forEach(function(planeta){

           

            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")

            

                let nombre=document.createElement("h4")
                nombre.classList.add("text-center","fw-bold")
                nombre.textContent=planeta.name

           

                let poblacion=document.createElement("p")
                poblacion.classList.add("bold")
                poblacion.textContent="Poblacion: "+planeta.population
    
                let terreno=document.createElement("p")
                terreno.classList.add("bold")
                terreno.textContent="Terreno: "+planeta.terrain
    
                let clima=document.createElement("p")
                clima.classList.add("bold")
                clima.textContent="Clima: "+planeta.climate
    
               
    
                
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(poblacion)
            tarjeta.appendChild(terreno)
            tarjeta.appendChild(clima)
            mplanetas.appendChild(tarjeta)



        })

     
        
    })

    

