// clase es una plñantilla a partir de la cual se creen objectos
// una instancia-> cada objecto creato  a partir d euna clase

const jon=
{
    nombre:'andy',
    apellido:'macias',
    curso:['c#','javascrip']
}
//clase
//constructor -> funcion que ese ejecuta automatica al instanciar una clase
//propiedades
//metodos()
class Persona
{
    constructor(nombre,apellido,paiz)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.paiz=paiz;
        this.nombrecompleto = `${nombre}  ${apellido}`;
        
    }
    saludar()
    {
        return `Hola , soy ${this.nombrecompleto} y vivo en ${this.paiz}`;
    }
}
class Profesor extends Persona
{
    // static zoona = 'latinoamerica';
    constructor(nombre,apellido,paiz,curso,tegnologia)
    {
        super(nombre,apellido,paiz);
        this.curso=curso;
        this.tegnologia=tegnologia;
       
    }
    invitaralcurso()
    {
        return `Hola soy ${this.nombrecompleto} y te invito al curso ${this.curso} nos vemos en clase` ;
    }
    static describirpersona(Persona)
    {
        return `Esta Persona se llama ${Persona.nombrecompleto} ${this.zoona}`;
    }
    
}
const alexy = new Persona('andy','macias','bolivia','hola');
console.log(alexy.saludar());
const daniel = new Profesor('daniel','perez','bolivia','php','fotoshop');
console.log(daniel.saludar());
console.log(Profesor.describirpersona(daniel));

