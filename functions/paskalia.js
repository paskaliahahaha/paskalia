exports.handler = async (event, context) => {
  const { radius } = event.queryStringParameters;

  if (radius === undefined) {
    return {
      statusCode: 400,
      body: 'Error: Please provide a radius parameter in your query string.\n',
    };
  } else {
    const area = Math.PI * radius ** 2;
    return {
      statusCode: 200,
      body: `The area of a circle with radius ${radius} is ${area}.\n`,
    };
  }
};
