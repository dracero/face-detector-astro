import mongoose from "mongoose";

// Conectarse a la base de datos
mongoose.connect('mongodb+srv://root:juana99@cluster0.zf9fl.mongodb.net/imageAstro?retryWrites=true&w=majority');
// Definir el esquema
const ImageSchema = new mongoose.Schema({
  data: String, // para almacenar la imagen en base64
  // puedes agregar más campos si lo necesitas, por ejemplo:
  // name: String, // para almacenar el nombre de la imagen
  // created: { type: Date, default: Date.now }, // para almacenar la fecha de creación
});

// Crear el modelo
const Image = mongoose.model("Image", ImageSchema);

// Ahora puedes usar el modelo Image para guardar y recuperar imágenes en base64

export default Image;
