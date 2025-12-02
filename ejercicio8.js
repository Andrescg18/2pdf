 try {

 const resultado = operacionRiesgosa();
 console.log("Operación exitosa:", 
resultado);
 } catch (error) {
 
error
 console.error("Ocurrió un error:", 
error.message);
 } finally {
 
error o no
 console.log("Limpieza de recursos");
 }