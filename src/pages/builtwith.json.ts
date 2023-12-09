// @ts-nocheck
import Image from './db.js';

export async function POST({request}) {
  const body = await request.json();
  const image = body.imageBase64;
  // Guardar el valor en la base de datos  Lo comento para haer pruebas tranquilamente
   try {
      const img = await Image.create({ data: image });
      console.log(img);
    } catch (err) {
      console.error(err);
    }
  
  // return the response
  return new Response(JSON.stringify(image), {
    status: 200
  });
}