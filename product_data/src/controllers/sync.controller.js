import { createApiRoot } from '../clients/create.client.js';


export const getProducts= async (request, response) =>{
  try {
    const product = await Products(request.params.productId);
    response.send({
      statusCode: 200,
      body: product,
    });
  } catch (error) {
    throw error;
  }
}


async function Products(productId){
  try {
    const response = await createApiRoot()
      .products()
      .withId({ ID: productId })
      .get()
      .execute();
    return await mapData(response.body);
  } catch (error) {
    throw error;
  }
}

function mapData(input){
  return {
      id: input.id,
      key: input.key,
      variants: input.masterData.current.variants,
      categories: input.masterData.current.categories,
      priceMode: input.priceMode,
      staged: input.masterData.staged,
      lastModifiedAt: input.lastModifiedAt,
      lastModifiedBy: input.lastModifiedBy
  };
};


export const createProducts= async (request, response) =>{
  try {
    const { typeId, name } = request?.body?.product;
    const product = await createProduct({typeId, name});
    response.send({
      statusCode: 200,
      body: product,
    });
  } catch (error) {
    throw error;
  }
}

export const createHello= async(request, response)=>{
  try {
    console.log("Hello World !!!!");
    response.send('hellooooooo')
  } catch (error) {
    throw error;
  }
}

async function createProduct({typeId, name}) {
  try {
    const productDraft = {
      "productType" : {
        "id" : typeId,
        "typeId" : "product-type"
      },
      "name" : {
        "en" : name
      },
      "slug" : {
        "en" :name
      },
    }
    const cartClientResponse = await createApiRoot()
      .products()
      .post({
        body: productDraft,
      })
      .execute();
    return (cartClientResponse.body);
  } catch (error) {
    throw error;
  }
}
