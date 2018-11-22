const getImageSrc = (hog) => {
  let imageSrc;    
  try {
   imageSrc = require(`../hog-imgs/${hog.name.toLowerCase().replace(/ /g, "_")}.jpg`); 
  } catch(e) {
   
  } 
  return imageSrc;  
}

export default getImageSrc;