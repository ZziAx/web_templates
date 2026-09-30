import { fromProduct } from "./productMap";



export function fromNavbars(data){

    return {
        content:data.content,
        uri:data.uri
    }

}

export function fromAmazingOffer(data) {
  return {
    id:data.id,
    uri: data.uri,
    remainedTime: data.remainedTime,
    products: data.products.map((p) => fromProduct(p)),
  };
}


export function fromBanner(data) {
  return {
    id: data.id,
    uri: data.uri,
    image:data.image
  };
}

export function fromGrid(data) {
  return {
    id: data.id,
    items:data.items
    // uri: data.uri
  };
}

export function fromSlider(data) {
  return {
    id: data.id,
    items:data.items
    // uri: data.uri
  };
}


export function fromTopCircularOptions(data) {
  return {
    id: data.id,
    items:data.items
    // uri: data.uri
  };
}
