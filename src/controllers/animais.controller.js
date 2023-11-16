import { Animal } from "../models/animal/Animal.js";
import { AnimalsLista} from "../models/animal/animalLista.js"

const animallista = new AnimalsLista();

const isURL = (url) =>{
    return url.match(/\.(jpeg|jpg|png|gif)$/) != null;
}

export const getAnimals = (req, res) =>{
    const animals = animallista.getAnimals();

    if(animals.length){
        return res.status(200).json(animals);
    }
    return res.status(200).json({message: "Não há animais cadastrados"});

}

export const getAnimal = (req, res) => {
    const { id } = req.params;
    const animal = animallista.getAnimalById(id);
  
    if (!animal) res.status(404).send({ message: "Animal não encontrado!" });
  
    return res.send(animal);
  };

  export const createAnimal = (req, res) => {
    const { name, type, age, color, image, vaccine } = req.body;

    if(!name || !type || !age || !color || !image ){
        return res.status(400).send({Message:"Dados inválidos"})
    }

    if(name.length < 3 || name.length > 50){
        return res.status(400).send({message:"Nome inválido"})
    }
    if(age < 0 ){
        return res.status(400).send({message:"Idade inválida"})
    }

    if(type.length > 30){
        return res.status(400).send({message: "Tipo inválido"})
    }

    if(color.length > 20){
        return res.status(400).send({message: "Cor inválida"})
    }
    if(typeof(vaccine) != 'boolean'){
        return res.status(400).send({message:"Responda com true ou false"})
    }
    if(!(isURL(image))){
        return res.status(400).send({message:"Imagem inválida"})
    }

    
    const animal = new Animal(name, type, age, color, image, vaccine);

    animallista.addAnimal(animal);

    return res.status(201).send(animal);

    
  }

  export const updateAnimal = (req, res) =>{
    const { id } = req.params;
    const { name, type, age, color, image, vaccine} = req.body;

    const animal = animallista.getAnimalById(id);

    if(!animal) res.status(404).send({message:"Animal não encontrado"});

    animallista.updateAnimal(id, name, type, age, color, image, vaccine);

    return res.send(animal);
    }

    export const deleteAnimal = (req, res) =>{
        const { id } = req.params;
        const animal = animallista.getAnimalById(id);

        if (!animal) res.status(404).send({message: "Animal não encontrado !"});

        animallista.deleteAnimal(id);

        return res.send(animal);
    }
  






