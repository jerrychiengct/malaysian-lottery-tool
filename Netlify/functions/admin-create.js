exports.handler = async (event) => {
  const body = JSON.parse(event.body || '{}');

  const { username, email, password, full_name } = body;

  if (!username || !email || !password || !full_name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing required fields" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Admin created successfully",
      data: { username, email, full_name }
    }),
  };
};
