export const getImageUrl=(path)=>{
    return new URL('./assets/${path}',import.meta.url).href;
};

// in take the relative path of what we are using and connect it to base url of website then pass it back as absoulte path;